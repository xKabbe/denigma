// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import FloatingActionDial from './FloatingActionDial';

// Story placement in the story list
export default {
  title: 'pages/Dashboard/FloatingActionDial',
  component: FloatingActionDial,
} as ComponentMeta<typeof FloatingActionDial>;

export const Default = () => <FloatingActionDial />;
