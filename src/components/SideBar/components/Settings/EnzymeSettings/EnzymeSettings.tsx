// External imports
import React from 'react';
import { Box, Button, Grid } from '@mui/material';

// Local imports
import SideBarTitle from '../../SideBarTitle/SideBarTitle';

interface EnzymeSettingsProps {
  enzymeIsSelected: string[];
  setEnzymeIsSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

function EnzymeSettings({ enzymeIsSelected, setEnzymeIsSelected }: EnzymeSettingsProps) {
  const enzymeData = [
    'PSTI',
    'ECORI',
    'XBAI',
    'SPEI',
    'ECORV',
    'BAMHI',
    'HINDIII',
    'HAEIII',
    'NDEI',
    'SACI',
  ];

  function handleEnzymeSelect(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (enzymeIsSelected.includes(event.currentTarget.value)) {
      setEnzymeIsSelected((arr) => arr.filter((enzyme) => enzyme !== event.currentTarget.value));
    } else {
      setEnzymeIsSelected((prevEnzymeIsSelected) => [
        ...prevEnzymeIsSelected,
        event.currentTarget.value,
      ]);
    }
  }

  return (
    <Box marginTop={2}>
      <SideBarTitle title='Enzyme Settings' />

      <Box margin={2}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {enzymeData.map((enzyme) => (
            <Grid item xs={6} key={`${enzyme} - grid`}>
              <Button
                key={`${enzyme} - button`}
                value={enzyme}
                onClick={(event) => handleEnzymeSelect(event)}
                variant={enzymeIsSelected.includes(enzyme) ? 'contained' : 'outlined'}
                color='secondary'
                fullWidth
              >
                {enzyme}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default EnzymeSettings;
