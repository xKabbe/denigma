// External imports
import React from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { MenuOutlined as MenuOutlinedIcon } from '@mui/icons-material';
import { MenuItem } from 'react-pro-sidebar';

// Local imports
import { tokens } from '../../../../themes/theme';
import logo from '../../../../assets/icons/denigma_icon.png';

interface SideBarHeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

function SideBarHeader({ isCollapsed, setIsCollapsed }: SideBarHeaderProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      onClick={() => setIsCollapsed(!isCollapsed)}
      icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
      style={{ margin: '10px 0 20px 0', color: colors.grey[100] }}
    >
      {!isCollapsed && (
        <Box display='flex' justifyContent='space-between' alignItems='center' ml='15px'>
          <img src={logo} alt='denigma_logo' width='70px' height='70px' />

          <Typography variant='h4' fontWeight={700} color={colors.greenAccent[500]}>
            DeNigmA
          </Typography>

          <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
      )}
    </MenuItem>
  );
}

export default SideBarHeader;
