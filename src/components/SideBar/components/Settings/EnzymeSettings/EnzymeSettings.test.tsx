// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import EnzymeSettings from './EnzymeSettings';

const selectedEnzymes = ['PSTI', 'ECORI'];

const mockSetEnzymeIsSelected = jest.fn();

describe('EnzymeSettings', () => {
  test('should render EnzymeSettings heading', () => {
    render(<EnzymeSettings enzymeIsSelected={[]} setEnzymeIsSelected={mockSetEnzymeIsSelected} />, {
      wrapper: BrowserRouter,
    });

    const heading = screen.getByRole('heading', { name: /enzyme settings/i });
    expect(heading).toBeInTheDocument();
  });

  test('should render EnzymeSettings buttons', () => {
    render(<EnzymeSettings enzymeIsSelected={[]} setEnzymeIsSelected={mockSetEnzymeIsSelected} />, {
      wrapper: BrowserRouter,
    });

    const enzymeButton = screen.getByRole('button', { name: 'XBAI' });
    expect(enzymeButton).toBeInTheDocument();
  });

  test('should click selected EnzymeSettings button', () => {
    render(
      <EnzymeSettings
        enzymeIsSelected={selectedEnzymes}
        setEnzymeIsSelected={mockSetEnzymeIsSelected}
      />,
      { wrapper: BrowserRouter },
    );

    const enzymeButton = screen.getByRole('button', { name: 'PSTI' });
    expect(enzymeButton).toBeInTheDocument();

    userEvent.click(enzymeButton);
    expect(mockSetEnzymeIsSelected).toBeCalled();
  });

  test('should click not selected EnzymeSettings button', () => {
    render(
      <EnzymeSettings
        enzymeIsSelected={selectedEnzymes}
        setEnzymeIsSelected={mockSetEnzymeIsSelected}
      />,
      { wrapper: BrowserRouter },
    );

    const enzymeButton = screen.getByRole('button', { name: 'XBAI' });
    expect(enzymeButton).toBeInTheDocument();

    userEvent.click(enzymeButton);
    expect(mockSetEnzymeIsSelected).toBeCalled();
  });
});
