// External imports
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Local imports
import SequenceVisualizer from './SequenceVisualizer';

// Story placement in the story list
export default {
  title: 'pages/Dashboard/SequenceVisualizer',
  component: SequenceVisualizer,
} as ComponentMeta<typeof SequenceVisualizer>;

const Template: ComponentStory<typeof SequenceVisualizer> = (args) => <SequenceVisualizer {...args} />;

export const BothView = Template.bind({});
BothView.args = {
  selectedView: 'both',
};

export const CircularView = Template.bind({});
CircularView.args = {
  selectedView: 'circular',
};

export const LinearView = Template.bind({});
LinearView.args = {
  selectedView: 'linear',
};
