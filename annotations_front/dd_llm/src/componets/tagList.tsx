import React, { FC, FunctionComponent, useState } from 'react';
import { Stack, Label, IconButton } from '@fluentui/react';
interface PropsTagList {
  tagList: string[]
}

const TagList: FC<PropsTagList> = (props) => {

  // Function to remove a tag from the list
  const removeTag = (indexToRemove: number) => {

  };

  // Function to add a new tag to the list
  return (
    <div style={{ width: 300, margin: '0 auto' }}>
      <Stack tokens={{ childrenGap: 10 }}>
        <Stack horizontal wrap tokens={{ childrenGap: 8 }}>
          {props.tagList.map((tag, index) => (
            <Stack
              horizontal
              verticalAlign="center"
              key={index}
              styles={{
                root: {
                  padding: '2px',
                  margin: '5px',
                  border: '2px solid #c1d9b3',
                  borderRadius: '3px',
                  background: '#c1d9b3',
                  backgroundColor: '#c1d9b3',
                  alignItems: 'center',
                  display: 'inline-block'
                },
              }}
            >
              <Label styles={{ root: { overflow: 'hidden', textOverflow: 'ellipsis' } }}>{tag}</Label>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </div>
  );
};

export default TagList;
