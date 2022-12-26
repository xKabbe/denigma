// External imports
import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Local imports
import HomePage from '../pages/Home/HomePage';
import { ColorContext, themeSettings } from '../themes/theme';

// Component definition
function App() {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='home' element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

// Default export
export default App;
