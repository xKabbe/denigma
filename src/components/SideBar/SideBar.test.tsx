// External imports
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import SideBar from './SideBar';

describe('SideBar', () => {
  test('should render SideBar', () => {
    const { getByTestId } = render(<SideBar />, { wrapper: BrowserRouter });
    screen.logTestingPlaygroundURL();

    // SideBar Header
    const menuIcon = screen.getByTestId('MenuOutlinedIcon');
    expect(menuIcon).toBeInTheDocument();

    const denigmaLogo = screen.getByRole('img', { name: /denigma_logo/i });
    expect(denigmaLogo).toBeInTheDocument();

    const denigmaHeading = screen.getByRole('heading', { name: /denigma/i });
    expect(denigmaHeading).toBeInTheDocument();

    // View Settings
    const viewHeading = screen.getByRole('heading', { name: /view settings/i });
    expect(viewHeading).toBeInTheDocument();

    const zoomSpan = screen.getByText(/zoom/i);
    expect(zoomSpan).toBeInTheDocument();

    const zoomSlider = screen.getByRole('slider', { name: /zoom/i });
    expect(zoomSlider).toBeInTheDocument();

    const sizeSpan = screen.getByText(/size/i);
    expect(sizeSpan).toBeInTheDocument();

    const sizeSlider = screen.getByRole('slider', { name: /size/i });
    expect(sizeSlider).toBeInTheDocument();

    // Sequence Settings
    const sequenceHeading = screen.getByRole('heading', { name: /sequence settings/i });
    expect(sequenceHeading).toBeInTheDocument();

    const complementSwitch = screen.getByRole('checkbox', { name: /show complement/i });
    expect(complementSwitch).toBeInTheDocument();

    const indexSwitch = screen.getByRole('checkbox', { name: /show index/i });
    expect(indexSwitch).toBeInTheDocument();

    // Enzyme Settings
    const enzymeHeading = screen.getByRole('heading', { name: /enzyme settings/i });
    expect(enzymeHeading).toBeInTheDocument();

    const enzymePSTIButton = screen.getByRole('button', { name: /psti/i });
    expect(enzymePSTIButton).toBeInTheDocument();

    const enzymeECORIButton = screen.getByRole('button', { name: /ecori/i });
    expect(enzymeECORIButton).toBeInTheDocument();

    const enzymeXBAIButton = screen.getByRole('button', { name: /xbai/i });
    expect(enzymeXBAIButton).toBeInTheDocument();

    const enzymeSPEIButton = screen.getByRole('button', { name: /spei/i });
    expect(enzymeSPEIButton).toBeInTheDocument();

    const enzymeECORVButton = screen.getByRole('button', { name: /ecorv/i });
    expect(enzymeECORVButton).toBeInTheDocument();

    const enzymeBAMHIButton = screen.getByRole('button', { name: /bamhi/i });
    expect(enzymeBAMHIButton).toBeInTheDocument();

    const enzymeHINDIIIButton = screen.getByRole('button', { name: /hindiii/i });
    expect(enzymeHINDIIIButton).toBeInTheDocument();

    const enzymeHAEIIIButton = screen.getByRole('button', { name: /haeiii/i });
    expect(enzymeHAEIIIButton).toBeInTheDocument();

    const enzymeNDEIButton = screen.getByRole('button', { name: /ndei/i });
    expect(enzymeNDEIButton).toBeInTheDocument();

    const enzymeSACIButton = screen.getByRole('button', { name: /saci/i });
    expect(enzymeSACIButton).toBeInTheDocument();

    // Sidebar Footer
    const footerText = screen.getByText(/see code/i);
    expect(footerText).toBeInTheDocument();

    const githubSvg = getByTestId('github-svg');
    expect(githubSvg).toBeInTheDocument();

    const expandedSideBarFooter = getByTestId('expanded-sidebar-footer');
    expect(expandedSideBarFooter).toBeInTheDocument();
  });
});
