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

interface SideBarProps {
  showComplement: boolean;
  setShowComplement: React.Dispatch<React.SetStateAction<boolean>>;
  showIndex: boolean;
  setShowIndex: React.Dispatch<React.SetStateAction<boolean>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
}

function SideBar({
  showComplement,
  setShowComplement,
  showIndex,
  setShowIndex,
  zoom,
  setZoom,
  size,
  setSize,
}: SideBarProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  // TODO: Enable option to add/remove enzymes by the user -> possibly new UI approach
  //       for enzyme buttons or there will be a limit of 5 to 10 enzymes
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
            <Box paddingLeft='5%' paddingRight='5%'>
              <ViewSettings zoom={zoom} setZoom={setZoom} size={size} setSize={setSize} />
              <Divider />
              <SequenceSettings
                showComplement={showComplement}
                setShowComplement={setShowComplement}
                showIndex={showIndex}
                setShowIndex={setShowIndex}
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
