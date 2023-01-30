// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

// Local imports
import IconBar from './IconBar';
import { themeSettings } from '../../../../themes/theme';

const colorModes = [
  { label: 'Dark', theme: createTheme(themeSettings('dark')), icon: 'DarkModeOutlinedIcon' },
  { label: 'Light', theme: createTheme(themeSettings('light')), icon: 'LightModeOutlinedIcon' },
];

describe('IconBar', () => {
  test('should render IconBar', () => {
    render(<IconBar />, { wrapper: BrowserRouter });

    const colorModeButton = screen.getByRole('button', { name: /color-mode-button/i });
    expect(colorModeButton).toBeInTheDocument();

    const languageButton = screen.getByRole('button', { name: /language-selection-button/i });
    expect(languageButton).toBeInTheDocument();
  });

  colorModes.forEach((colorMode) => {
    test(`should render IconBar ${colorMode.label} mode`, () => {
      render(
        <ThemeProvider theme={colorMode.theme}>
          <IconBar />,
        </ThemeProvider>,
      );

      const colorModeButton = screen.getByRole('button', { name: /color-mode-button/i });
      expect(colorModeButton).toBeInTheDocument();

      const colorModeIcon = screen.getByTestId(colorMode.icon);
      expect(colorModeIcon).toBeInTheDocument();
    });
  });

  test('should render IconBar language menu and menuitems', () => {
    render(<IconBar />, { wrapper: BrowserRouter });

    const languageButton = screen.getByRole('button', { name: /language-selection-button/i });
    expect(languageButton).toBeInTheDocument();
    expect(languageButton.getAttribute('aria-expanded')).toEqual('false');

    let germanMenuItem = screen.queryByRole('menuitem', { name: /german/i });
    expect(germanMenuItem).toBeNull();

    let englishMenuItem = screen.queryByRole('menuitem', { name: /english/i });
    expect(englishMenuItem).toBeNull();

    let spanishMenuItem = screen.queryByRole('menuitem', { name: /spanish/i });
    expect(spanishMenuItem).toBeNull();

    userEvent.click(languageButton);
    expect(languageButton.getAttribute('aria-expanded')).toEqual('true');

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();

    germanMenuItem = screen.getByRole('menuitem', { name: /german/i });
    expect(germanMenuItem).toBeInTheDocument();

    englishMenuItem = screen.getByRole('menuitem', { name: /english/i });
    expect(englishMenuItem).toBeInTheDocument();

    spanishMenuItem = screen.getByRole('menuitem', { name: /spanish/i });
    expect(spanishMenuItem).toBeInTheDocument();
  });
});
