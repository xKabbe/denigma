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
  showComplement: boolean;
  showIndex: boolean;
}

function SequenceVisualizer({
  selectedView,
  searchSequence,
  showComplement,
  showIndex,
}: SequenceVisualizerProps) {
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
      {/*
      TODO: Add enzymes
      TODO: Add zoom
      TODO: Add size
       */}
      <SeqViz
        key={`seqviz-${selectedView}-mode`}
        viewer={selectedView}
        search={{ query: searchSequence, mismatch: 0 }}
        name={randomSeq === null ? 'J23100' : 'Example Sequence'}
        seq={randomSeq === null ? 'TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC' : randomSeq}
        showComplement={showComplement}
        showIndex={showIndex}
        annotations={[
          { start: 0, end: 22, name: 'Strong promoter', direction: 1 },
          { start: 23, end: 273, name: 'GFP' },
          { start: 300, end: 325, name: 'Weak promoter', direction: -1, color: '#FAA887' },
        ]}
        translations={[{ start: 0, end: randomSeq ? randomSeq.length : 0, direction: 1 }]}
        bpColors={{
          A: colors.nucleotides.A,
          C: colors.nucleotides.C,
          G: colors.nucleotides.G,
          T: colors.nucleotides.T,
        }}
        style={{ height: '90%', width: '100%' }}
      />

      <GenerateSequenceButton width='250px' randomSequenceGenerator={randomSequenceGenerator} />
    </Box>
  );
}

export default SequenceVisualizer;
