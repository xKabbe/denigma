// External imports
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  test('should render Dashboard', () => {
    render(<Dashboard searchSequence='' showComplement showIndex zoom={50} size={50} />, {
      wrapper: BrowserRouter,
    });

    // ViewTab
    const tab = screen.getByRole('tab', { name: 'both' });
    expect(tab).toBeInTheDocument();
    expect(tab.getAttribute('aria-selected')).toBe('true');

    // FloatingActionDial
    const speedDial = screen.getByRole('button', { name: /floating-action-dial/i });
    expect(speedDial).toBeInTheDocument();

    const copyMenuItem = screen.getByRole('menuitem', { name: /copy/i });
    expect(copyMenuItem).toBeInTheDocument();

    const saveMenuItem = screen.getByRole('menuitem', { name: /save/i });
    expect(saveMenuItem).toBeInTheDocument();

    const printMenuItem = screen.getByRole('menuitem', { name: /print/i });
    expect(printMenuItem).toBeInTheDocument();

    const shareMenuItem = screen.getByRole('menuitem', { name: /share/i });
    expect(shareMenuItem).toBeInTheDocument();
  });
});
