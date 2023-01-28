// External imports
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Local imports
import ViewTab from './ViewTab';

// Story placement in the story list
export default {
  title: 'pages/Dashboard/ViewTab',
  component: ViewTab,
} as ComponentMeta<typeof ViewTab>;

const Template: ComponentStory<typeof ViewTab> = (args) => <ViewTab {...args} />;

export const BothTab = Template.bind({});
BothTab.args = {
  selectedView: 'both',
  setSelectedView: () => {},
};

export const CircularTab = Template.bind({});
CircularTab.args = {
  selectedView: 'circular',
  setSelectedView: () => {},
};

export const LinearTab = Template.bind({});
LinearTab.args = {
  selectedView: 'linear',
  setSelectedView: () => {},
};
