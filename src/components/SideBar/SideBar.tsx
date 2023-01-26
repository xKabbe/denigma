// External imports
import React, { useState } from 'react';
import { ProSidebar, Menu } from 'react-pro-sidebar';
import { Box, Divider, useTheme } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';

// Local imports
import { tokens } from '../../themes/theme';
import SideBarHeader from './components/SideBarHeader/SideBarHeader';
import ViewSettings from './components/Settings/ViewSettings/ViewSettings';
import SequenceSettings from './components/Settings/SequenceSettings/SequenceSettings';
import EnzymeSettings from './components/Settings/EnzymeSettings/EnzymeSettings';
import SideBarFooter from './components/SideBarFooter/SideBarFooter';

function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [complementIsChecked, setComplementIsChecked] = useState<boolean>(true);
  const [indexIsChecked, setIndexIsChecked] = useState<boolean>(true);
  const [enzymeIsSelected, setEnzymeIsSelected] = useState<Array<string>>([
    'PSTI',
    'ECORI',
    'XBAI',
    'SPEI',
    'ECORV',
    'BAMHI',
    'HINDIII',
    'HAEIII',
    'NDEI',
    'SACI',
  ]);

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
          <SideBarHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

          {!isCollapsed && (
            <Box
              paddingLeft={isCollapsed ? undefined : '5%'}
              paddingRight={isCollapsed ? undefined : '5%'}
            >
              <ViewSettings />
              <Divider />
              <SequenceSettings
                complementIsChecked={complementIsChecked}
                setComplementIsChecked={setComplementIsChecked}
                indexIsChecked={indexIsChecked}
                setIndexIsChecked={setIndexIsChecked}
              />
              <Divider />
              <EnzymeSettings
                enzymeIsSelected={enzymeIsSelected}
                setEnzymeIsSelected={setEnzymeIsSelected}
              />
            </Box>
          )}

          <SideBarFooter isCollapsed={isCollapsed} />
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default SideBar;
