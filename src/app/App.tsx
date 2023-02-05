// External imports
import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Local imports
import Dashboard from '../pages/Dashboard/Dashboard';
import TopBar from '../components/TopBar/TopBar';
import SideBar from '../components/SideBar/SideBar';
import { ColorContext, themeSettings } from '../themes/theme';

// Component definition
function App() {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const [searchSequence, setSearchSequence] = useState<string>('');
  const [showComplement, setShowComplement] = useState<boolean>(true);
  const [showIndex, setShowIndex] = useState<boolean>(true);

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
        <div className='app'>
          <SideBar
            showComplement={showComplement}
            setShowComplement={setShowComplement}
            showIndex={showIndex}
            setShowIndex={setShowIndex}
          />
          <main className='content'>
            <TopBar searchSequence={searchSequence} setSearchSequence={setSearchSequence} />
            <Routes>
              <Route
                path='/'
                element={
                  <Dashboard
                    searchSequence={searchSequence}
                    showComplement={showComplement}
                    showIndex={showIndex}
                  />
                }
              />
              <Route
                path='dashboard'
                element={
                  <Dashboard
                    searchSequence={searchSequence}
                    showComplement={showComplement}
                    showIndex={showIndex}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

// Default export
export default App;
