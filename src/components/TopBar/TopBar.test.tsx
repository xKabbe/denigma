// External imports
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import TopBar from './TopBar';

describe('TopBar', () => {
  test('should render TopBar', () => {
    render(<TopBar />, { wrapper: BrowserRouter });

    const searchTextbox = screen.getByRole('textbox');
    expect(searchTextbox).toBeInTheDocument();
    expect(searchTextbox).toHaveAttribute('placeholder', 'Search');

    const searchButton = screen.getByRole('button', { name: /search-button/i });
    expect(searchButton).toBeInTheDocument();

    const colorModeButton = screen.getByRole('button', { name: /color-mode-button/i });
    expect(colorModeButton).toBeInTheDocument();

    const languageButton = screen.getByRole('button', { name: /language-selection-button/i });
    expect(languageButton).toBeInTheDocument();
  });
});
