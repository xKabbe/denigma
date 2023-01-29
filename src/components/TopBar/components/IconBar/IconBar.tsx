// External imports
import React, { useContext, useState } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import {
  LightModeOutlined as LightModeOutlinedIcon,
  DarkModeOutlined as DarkModeOutlinedIcon,
} from '@mui/icons-material';

// Local imports
import { ColorContext } from '../../../../themes/theme';
import LanguageFlagDE from '../../../../assets/icons/language/LanguageFlagDE';
import LanguageFlagEN from '../../../../assets/icons/language/LanguageFlagEN';
import LanguageFlagES from '../../../../assets/icons/language/LanguageFlagES';
import LanguageSelectionMenu from './components/LanguageSelectionMenu.tsx/LanguageSelectionMenu';

type Languages = 'de' | 'en' | 'es';

const languageOptions = {
  de: {
    label: 'German',
    component: <LanguageFlagDE size={20} />,
  },
  en: {
    label: 'English',
    component: <LanguageFlagEN size={20} />,
  },
  es: {
    label: 'Spanish',
    component: <LanguageFlagES size={20} />,
  },
};

// type Languages = keyof typeof languageOptions;

function IconBar() {
  const theme = useTheme();
  const colorMode = useContext(ColorContext);

  const [currentLanguage, setCurrentLanguage] = useState<Languages>('en');
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpenLanguageSelection = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box display='flex'>
      <IconButton aria-label='color-mode-button' onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </IconButton>

      <IconButton
        aria-label='language-selection-button'
        aria-controls={open ? 'language-selection-menu' : undefined}
        aria-expanded={open ? 'true' : 'false'}
        onClick={handleOpenLanguageSelection}
      >
        {languageOptions[currentLanguage].component}
      </IconButton>

      <LanguageSelectionMenu
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        languageOptions={languageOptions}
      />
    </Box>
  );
}

export default IconBar;
