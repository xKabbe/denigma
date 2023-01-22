// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import IconBar from './IconBar';

// Story placement in the story list
export default {
  title: 'components/TopBar/components/IconBar',
  component: IconBar,
} as ComponentMeta<typeof IconBar>;

export const Default = () => <IconBar />;
