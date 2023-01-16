// External imports
import React from 'react';
import { useTheme, Typography } from '@mui/material';

// Local imports
import { tokens } from '../../../../themes/theme';

interface SideBarTitleProps {
  title: string;
}

function SideBarTitle({ title }: SideBarTitleProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Typography
      variant='h6'
      fontWeight={600}
      color={colors.grey[300]}
      style={{ opacity: 0.7, letterSpacing: '0.5px' }}
    >
      {title}
    </Typography>
  );
}

export default SideBarTitle;
