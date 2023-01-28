// External imports
import React from 'react';
import { Tab, Tabs, useTheme } from '@mui/material';

// Local imports
import { tokens } from '../../../themes/theme';

type ViewModes = 'both' | 'circular' | 'linear' | 'both_flip' | undefined;

interface ViewTabProps {
  selectedView: ViewModes;
  setSelectedView: React.Dispatch<React.SetStateAction<ViewModes>>;
}

function ViewTab({ selectedView, setSelectedView }: ViewTabProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const viewModesData = ['circular', 'both', 'linear'];

  const handleTabChange = (value: ViewModes) => {
    setSelectedView(value);
  };

  return (
    <Tabs centered value={selectedView} onChange={(_event, value) => handleTabChange(value)}>
      {viewModesData.map((viewMode, index) => (
        <Tab
          key={`${viewMode}-tab`}
          label={viewMode}
          value={viewMode}
          sx={{
            backgroundColor:
              selectedView === viewMode ? colors.greenAccent[500] : colors.primary[400],
            width: '200px',
            borderTopLeftRadius: index === 0 ? 10 : null,
            borderBottomLeftRadius: index === 0 ? 10 : null,
            borderTopRightRadius: index === viewModesData.length - 1 ? 10 : null,
            borderBottomRightRadius: index === viewModesData.length - 1 ? 10 : null,
          }}
        />
      ))}
    </Tabs>
  );
}

export default ViewTab;
