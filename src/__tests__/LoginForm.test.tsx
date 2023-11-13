// /* eslint-disable @typescript-eslint/no-var-requires */
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import LoginForm from '../pages/auth/login/components/LoginForm';

// jest.mock('../redux/services/auth/authApi', () => ({
//   useLoginUserMutation: jest.fn(),
// }));

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: jest.fn(),
// }));

// describe('LoginForm', () => {
//   it('renders the form and handles submission', async () => {
//     const mockLoginUserMutation = jest.fn();

//     mockLoginUserMutation.mockReturnValue({
//       mutate: jest.fn(() => Promise.resolve({ statusCode: 200, data: { user: {}, accessToken: 'mockAccessToken' } })),
//       isLoading: false,
//       error: null,
//     });
    
//     require('../redux/services/auth/authApi').useLoginUserMutation = mockLoginUserMutation;

//     render(<LoginForm />);

//     fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'shihab420@gmail.com' } });
//     fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: '123456' } });

//     fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

//     await waitFor(() => {
//       expect(mockLoginUserMutation).toHaveBeenCalledWith({ email: 'shihab420@gmail.com', password: '123456' });
//     });
//   });
// });
