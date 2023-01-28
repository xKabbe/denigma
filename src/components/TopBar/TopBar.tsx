// External imports
import React from 'react';
import { Box } from '@mui/material';

// Local imports
import SearchBar from './components/SearchBar/SearchBar';
import IconBar from './components/IconBar/IconBar';

function TopBar() {
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      <SearchBar />
      <IconBar />
    </Box>
  );
}

export default TopBar;
