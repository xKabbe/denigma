// External imports
import React, { useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import {
  LightModeOutlined as LightModeOutlinedIcon,
  DarkModeOutlined as DarkModeOutlinedIcon,
  NotificationsOutlined as NotificationsOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
} from '@mui/icons-material';

// Local imports
import { ColorContext } from '../../../../themes/theme';

function IconBar() {
  const theme = useTheme();
  const colorMode = useContext(ColorContext);

  return (
    <Box display='flex'>
      <IconButton aria-label='color-mode-button' onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </IconButton>
      <IconButton aria-label='notification-button'>
        <NotificationsOutlinedIcon />
      </IconButton>
      <IconButton aria-label='settings-button'>
        <SettingsOutlinedIcon />
      </IconButton>
    </Box>
  );
}

export default IconBar;
