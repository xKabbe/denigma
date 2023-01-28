// External imports
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import SideBarTitle from './SideBarTitle';

describe('SideBarTitle', () => {
  test('should render SideBarTitle', () => {
    render(<SideBarTitle title='Test Title' />, { wrapper: BrowserRouter });

    const titleHeading = screen.getByRole('heading', { name: /test title/i });
    expect(titleHeading).toBeInTheDocument();
  });
});
