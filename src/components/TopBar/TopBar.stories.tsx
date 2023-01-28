// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import TopBar from './TopBar';

// Story placement in the story list
export default {
  title: 'components/TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>;

export const Default = () => <TopBar />;
