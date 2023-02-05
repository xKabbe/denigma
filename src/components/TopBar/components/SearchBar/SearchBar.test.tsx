// External imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import SearchBar from './SearchBar';

const mockSetSearchSequence = jest.fn();

describe('SearchBar', () => {
  test('should render SearchBar', async () => {
    render(<SearchBar searchSequence='' setSearchSequence={() => {}} />, { wrapper: BrowserRouter });

    const searchTextbox = screen.getByRole('textbox');
    expect(searchTextbox).toBeInTheDocument();
    expect(searchTextbox).toHaveAttribute('placeholder', 'Search');
  });

  test('should search provided input value', async () => {
    render(<SearchBar searchSequence='' setSearchSequence={mockSetSearchSequence} />, {
      wrapper: BrowserRouter,
    });

    const searchTextbox = screen.getByRole('textbox');

    userEvent.type(searchTextbox, 'A');
    expect(mockSetSearchSequence).toBeCalled();
    expect(mockSetSearchSequence).toHaveBeenCalledWith('A');
  });
});
