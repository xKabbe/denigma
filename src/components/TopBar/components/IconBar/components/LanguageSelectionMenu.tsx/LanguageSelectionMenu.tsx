// External imports
import React from 'react';
import {
  ClickAwayListener,
  Grow,
  ListItemIcon,
  ListItemText,
  MenuList,
  MenuItem,
  Paper,
  Popper,
  useTheme,
} from '@mui/material';

// Local imports
import { tokens } from '../../../../../../themes/theme';

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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChooseLanguage = (language: Languages) => {
    setCurrentLanguage(language);
    setAnchorEl(null);
  };

  const handleCloseLanguageSelection = () => {
    setAnchorEl(null);
  };

  return (
    <Popper
      sx={{
        zIndex: 1,
      }}
      open={open}
      anchorEl={anchorEl}
      transition
      disablePortal
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: 'center top',
            backgroundColor: colors.primary[400],
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleCloseLanguageSelection}>
              <MenuList id='language-menu-list' autoFocusItem>
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
                      sx={{ backgroundColor: colors.primary[400] }}
                      onClick={() => handleChooseLanguage(languageOption as Languages)}
                    >
                      <ListItemIcon>{languageProperties.component}</ListItemIcon>
                      <ListItemText>{languageProperties.label}</ListItemText>
                    </MenuItem>
                  ),
                )}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export default LanguageSelectionMenu;
