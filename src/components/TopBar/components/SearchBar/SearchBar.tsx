// External imports
import React from 'react';
import { Box, InputAdornment, InputBase, useTheme } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

// Local imports
import { tokens } from '../../../../themes/theme';

interface SearchBarProps {
  searchSequence: string;
  setSearchSequence: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ searchSequence, setSearchSequence }: SearchBarProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleOnSearch = (search: string) => {
    setSearchSequence(search);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: colors.primary[400],
        borderRadius: '3px',
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder='Search'
        value={searchSequence}
        endAdornment={
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        }
        onChange={(event) => handleOnSearch(event.target.value)}
      />
    </Box>
  );
}

export default SearchBar;
