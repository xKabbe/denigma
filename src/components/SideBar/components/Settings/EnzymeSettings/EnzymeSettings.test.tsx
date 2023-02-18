// External imports
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import EnzymeSettings from './EnzymeSettings';

const enzymeOptions = [
  { label: 'PSTI', description: 'Some text', value: 'psti' },
  { label: 'ECORI', description: 'Some text', value: 'ecori' },
  { label: 'XBAI', description: 'Some text', value: 'xbai' },
  { label: 'SPEI', description: 'Some text', value: 'spei' },
  { label: 'ECORV', description: 'Some text', value: 'ecorv' },
  { label: 'BAMHI', description: 'Some text', value: 'bamhi' },
  { label: 'HINDIII', description: 'Some text', value: 'hindiii' },
  { label: 'HAEIII', description: 'Some text', value: 'haeiii' },
  { label: 'NDEI', description: 'Some text', value: 'ndei' },
  { label: 'SACI', description: 'Some text', value: 'saci' },
];

const mockSetEnzymeIsSelected = jest.fn();

describe('EnzymeSettings', () => {
  test('should render EnzymeSettings heading', () => {
    render(<EnzymeSettings enzymeIsSelected={[]} setEnzymeIsSelected={mockSetEnzymeIsSelected} />, {
      wrapper: BrowserRouter,
    });

    const heading = screen.getByRole('heading', { name: /enzyme settings/i });
    expect(heading).toBeInTheDocument();
  });

  test('should render EnzymeSettings selection list', () => {
    render(<EnzymeSettings enzymeIsSelected={[]} setEnzymeIsSelected={mockSetEnzymeIsSelected} />, {
      wrapper: BrowserRouter,
    });

    enzymeOptions.forEach((enzymeOption) => {
      const listitem = screen.getByRole('listitem', { name: `listitem-${enzymeOption.value}` });
      expect(listitem).toBeInTheDocument();
      expect(within(listitem).getByRole('button', { name: /info-icon/i })).toBeInTheDocument();

      const listitemButton = screen.getByRole('button', {
        name: `listitem-button-${enzymeOption.value}`,
      });
      expect(listitemButton).toBeInTheDocument();
      expect(within(listitemButton).getByTestId('RadioButtonUncheckedIcon')).toBeInTheDocument();
      expect(within(listitemButton).getByText(/some text/i)).toBeInTheDocument();
    });
  });

  test('should check first EnzymeOption', () => {
    render(<EnzymeSettings enzymeIsSelected={[]} setEnzymeIsSelected={mockSetEnzymeIsSelected} />, {
      wrapper: BrowserRouter,
    });

    const pstiListitemButton = screen.getByRole('button', {
      name: `listitem-button-${enzymeOptions[0].value}`,
    });
    expect(pstiListitemButton).toBeInTheDocument();
    expect(within(pstiListitemButton).getByTestId('RadioButtonUncheckedIcon')).toBeInTheDocument();
    expect(within(pstiListitemButton).getByText(/some text/i)).toBeInTheDocument();

    userEvent.click(pstiListitemButton);
    expect(mockSetEnzymeIsSelected).toBeCalled();
  });

  test('should uncheck first EnzymeOption', () => {
    render(
      <EnzymeSettings enzymeIsSelected={['psti']} setEnzymeIsSelected={mockSetEnzymeIsSelected} />,
      { wrapper: BrowserRouter },
    );

    const pstiListitemButton = screen.getByRole('button', {
      name: `listitem-button-${enzymeOptions[0].value}`,
    });
    expect(pstiListitemButton).toBeInTheDocument();
    expect(within(pstiListitemButton).getByTestId('RadioButtonCheckedIcon')).toBeInTheDocument();
    expect(within(pstiListitemButton).getByText(/some text/i)).toBeInTheDocument();

    userEvent.click(pstiListitemButton);
    expect(mockSetEnzymeIsSelected).toBeCalled();
  });
});
