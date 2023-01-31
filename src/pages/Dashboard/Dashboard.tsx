// External imports
import React, { useState } from 'react';
import { Box } from '@mui/material';

// Local imports
import ViewTab from './ViewTab/ViewTab';
import SequenceVisualizer from './SequenceVisualizer/SequenceVisualizer';
import FloatingActionDial from './FloatingActionDial/FloatingActionDial';

type ViewModes = 'both' | 'circular' | 'linear' | 'both_flip' | undefined;

function Dashboard() {
  const [selectedView, setSelectedView] = useState<ViewModes>('both');

  return (
    <Box style={{ height: '90%', width: '100%', paddingLeft: '20px', paddingRight: '20px' }}>
      <ViewTab selectedView={selectedView} setSelectedView={setSelectedView} />
      <SequenceVisualizer selectedView={selectedView} />
      <FloatingActionDial />
    </Box>
  );
}

export default Dashboard;
