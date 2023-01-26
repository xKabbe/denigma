// External imports
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Local imports
import SideBarFooter from './SideBarFooter';

// Story placement in the story list
export default {
  title: 'components/SideBar/components/SideBarFooter',
  component: SideBarFooter,
} as ComponentMeta<typeof SideBarFooter>;

const Template: ComponentStory<typeof SideBarFooter> = (args) => <SideBarFooter {...args} />;

export const CollapsedSideBarFooter = Template.bind({});
CollapsedSideBarFooter.args = {
  isCollapsed: true,
};

export const ExpandedSideBarFooter = Template.bind({});
ExpandedSideBarFooter.args = {
  isCollapsed: false,
};
