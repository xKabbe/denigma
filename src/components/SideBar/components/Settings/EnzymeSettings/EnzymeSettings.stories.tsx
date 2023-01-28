// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import EnzymeSettings from './EnzymeSettings';

// Story placement in the story list
export default {
  title: 'components/SideBar/components/Settings/EnzymeSettings',
  component: EnzymeSettings,
} as ComponentMeta<typeof EnzymeSettings>;

export const Default = () => (
  <EnzymeSettings enzymeIsSelected={['PSTI', 'ECORI']} setEnzymeIsSelected={() => {}} />
);
