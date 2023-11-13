import { render, screen } from '@testing-library/react';
import LoginForm from '../pages/auth/login/components/LoginForm';

test('renders submit button', () => {
  render(<LoginForm />);

  const submitButton = screen.getByRole('button', { name: /Submit/i });

  expect(submitButton).toBeInTheDocument();
});
