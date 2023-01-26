// External imports
import React from 'react';
import { Alert, AlertTitle, Snackbar } from '@mui/material';

// Local imports

interface UnderConstructionSnackbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function UnderConstructionSnackbar({ open, setOpen }: UnderConstructionSnackbarProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{ display: 'block', textAlign: 'center' }}
    >
      <Alert severity='warning' variant='filled' onClose={() => setOpen(false)}>
        <AlertTitle>Under Construction...</AlertTitle>
        This components functionality is currently <strong>Under Construction!</strong>
      </Alert>
    </Snackbar>
  );
}

export default UnderConstructionSnackbar;
