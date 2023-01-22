// External imports
import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon, useTheme } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

// Local imports
import { tokens } from '../../../themes/theme';

function FloatingActionDial() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

  return (
    <SpeedDial
      ariaLabel='SpeedDial basic example'
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      FabProps={{
        sx: {
          backgroundColor: colors.greenAccent[500],
          '&:hover': { bgcolor: colors.greenAccent[500] },
        },
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          FabProps={{
            sx: {
              backgroundColor: colors.primary[400],
              '&:hover': { bgcolor: colors.primary[400] },
            },
          }}
        />
      ))}
    </SpeedDial>
  );
}

export default FloatingActionDial;
