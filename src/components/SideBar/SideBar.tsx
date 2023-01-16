// External imports
import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Paper, Typography, useTheme } from '@mui/material';
import { MenuOutlined as MenuOutlinedIcon } from '@mui/icons-material';
import 'react-pro-sidebar/dist/css/styles.css';

// Local imports
import SideBarTitle from './components/SideBarTitle/SideBarTitle';
import logo from '../../assets/icons/denigma_icon.png';
import { tokens } from '../../themes/theme';

function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': { background: `${colors.primary[400]} !important` },
        '& .pro-icon-wrapper': { backgroundColor: 'transparent !important' },
        '& .pro-inner-item': { padding: '5px 35px 5px 20px !important' },
        '& .pro-inner-item:hover': { color: '#868dfb !important' },
        '& .pro-menu-item.active': { color: '#6870fa !important' },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display='flex' justifyContent='space-between' alignItems='center' ml='15px'>
                <img src={logo} alt='denigma_logo' width='70px' height='70px' />
                <Typography variant='h4' fontWeight={700} color='#4bc9a2'>
                  DeNigmA
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box
              paddingLeft={isCollapsed ? undefined : '5%'}
              paddingRight={isCollapsed ? undefined : '5%'}
            >
              <SideBarTitle title='Views' />
              <Box margin={2}>
                <Paper
                  sx={{
                    borderRadius: 5,
                    paddingTop: 2,
                    paddingBottom: 2,
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#4bc9a2',
                  }}
                >
                  <Typography>Test</Typography>
                </Paper>
              </Box>

              <SideBarTitle title='Sequence Settings' />
              <Box margin={2}>
                <Paper
                  sx={{
                    borderRadius: 5,
                    paddingTop: 2,
                    paddingBottom: 2,
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#4bc9a2',
                  }}
                >
                  <Typography>Test</Typography>
                </Paper>
              </Box>

              <SideBarTitle title='General Settings' />
              <Box margin={2}>
                <Paper
                  sx={{
                    borderRadius: 5,
                    paddingTop: 2,
                    paddingBottom: 2,
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#4bc9a2',
                  }}
                >
                  <Typography>Test</Typography>
                </Paper>
              </Box>
            </Box>
          )}
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default SideBar;
