// External imports
import React from 'react';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

// Local imports
import { tokens } from '../../../../themes/theme';
import UnderConstructionSnackbar from '../../../UnderConstructionSnackbar/UnderConstructionSnackbar';

function SearchBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);

  const handleOnSearch = () => {
    // TODO: Under Construction - Add functionality
    setOpen(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: colors.primary[400],
        borderRadius: '3px',
      }}
    >
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
      <IconButton
        aria-label='search-button'
        type='button'
        sx={{ p: 1 }}
        onClick={() => handleOnSearch()}
      >
        <SearchIcon />
      </IconButton>

      {/* TODO: Under Construction - Add functionality */}
      <UnderConstructionSnackbar open={open} setOpen={setOpen} />
    </Box>
  );
}

export default SearchBar;
