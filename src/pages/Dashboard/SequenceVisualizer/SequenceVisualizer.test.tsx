// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import SequenceVisualizer from './SequenceVisualizer';

describe('SequenceVisualizer', () => {
  test('should render SequenceVisualizer', () => {
    const { container } = render(<SequenceVisualizer selectedView='both' searchSequence='' />, {
      wrapper: BrowserRouter,
    });

    expect(container.getElementsByClassName('la-vz-seqviz').length).toBe(1);

    const generateSequenceButton = screen.getByRole('button', { name: /generate sequence/i });
    expect(generateSequenceButton).toBeInTheDocument();

    const generateSequenceOptionsButton = screen.getByRole('button', {
      name: /generate-sequence-options/i,
    });
    expect(generateSequenceOptionsButton).toBeInTheDocument();
  });

  test('should render generate random sequence', () => {
    const { container } = render(<SequenceVisualizer selectedView='both' searchSequence='' />, {
      wrapper: BrowserRouter,
    });

    expect(container.getElementsByClassName('la-vz-seqviz').length).toBe(1);

    const generateSequenceButton = screen.getByRole('button', { name: /generate sequence/i });
    expect(generateSequenceButton).toBeInTheDocument();

    userEvent.click(generateSequenceButton);

    // TODO: Currently there is no possibility to test the SeqViz component
  });
});
