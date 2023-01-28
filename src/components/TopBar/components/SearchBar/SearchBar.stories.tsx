// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import SearchBar from './SearchBar';

// Story placement in the story list
export default {
  title: 'components/TopBar/components/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const Default = () => <SearchBar />;
