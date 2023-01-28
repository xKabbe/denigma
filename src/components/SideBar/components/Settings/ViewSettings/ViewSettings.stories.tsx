// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import ViewSettings from './ViewSettings';

// Story placement in the story list
export default {
  title: 'components/SideBar/components/Settings/ViewSettings',
  component: ViewSettings,
} as ComponentMeta<typeof ViewSettings>;

export const Default = () => <ViewSettings />;
