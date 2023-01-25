// External imports
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import FloatingActionDial from './FloatingActionDial';

describe('FloatingActionDial', () => {
  test('should render FloatingActionDial', () => {
    render(<FloatingActionDial />, { wrapper: BrowserRouter });

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
