// External imports
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import ViewSettings from './ViewSettings';

describe('ViewSettings', () => {
  test('should render ViewSettings heading', () => {
    render(<ViewSettings />, { wrapper: BrowserRouter });

    const viewHeading = screen.getByRole('heading', { name: /view settings/i });
    expect(viewHeading).toBeInTheDocument();

    const zoomSpan = screen.getByText(/zoom/i);
    expect(zoomSpan).toBeInTheDocument();

    const sizeSpan = screen.getByText(/size/i);
    expect(sizeSpan).toBeInTheDocument();
  });

  test('should render ViewSettings slider', () => {
    render(<ViewSettings />, { wrapper: BrowserRouter });

    const zoomSlider = screen.getByRole('slider', { name: /zoom/i });
    expect(zoomSlider).toBeInTheDocument();

    const sizeSlider = screen.getByRole('slider', { name: /size/i });
    expect(sizeSlider).toBeInTheDocument();
  });

  test('should drag ViewSettings slider', () => {
    render(<ViewSettings />, { wrapper: BrowserRouter });

    const zoomSlider = screen.getByRole('slider', { name: /zoom/i });
    expect(zoomSlider).toBeInTheDocument();
    expect(zoomSlider).toHaveDisplayValue('0');

    fireEvent.change(zoomSlider, { target: { value: 25 } });
    expect(zoomSlider).toHaveDisplayValue('25');

    const sizeSlider = screen.getByRole('slider', { name: /size/i });
    expect(sizeSlider).toBeInTheDocument();
    expect(sizeSlider).toHaveDisplayValue('0');

    fireEvent.change(zoomSlider, { target: { value: 99 } });
    expect(zoomSlider).toHaveDisplayValue('99');
  });
});
