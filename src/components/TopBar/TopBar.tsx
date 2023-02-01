// External imports
import React from 'react';
import { Box } from '@mui/material';

// Local imports
import SearchBar from './components/SearchBar/SearchBar';
import IconBar from './components/IconBar/IconBar';

interface TopBarProps {
  searchSequence: string;
  setSearchSequence: React.Dispatch<React.SetStateAction<string>>;
}

function TopBar({ searchSequence, setSearchSequence }: TopBarProps) {
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      <SearchBar searchSequence={searchSequence} setSearchSequence={setSearchSequence} />
      <IconBar />
    </Box>
  );
}

export default TopBar;
