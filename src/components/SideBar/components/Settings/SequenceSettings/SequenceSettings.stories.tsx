// External imports
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Local imports
import SequenceSettings from './SequenceSettings';

// Story placement in the story list
export default {
  title: 'components/SideBar/components/Settings/SequenceSettings',
  component: SequenceSettings,
} as ComponentMeta<typeof SequenceSettings>;

const Template: ComponentStory<typeof SequenceSettings> = (args) => <SequenceSettings {...args} />;

export const CheckedComplement = Template.bind({});
CheckedComplement.args = {
  showComplement: true,
  setShowComplement: () => {},
  showIndex: false,
  setShowIndex: () => {},
};

export const CheckedIndex = Template.bind({});
CheckedIndex.args = {
  showComplement: false,
  setShowComplement: () => {},
  showIndex: true,
  setShowIndex: () => {},
};
