import { render, screen } from '@testing-library/react';
import App from './App';

test('renders projects section heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /selected work/i });
  expect(heading).toBeInTheDocument();
});
