// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import SideBar from './SideBar';

// Story placement in the story list
export default {
  title: 'components/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

export const Default = () => (
  <SideBar
    showComplement
    setShowComplement={() => {}}
    showIndex
    setShowIndex={() => {}}
    zoom={50}
    setZoom={() => {}}
    size={50}
    setSize={() => {}}
  />
);
