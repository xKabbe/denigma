// External imports
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('should render SearchBar', () => {
    render(<SearchBar />, { wrapper: BrowserRouter });
    const searchButton = screen.getByRole('button', { name: /search-button/i });
    expect(searchButton).toBeInTheDocument();
  });

  // TODO: Add functionality + test
});
