// External imports
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LanguageFlagDE from '../../../../../../assets/icons/language/LanguageFlagDE';
import LanguageFlagEN from '../../../../../../assets/icons/language/LanguageFlagEN';
import LanguageFlagES from '../../../../../../assets/icons/language/LanguageFlagES';

// Local imports
import LanguageSelectionMenu from './LanguageSelectionMenu';

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

// Story placement in the story list
export default {
  title: 'components/TopBar/components/IconBar/components/LanguageSelectionMenu',
  component: LanguageSelectionMenu,
} as ComponentMeta<typeof LanguageSelectionMenu>;

const Template: ComponentStory<typeof LanguageSelectionMenu> = (args) => (
  <LanguageSelectionMenu {...args} />
);

export const GermanLanguage = Template.bind({});
GermanLanguage.args = {
  open: true,
  anchorEl: null,
  setAnchorEl: () => {},
  currentLanguage: 'de',
  setCurrentLanguage: () => {},
  languageOptions,
};

export const EnglishLanguage = Template.bind({});
EnglishLanguage.args = {
  open: true,
  anchorEl: null,
  setAnchorEl: () => {},
  currentLanguage: 'en',
  setCurrentLanguage: () => {},
  languageOptions,
};

export const SpanishLanguage = Template.bind({});
SpanishLanguage.args = {
  open: true,
  anchorEl: null,
  setAnchorEl: () => {},
  currentLanguage: 'es',
  setCurrentLanguage: () => {},
  languageOptions,
};
