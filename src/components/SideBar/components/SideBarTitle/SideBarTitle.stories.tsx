// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import SideBarTitle from './SideBarTitle';

// Story placement in the story list
export default {
  title: 'components/SideBar/components/SideBarTitle',
  component: SideBarTitle,
} as ComponentMeta<typeof SideBarTitle>;

export const Default = () => <SideBarTitle title='Lorem ipsum' />;
