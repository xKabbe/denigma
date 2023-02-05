// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import Dashboard from './Dashboard';

// Story placement in the story list
export default {
  title: 'pages/Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>;

export const Default = () => <Dashboard searchSequence='' showComplement showIndex />;
