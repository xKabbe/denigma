// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import UnderConstructionSnackbar from './UnderConstructionSnackbar';

// Story placement in the story list
export default {
  title: 'components/UnderConstructionSnackbar',
  component: UnderConstructionSnackbar,
} as ComponentMeta<typeof UnderConstructionSnackbar>;

export const Default = () => <UnderConstructionSnackbar open setOpen={() => {}} />;
