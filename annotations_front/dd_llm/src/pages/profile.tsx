// src/Profile.js
import React, { useState, useEffect } from 'react';
import { TextField, Dropdown, PrimaryButton, Stack, IStackTokens, MessageBar, MessageBarType, Label, Text } from '@fluentui/react';
import { BASE_URL } from '../const/const';
const roles = [
  { key: 'admin', text: 'Admin' },
  { key: 'user', text: 'User' },
  { key: 'guest', text: 'Guest' },
];

const stackTokens: IStackTokens = { childrenGap: 20 };

const Profile = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [rolesOpt, setRolesOpt] = useState([])
  const [backgroundOpt, setBackgroundOpt] = useState([])
  const [background, setBackground] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileLocal = localStorage.getItem('profile')
        if (profileLocal) {
            const savedProfile = JSON.parse(profileLocal);
            setId(savedProfile.id);
            setEmail(savedProfile.email);
            setRole(savedProfile.role);
            setBackground(savedProfile.background);
        }


        const rolesOptionResponse = await fetch(BASE_URL+'/roles');
        const backgroundOptionResponse = await fetch(BASE_URL+'/backgrounds');

        const roleData = (await rolesOptionResponse.json()).map((x:any)=> ({ key: x._id, text: x.role }));
        const backgroundData = (await backgroundOptionResponse.json()).map((x:any)=> ({ key: x._id, text: x.background }));

        setRolesOpt(roleData)
        setBackgroundOpt(backgroundData)
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    const profile = { email, role, background };
    // Here you would typically handle the form submission, e.g., send the data to a server
    // console.log({ email, role, background });
    const response = await fetch(BASE_URL+'/annotators/human', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        const data = await response.json();
        setId(data._id);
        console.info(data)
        // Save the profile including the new id to localStorage
        localStorage.setItem('profile', JSON.stringify({ ...profile, id: data._id }));

        setShowMessage(true);
    }
  };

  return (
    <Stack tokens={stackTokens} styles={{ root: { width: 300, margin: '0 auto', paddingTop: 20 } }}>
      <Text variant='xxLarge'>
        Profile
      </Text>
      <TextField
        label="Email"
        value={email}
        onChange={(e, newValue) => setEmail(newValue || '')}
      />
      <Dropdown
        label="Role"
        selectedKey={role}
        onChange={(e, newValue) => setRole(newValue?.key as string)}
        options={rolesOpt}
        placeholder="Select a role"
      />
       <Dropdown
        label="Background"
        selectedKey={background}
        onChange={(e, newValue) => setBackground(newValue?.key as string)}
        options={backgroundOpt}
        placeholder="Select a background"
      />
      
      <PrimaryButton text="Save" onClick={handleSave} />
      {showMessage && (
        <MessageBar
          messageBarType={MessageBarType.success}
          isMultiline={false}
          onDismiss={() => setShowMessage(false)}
          dismissButtonAriaLabel="Close"
        >
          Profile saved successfully!
        </MessageBar>
      )}
    </Stack>
  );
};

export default Profile;
