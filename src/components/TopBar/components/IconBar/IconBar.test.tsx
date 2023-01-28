// External imports
import { render, screen } from '@testing-library/react';
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

    const notificationButton = screen.getByRole('button', { name: /notification-button/i });
    expect(notificationButton).toBeInTheDocument();

    const settingsButton = screen.getByRole('button', { name: /settings-button/i });
    expect(settingsButton).toBeInTheDocument();
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
});
