// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import SideBarHeader from './SideBarHeader';

const mockSetIsCollapsed = jest.fn();

describe('SideBarHeader', () => {
  test('should render collapsed SideBarHeader', () => {
    render(<SideBarHeader isCollapsed setIsCollapsed={mockSetIsCollapsed} />, {
      wrapper: BrowserRouter,
    });

    const menuIcon = screen.getByTestId('MenuOutlinedIcon');
    expect(menuIcon).toBeInTheDocument();

    const denigmaLogo = screen.queryByRole('img', { name: /denigma_logo/i });
    expect(denigmaLogo).toBeNull();

    const denigmaHeading = screen.queryByRole('heading', { name: /denigma/i });
    expect(denigmaHeading).toBeNull();

    userEvent.click(menuIcon);
    expect(mockSetIsCollapsed).toBeCalled();
  });

  test('should render expanded SideBarHeader', () => {
    render(<SideBarHeader isCollapsed={false} setIsCollapsed={mockSetIsCollapsed} />, {
      wrapper: BrowserRouter,
    });

    const menuIcon = screen.getByTestId('MenuOutlinedIcon');
    expect(menuIcon).toBeInTheDocument();

    const denigmaLogo = screen.getByRole('img', { name: /denigma_logo/i });
    expect(denigmaLogo).toBeInTheDocument();

    const denigmaHeading = screen.getByRole('heading', { name: /denigma/i });
    expect(denigmaHeading).toBeInTheDocument();

    userEvent.click(menuIcon);
    expect(mockSetIsCollapsed).toBeCalled();
  });
});
