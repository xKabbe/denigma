// External imports
import React from 'react';
import { Box, useTheme } from '@mui/material';
import SeqViz from 'seqviz';

// Local imports
import { tokens } from '../../../themes/theme';

interface SequenceVisualizerProps {
  selectedView: 'both' | 'circular' | 'linear' | 'both_flip' | undefined;
}

function SequenceVisualizer({ selectedView }: SequenceVisualizerProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box style={{ height: '90%', width: '100%' }}>
      <SeqViz
        key={`seqviz-${selectedView}-mode`}
        viewer={selectedView}
        name='J23100'
        seq='TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC'
        annotations={[
          { name: 'promoter', start: 0, end: 34, direction: 1, color: colors.greenAccent[500] },
        ]}
        style={{ height: '90%', width: '100%' }}
      />
    </Box>
  );
}

export default SequenceVisualizer;
