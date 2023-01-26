// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import SideBarFooter from './SideBarFooter';

window.open = jest.fn();

describe('SideBarFooter', () => {
  test('should render and click collapsed SideBarFooter', () => {
    const { getByTestId } = render(<SideBarFooter isCollapsed />, { wrapper: BrowserRouter });

    const githubSvg = getByTestId('github-svg');
    expect(githubSvg).toBeInTheDocument();

    const collapsedSideBar = getByTestId('collapsed-sidebar-footer');
    expect(collapsedSideBar).toBeInTheDocument();

    userEvent.click(collapsedSideBar);
    expect(window.open).toHaveBeenCalled();
  });

  test('should render and click expanded SideBarFooter', () => {
    const { getByTestId } = render(<SideBarFooter isCollapsed={false} />, { wrapper: BrowserRouter });

    const footerText = screen.getByText(/see code/i);
    expect(footerText).toBeInTheDocument();

    const githubSvg = getByTestId('github-svg');
    expect(githubSvg).toBeInTheDocument();

    const expandedSideBar = getByTestId('expanded-sidebar-footer');
    expect(expandedSideBar).toBeInTheDocument();

    userEvent.click(expandedSideBar);
    expect(window.open).toHaveBeenCalled();
  });
});
