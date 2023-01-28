// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import ViewTab from './ViewTab';

const mockSetSelectedView = jest.fn();

type ViewModes = 'both' | 'circular' | 'linear' | 'both_flip' | undefined;

const modeVariants: Array<Array<{ mode: ViewModes; modeStatus: boolean }>> = [
  [
    { mode: 'both', modeStatus: true },
    { mode: 'circular', modeStatus: false },
    { mode: 'linear', modeStatus: false },
  ],
  [
    { mode: 'both', modeStatus: false },
    { mode: 'circular', modeStatus: true },
    { mode: 'linear', modeStatus: false },
  ],
  [
    { mode: 'both', modeStatus: false },
    { mode: 'circular', modeStatus: false },
    { mode: 'linear', modeStatus: true },
  ],
];

describe('ViewTab', () => {
  modeVariants.forEach((modeVariant, i) => {
    test(`should render active '${modeVariant[i].mode}' ViewTab view`, () => {
      render(<ViewTab selectedView={modeVariant[i].mode} setSelectedView={mockSetSelectedView} />, {
        wrapper: BrowserRouter,
      });

      modeVariant.forEach((mode) => {
        const tab = screen.getByRole('tab', { name: mode.mode });
        expect(tab).toBeInTheDocument();
        expect(tab.getAttribute('aria-selected')).toBe(mode.modeStatus.toString());
      });
    });

    test(`should click inactive ViewTab view tabs (not '${modeVariant[i].mode})'`, () => {
      render(<ViewTab selectedView={modeVariant[i].mode} setSelectedView={mockSetSelectedView} />, {
        wrapper: BrowserRouter,
      });

      modeVariant.forEach((mode) => {
        const tab = screen.getByRole('tab', { name: mode.mode });
        userEvent.click(tab);

        if (mode.modeStatus) return;

        expect(mockSetSelectedView).toBeCalled();
      });
    });
  });
});
