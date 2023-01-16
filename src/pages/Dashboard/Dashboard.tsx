// External imports
import React from 'react';
import { SeqViz } from 'seqviz';

// Local imports

function Dashboard() {
  return (
    <SeqViz
      name='J23100'
      seq='TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC'
      annotations={[{ name: 'promoter', start: 0, end: 34, direction: 1, color: 'blue' }]}
      style={{ height: '90%', width: '100%' }}
    />
  );
}

export default Dashboard;
