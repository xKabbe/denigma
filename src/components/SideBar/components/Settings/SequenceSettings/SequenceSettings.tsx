// External imports
import React from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

// Local imports
import SideBarTitle from '../../SideBarTitle/SideBarTitle';

interface SequenceSettingsProps {
  complementIsChecked: boolean;
  setComplementIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  indexIsChecked: boolean;
  setIndexIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

function SequenceSettings({
  complementIsChecked,
  setComplementIsChecked,
  indexIsChecked,
  setIndexIsChecked,
}: SequenceSettingsProps) {
  function handleComplementCheck(event: React.ChangeEvent<HTMLInputElement>) {
    setComplementIsChecked(event.target.checked);
  }

  function handleIndexCheck(event: React.ChangeEvent<HTMLInputElement>) {
    setIndexIsChecked(event.target.checked);
  }

  return (
    <Box marginTop={2}>
      <SideBarTitle title='Sequence Settings' />
      <Box margin={2}>
        <FormControlLabel
          control={
            <Switch
              onChange={(event) => handleComplementCheck(event)}
              checked={complementIsChecked}
              color='secondary'
            />
          }
          label='Show Complement'
          sx={{ width: '100%' }}
        />
        <FormControlLabel
          control={
            <Switch
              onChange={(event) => handleIndexCheck(event)}
              checked={indexIsChecked}
              color='secondary'
            />
          }
          label='Show Index'
          sx={{ width: '100%' }}
        />
      </Box>
    </Box>
  );
}

export default SequenceSettings;
