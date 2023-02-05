// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import GenerateSequenceButton from './GenerateSequenceButton';

const generateSequenceOptions = [
  { label: 'Generate Sequence', sequenceLength: { min: 1, max: 10000 } },
  { label: 'Generate Sequence (Small)', sequenceLength: { min: 1, max: 100 } },
  { label: 'Generate Sequence (Medium)', sequenceLength: { min: 101, max: 1000 } },
  { label: 'Generate Sequence (Large)', sequenceLength: { min: 1001, max: 10000 } },
];

const mockRandomSequenceGenerator = jest.fn();

describe('GenerateSequenceButton', () => {
  test('should render GenerateSequenceButton', () => {
    render(
      <GenerateSequenceButton width='250px' randomSequenceGenerator={mockRandomSequenceGenerator} />,
      { wrapper: BrowserRouter },
    );

    const generateSequenceButton = screen.getByRole('button', { name: /generate sequence/i });
    expect(generateSequenceButton).toBeInTheDocument();

    const generateSequenceOptionsButton = screen.getByRole('button', {
      name: /generate-sequence-options/i,
    });
    expect(generateSequenceOptionsButton).toBeInTheDocument();
  });

  test('should render generate sequence button click', () => {
    render(
      <GenerateSequenceButton width='250px' randomSequenceGenerator={mockRandomSequenceGenerator} />,
      { wrapper: BrowserRouter },
    );

    const generateSequenceButton = screen.getByRole('button', { name: /generate sequence/i });
    expect(generateSequenceButton).toBeInTheDocument();

    userEvent.click(generateSequenceButton);
    expect(mockRandomSequenceGenerator).toBeCalled();
    expect(mockRandomSequenceGenerator).toBeCalledWith({ max: 10000, min: 1 });
  });

  test('should render generate sequence options button click', () => {
    render(
      <GenerateSequenceButton width='250px' randomSequenceGenerator={mockRandomSequenceGenerator} />,
      { wrapper: BrowserRouter },
    );

    const generateSequenceOptionsButton = screen.getByRole('button', {
      name: /generate-sequence-options/i,
    });

    userEvent.click(generateSequenceOptionsButton);

    generateSequenceOptions.forEach((generateSequenceOption) => {
      const option = screen.getByRole('menuitem', { name: generateSequenceOption.label });
      expect(option).toBeInTheDocument();

      userEvent.click(option);

      const generateSequenceButton = screen.getByRole('button', { name: generateSequenceOption.label });
      expect(generateSequenceButton).toBeInTheDocument();

      userEvent.click(generateSequenceButton);
      expect(mockRandomSequenceGenerator).toBeCalled();
      expect(mockRandomSequenceGenerator).toBeCalledWith(generateSequenceOption.sequenceLength);
    });
  });
});
