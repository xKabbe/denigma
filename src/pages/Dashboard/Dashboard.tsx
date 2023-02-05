// External imports
import React, { useState } from 'react';
import { Box } from '@mui/material';

// Local imports
import ViewTab from './ViewTab/ViewTab';
import SequenceVisualizer from './SequenceVisualizer/SequenceVisualizer';
import FloatingActionDial from './FloatingActionDial/FloatingActionDial';

interface DashboardProps {
  searchSequence: string;
  showComplement: boolean;
  showIndex: boolean;
}

type ViewModes = 'both' | 'circular' | 'linear' | 'both_flip' | undefined;

function Dashboard({ searchSequence, showComplement, showIndex }: DashboardProps) {
  const [selectedView, setSelectedView] = useState<ViewModes>('both');

  return (
    <Box style={{ height: '90%', width: '100%', paddingLeft: '20px', paddingRight: '20px' }}>
      <ViewTab selectedView={selectedView} setSelectedView={setSelectedView} />
      <SequenceVisualizer
        selectedView={selectedView}
        searchSequence={searchSequence}
        showComplement={showComplement}
        showIndex={showIndex}
      />
      <FloatingActionDial />
    </Box>
  );
}

export default Dashboard;
