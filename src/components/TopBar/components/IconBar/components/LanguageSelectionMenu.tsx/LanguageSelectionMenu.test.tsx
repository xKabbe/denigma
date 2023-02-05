// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import LanguageFlagDE from '../../../../../../assets/icons/language/LanguageFlagDE';
import LanguageFlagEN from '../../../../../../assets/icons/language/LanguageFlagEN';
import LanguageFlagES from '../../../../../../assets/icons/language/LanguageFlagES';
import LanguageSelectionMenu from './LanguageSelectionMenu';

const mockSetAnchorEl = jest.fn();
const mockSetCurrentLanguage = jest.fn();

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

describe('LanguageSelectionMenu', () => {
  test('should render LanguageSelectionMenu', () => {
    render(
      <LanguageSelectionMenu
        open
        anchorEl={null}
        setAnchorEl={mockSetAnchorEl}
        currentLanguage='en'
        setCurrentLanguage={mockSetCurrentLanguage}
        languageOptions={languageOptions}
      />,
      { wrapper: BrowserRouter },
    );

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();

    const germanMenuItem = screen.getByRole('menuitem', { name: /german/i });
    expect(germanMenuItem).toBeInTheDocument();

    const englishMenuItem = screen.getByRole('menuitem', { name: /english/i });
    expect(englishMenuItem).toBeInTheDocument();

    const spanishMenuItem = screen.getByRole('menuitem', { name: /spanish/i });
    expect(spanishMenuItem).toBeInTheDocument();
  });

  test('should click and select LanguageSelectionMenu language items', () => {
    render(
      <LanguageSelectionMenu
        open
        anchorEl={null}
        setAnchorEl={mockSetAnchorEl}
        currentLanguage='en'
        setCurrentLanguage={mockSetCurrentLanguage}
        languageOptions={languageOptions}
      />,
      { wrapper: BrowserRouter },
    );

    const germanMenuItem = screen.getByRole('menuitem', { name: /german/i });
    userEvent.click(germanMenuItem);
    expect(mockSetCurrentLanguage).toBeCalled();

    const englishMenuItem = screen.getByRole('menuitem', { name: /english/i });
    expect(englishMenuItem.getAttribute('aria-disabled')).toBeTruthy();

    const spanishMenuItem = screen.getByRole('menuitem', { name: /spanish/i });
    userEvent.click(spanishMenuItem);
    expect(mockSetCurrentLanguage).toBeCalled();
  });
});
