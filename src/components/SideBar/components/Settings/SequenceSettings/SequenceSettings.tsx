// External imports
import React from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

// Local imports
import SideBarTitle from '../../SideBarTitle/SideBarTitle';

interface SequenceSettingsProps {
  showComplement: boolean;
  setShowComplement: React.Dispatch<React.SetStateAction<boolean>>;
  showIndex: boolean;
  setShowIndex: React.Dispatch<React.SetStateAction<boolean>>;
}

function SequenceSettings({
  showComplement,
  setShowComplement,
  showIndex,
  setShowIndex,
}: SequenceSettingsProps) {
  function handleComplementCheck(event: React.ChangeEvent<HTMLInputElement>) {
    setShowComplement(event.target.checked);
  }

  function handleIndexCheck(event: React.ChangeEvent<HTMLInputElement>) {
    setShowIndex(event.target.checked);
  }

  return (
    <Box marginTop={2}>
      <SideBarTitle title='Sequence Settings' />
      <Box margin={2}>
        <FormControlLabel
          control={
            <Switch
              onChange={(event) => handleComplementCheck(event)}
              checked={showComplement}
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
              checked={showIndex}
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
