// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('should render SearchBar', async () => {
    render(<SearchBar />, { wrapper: BrowserRouter });

    const searchTextbox = screen.getByRole('textbox');
    expect(searchTextbox).toBeInTheDocument();
    expect(searchTextbox).toHaveAttribute('placeholder', 'Search');

    const searchButton = screen.getByRole('button', { name: /search-button/i });
    expect(searchButton).toBeInTheDocument();
  });

  test('should click SearchBar button', async () => {
    render(<SearchBar />, { wrapper: BrowserRouter });

    const searchButton = screen.getByRole('button', { name: /search-button/i });
    expect(searchButton).toBeInTheDocument();

    userEvent.click(searchButton);

    const warningIcon = screen.getByTestId('ReportProblemOutlinedIcon');
    expect(warningIcon).toBeInTheDocument();

    const underConstructionTitle = screen.getByText('Under Construction...');
    expect(underConstructionTitle).toBeInTheDocument();

    const underConstructionTextPart1 = screen.getByText(/this components functionality is currently/i);
    expect(underConstructionTextPart1).toBeInTheDocument();

    const underConstructionTextPart2 = screen.getByText('Under Construction!');
    expect(underConstructionTextPart2).toBeInTheDocument();
  });
});
