// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import SequenceSettings from './SequenceSettings';

const mockSetComplementIsChecked = jest.fn();
const mockSetIndexIsChecked = jest.fn();

describe('SequenceSettings', () => {
  test('should render SequenceSettings heading', () => {
    render(
      <SequenceSettings
        complementIsChecked
        setComplementIsChecked={mockSetComplementIsChecked}
        indexIsChecked
        setIndexIsChecked={mockSetIndexIsChecked}
      />,
      { wrapper: BrowserRouter },
    );

    const heading = screen.getByRole('heading', { name: /sequence settings/i });
    expect(heading).toBeInTheDocument();
  });

  test('should render checked SequenceSettings switches', () => {
    render(
      <SequenceSettings
        complementIsChecked
        setComplementIsChecked={mockSetComplementIsChecked}
        indexIsChecked
        setIndexIsChecked={mockSetIndexIsChecked}
      />,
      { wrapper: BrowserRouter },
    );

    const complementSwitch = screen.getByRole('checkbox', { name: /show complement/i });
    expect(complementSwitch).toBeInTheDocument();

    const indexSwitch = screen.getByRole('checkbox', { name: /show index/i });
    expect(indexSwitch).toBeInTheDocument();
  });

  test('should click checked SequenceSettings switches', () => {
    render(
      <SequenceSettings
        complementIsChecked
        setComplementIsChecked={mockSetComplementIsChecked}
        indexIsChecked
        setIndexIsChecked={mockSetIndexIsChecked}
      />,
      { wrapper: BrowserRouter },
    );

    const complementSwitch = screen.getByRole('checkbox', { name: /show complement/i });
    expect(complementSwitch).toBeInTheDocument();
    expect(complementSwitch).toBeChecked();

    userEvent.click(complementSwitch);
    expect(mockSetComplementIsChecked).toBeCalled();

    const indexSwitch = screen.getByRole('checkbox', { name: /show index/i });
    expect(indexSwitch).toBeInTheDocument();
    expect(indexSwitch).toBeChecked();

    userEvent.click(indexSwitch);
    expect(mockSetIndexIsChecked).toBeCalled();
  });

  test('should click unchecked SequenceSettings switches', () => {
    render(
      <SequenceSettings
        complementIsChecked={false}
        setComplementIsChecked={mockSetComplementIsChecked}
        indexIsChecked={false}
        setIndexIsChecked={mockSetIndexIsChecked}
      />,
      { wrapper: BrowserRouter },
    );

    const complementSwitch = screen.getByRole('checkbox', { name: /show complement/i });
    expect(complementSwitch).toBeInTheDocument();
    expect(complementSwitch).not.toBeChecked();

    userEvent.click(complementSwitch);
    expect(mockSetComplementIsChecked).toBeCalled();

    const indexSwitch = screen.getByRole('checkbox', { name: /show index/i });
    expect(indexSwitch).toBeInTheDocument();
    expect(indexSwitch).not.toBeChecked();

    userEvent.click(indexSwitch);
    expect(mockSetIndexIsChecked).toBeCalled();
  });
});
