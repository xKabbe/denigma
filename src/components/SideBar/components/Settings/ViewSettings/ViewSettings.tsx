// External imports
import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

// Local imports
import SideBarTitle from '../../SideBarTitle/SideBarTitle';

interface ViewSettingsProps {
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
}

function ViewSettings({ zoom, setZoom, size, setSize }: ViewSettingsProps) {
  const handleZoomChange = (_event: Event, newValue: number | number[]) => {
    setZoom(newValue as number);
  };

  const handleSizeChange = (_event: Event, newValue: number | number[]) => {
    setSize(newValue as number);
  };

  return (
    <Box marginTop={2}>
      <SideBarTitle title='View Settings' />
      <Box margin={2}>
        <Typography gutterBottom>Zoom</Typography>
        <Slider aria-label='zoom' color='secondary' value={zoom} onChange={handleZoomChange} />

        <Typography gutterBottom>Size</Typography>
        <Slider
          aria-label='size'
          color='secondary'
          value={size}
          min={0.0}
          max={1.0}
          step={0.01}
          onChange={handleSizeChange}
        />
      </Box>
    </Box>
  );
}

export default ViewSettings;
