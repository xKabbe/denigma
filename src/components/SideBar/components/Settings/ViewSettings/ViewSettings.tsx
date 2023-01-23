// External imports
import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

// Local imports
import SideBarTitle from '../../SideBarTitle/SideBarTitle';

function ViewSettings() {
  return (
    <Box marginTop={2}>
      <SideBarTitle title='View Settings' />
      <Box margin={2}>
        <Typography gutterBottom>Zoom</Typography>
        <Slider aria-label='zoom' color='secondary' />

        <Typography gutterBottom>Size</Typography>
        <Slider aria-label='size' color='secondary' />
      </Box>
    </Box>
  );
}

export default ViewSettings;
