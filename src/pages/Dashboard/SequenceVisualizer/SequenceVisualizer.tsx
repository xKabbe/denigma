// External imports
import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import SeqViz from 'seqviz';

// Local imports
import { tokens } from '../../../themes/theme';
import GenerateSequenceButton from './components/GenerateSequenceButton/GenerateSequenceButton';

interface SequenceVisualizerProps {
  selectedView: 'both' | 'circular' | 'linear' | 'both_flip' | undefined;
  searchSequence: string;
}

function SequenceVisualizer({ selectedView, searchSequence }: SequenceVisualizerProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [randomSeq, setRandomSeq] = useState<string | null>(null);

  function getRandomNumberBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  const randomSequenceGenerator = (sequenceLength: { min: number; max: number }) => {
    const nucleobases = ['A', 'C', 'G', 'T'];
    const randomSequenceLength = getRandomNumberBetween(sequenceLength.min, sequenceLength.max);
    let randomSequence = '';

    for (let index = 0; index < randomSequenceLength; index++) {
      randomSequence += nucleobases[getRandomNumber(4)];
    }

    setRandomSeq(randomSequence);
  };

  return (
    <Box
      style={{
        height: '90%',
        width: '100%',
        marginTop: '25px',
      }}
    >
      <SeqViz
        key={`seqviz-${selectedView}-mode`}
        viewer={selectedView}
        search={{ query: searchSequence, mismatch: 0 }}
        name='J23100'
        seq={randomSeq === null ? 'TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC' : randomSeq}
        annotations={[
          { name: 'promoter', start: 0, end: 34, direction: 1, color: colors.greenAccent[500] },
        ]}
        style={{ height: '90%', width: '100%' }}
      />

      <GenerateSequenceButton width='250px' randomSequenceGenerator={randomSequenceGenerator} />
    </Box>
  );
}

export default SequenceVisualizer;
