// External imports
import React from 'react';
import {
  Box,
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  useTheme,
} from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import InfoIcon from '@mui/icons-material/Info';

// Local imports
import { tokens } from '../../../../../themes/theme';
import SideBarTitle from '../../SideBarTitle/SideBarTitle';

interface EnzymeSettingsProps {
  enzymeIsSelected: string[];
  setEnzymeIsSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const enzymeOptions = [
  { label: 'PSTI', description: 'Some text', value: 'psti' },
  { label: 'ECORI', description: 'Some text', value: 'ecori' },
  { label: 'XBAI', description: 'Some text', value: 'xbai' },
  { label: 'SPEI', description: 'Some text', value: 'spei' },
  { label: 'ECORV', description: 'Some text', value: 'ecorv' },
  { label: 'BAMHI', description: 'Some text', value: 'bamhi' },
  { label: 'HINDIII', description: 'Some text', value: 'hindiii' },
  { label: 'HAEIII', description: 'Some text', value: 'haeiii' },
  { label: 'NDEI', description: 'Some text', value: 'ndei' },
  { label: 'SACI', description: 'Some text', value: 'saci' },
];

function EnzymeSettings({ enzymeIsSelected, setEnzymeIsSelected }: EnzymeSettingsProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleEnzymeSelect = (value: string) => () => {
    const currentIndex = enzymeIsSelected.indexOf(value);
    const newChecked = [...enzymeIsSelected];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setEnzymeIsSelected(newChecked);
  };

  return (
    <Box marginTop={2}>
      <SideBarTitle title='Enzyme Settings' />

      <Box margin={2}>
        <List
          dense
          sx={{
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              width: '0.6em',
            },
            '&::-webkit-scrollbar-track': {
              background: '#adadad',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: colors.greenAccent[500],
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: colors.greenAccent[600],
            },
            maxHeight: 250,
          }}
        >
          <Stack divider={<Divider variant='middle' flexItem />}>
            {enzymeOptions.map((enzymeOption) => (
              <ListItem
                key={`listitem-key-${enzymeOption.value}`}
                aria-label={`listitem-${enzymeOption.value}`}
                secondaryAction={
                  <IconButton
                    aria-label='info-icon'
                    color='info'
                    edge='end'
                    // onClick={() => alert(enzymeIsSelected)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  aria-label={`listitem-button-${enzymeOption.value}`}
                  role='button'
                  onClick={handleEnzymeSelect(enzymeOption.value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                      edge='start'
                      checked={enzymeIsSelected.indexOf(enzymeOption.value) !== -1}
                      tabIndex={-1}
                      color='secondary'
                      disableRipple
                      inputProps={{ 'aria-labelledby': enzymeOption.value }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={enzymeOption.label}
                    secondary={enzymeOption.description}
                    secondaryTypographyProps={{ color: 'secondary' }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </Stack>
        </List>
      </Box>
    </Box>
  );
}

export default EnzymeSettings;
