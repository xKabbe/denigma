// External imports
import React from 'react';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';

// Local imports

type Languages = 'de' | 'en' | 'es';

interface LanguageSelectionMenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  currentLanguage: Languages;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<Languages>>;
  languageOptions: {
    de: {
      label: string;
      component: JSX.Element;
    };
    en: {
      label: string;
      component: JSX.Element;
    };
    es: {
      label: string;
      component: JSX.Element;
    };
  };
}

function LanguageSelectionMenu({
  open,
  anchorEl,
  setAnchorEl,
  currentLanguage,
  setCurrentLanguage,
  languageOptions,
}: LanguageSelectionMenuProps) {
  const handleChooseLanguage = (language: Languages) => {
    setCurrentLanguage(language);
    setAnchorEl(null);
  };

  const handleCloseLanguageSelection = () => {
    setAnchorEl(null);
  };

  return (
    <Menu id='language-menu' anchorEl={anchorEl} open={open} onClose={handleCloseLanguageSelection}>
      {Object.entries(languageOptions).map(
        ([languageOption, languageProperties]: [
          string,
          {
            label: string;
            component: JSX.Element;
          },
        ]) => (
          <MenuItem
            key={`${languageOption}-item`}
            disabled={currentLanguage === languageOption}
            color='red'
            onClick={() => handleChooseLanguage(languageOption as Languages)}
          >
            <ListItemIcon>{languageProperties.component}</ListItemIcon>
            <ListItemText>{languageProperties.label}</ListItemText>
          </MenuItem>
        ),
      )}
    </Menu>
  );
}

export default LanguageSelectionMenu;
