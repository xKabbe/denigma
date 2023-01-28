// External imports
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Local imports
import SideBarHeader from './SideBarHeader';

// Story placement in the story list
export default {
  title: 'components/SideBar/components/SideBarHeader',
  component: SideBarHeader,
} as ComponentMeta<typeof SideBarHeader>;

const Template: ComponentStory<typeof SideBarHeader> = (args) => <SideBarHeader {...args} />;

export const ExpandedHeader = Template.bind({});
ExpandedHeader.args = {
  isCollapsed: true,
  setIsCollapsed: () => {},
};

export const CollapsedHeader = Template.bind({});
CollapsedHeader.args = {
  isCollapsed: false,
  setIsCollapsed: () => {},
};
