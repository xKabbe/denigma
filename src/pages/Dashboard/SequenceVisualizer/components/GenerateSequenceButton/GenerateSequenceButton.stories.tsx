// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import GenerateSequenceButton from './GenerateSequenceButton';

// Story placement in the story list
export default {
  title: 'pages/Dashboard/SequenceVisualizer/components/GenerateSequenceButton',
  component: GenerateSequenceButton,
} as ComponentMeta<typeof GenerateSequenceButton>;

export const Default = () => <GenerateSequenceButton width='250px' randomSequenceGenerator={() => {}} />;
