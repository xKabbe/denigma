// External imports
import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  useTheme,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Local imports
import { tokens } from '../../../../../themes/theme';

interface GenerateSequenceButtonProps {
  width?: string | number | undefined;
  randomSequenceGenerator: (sequenceLength: { min: number; max: number }) => void;
}

const generateSequenceOptions = [
  { label: 'Generate Sequence', sequenceLength: { min: 1, max: 10000 } },
  { label: 'Generate Sequence (Small)', sequenceLength: { min: 1, max: 100 } },
  { label: 'Generate Sequence (Medium)', sequenceLength: { min: 101, max: 1000 } },
  { label: 'Generate Sequence (Large)', sequenceLength: { min: 1001, max: 10000 } },
];

function GenerateSequenceButton({ width, randomSequenceGenerator }: GenerateSequenceButtonProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '25px',
      }}
    >
      <ButtonGroup variant='contained' ref={anchorRef} aria-label='split button'>
        <Button
          variant='contained'
          color='secondary'
          sx={{ width: { width } }}
          onClick={() => randomSequenceGenerator(generateSequenceOptions[selectedIndex].sequenceLength)}
        >
          {generateSequenceOptions[selectedIndex].label}
        </Button>

        <Button
          size='small'
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label='generate-sequence-options'
          aria-haspopup='menu'
          variant='contained'
          color='secondary'
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>

      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              backgroundColor: colors.primary[400],
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem>
                  {generateSequenceOptions.map((option, index) => (
                    <MenuItem
                      key={`${option.label}-menu-item`}
                      sx={{ backgroundColor: colors.primary[400], width: { width } }}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}

// Default props
GenerateSequenceButton.defaultProps = {
  width: undefined,
};

export default GenerateSequenceButton;
