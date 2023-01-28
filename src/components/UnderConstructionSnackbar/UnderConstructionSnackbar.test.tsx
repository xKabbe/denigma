// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import UnderConstructionSnackbar from './UnderConstructionSnackbar';

const mockSetOpen = jest.fn();

describe('UnderConstructionSnackbar', () => {
  test('should render UnderConstructionSnackbar', () => {
    render(<UnderConstructionSnackbar open setOpen={mockSetOpen} />, { wrapper: BrowserRouter });

    const warningIcon = screen.getByTestId('ReportProblemOutlinedIcon');
    expect(warningIcon).toBeInTheDocument();

    const underConstructionTitle = screen.getByText('Under Construction...');
    expect(underConstructionTitle).toBeInTheDocument();

    const underConstructionTextPart1 = screen.getByText(/this components functionality is currently/i);
    expect(underConstructionTextPart1).toBeInTheDocument();

    const underConstructionTextPart2 = screen.getByText('Under Construction!');
    expect(underConstructionTextPart2).toBeInTheDocument();
  });

  test('should click UnderConstructionSnackbar close button', () => {
    render(<UnderConstructionSnackbar open setOpen={mockSetOpen} />, { wrapper: BrowserRouter });

    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    userEvent.click(closeButton);
    expect(mockSetOpen).toBeCalled();
  });
});
