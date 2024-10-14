import React from 'react';
import { Stack, Text, Link, IconButton, Image } from '@fluentui/react';


const Footer = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      styles={{
        root: {
          width: '100%',
          height: 60,
          backgroundColor: '#f3f2f1',
          borderTop: '1px solid #e1dfdd',
          padding: '10px 0',
          position: 'fixed',
          bottom: 0,
          left: 0,
        },
      }}
    >
      <Stack horizontal horizontalAlign="space-between" verticalAlign="center" styles={{ root: { width: '80%' } }}>
        <Image styles={{ root: { width: 24, height: 24 } }} src="./unimi.png"/>
        <Text variant="small">Universita' degli Studi di Milano</Text>
        <Text variant="small">v0.9.0</Text>

        <Stack horizontal tokens={{ childrenGap: 10 }}>
          {/* <Image
            src="Evento6settMUSA-removebg-preview.png"  // Replace with your first PNG image path
            alt="Icon 1"
            styles={{ root: { width: 24, height: 24 } }}
          />
          <Image
            src="path_to_icon2.png"  // Replace with your second PNG image path
            alt="Icon 2"
            styles={{ root: { width: 24, height: 24 } }}
          /> */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
