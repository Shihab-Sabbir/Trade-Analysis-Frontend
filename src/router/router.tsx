/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthGuard from '../components/authGuard/AuthGuard';
import UserLayout from '../components/layout/UserLayout';
import Page from '../components/pageWrapper/Page';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Login from '../pages/auth/login/Login';
import Signup from '../pages/auth/signup/Signup';
import Calculator from '../pages/screens/common/calculator/Calculator';

const Transactions = lazy(
  () => import('../pages/screens/common/businessData/Transactions'),
);

const DashBoard = lazy(() => import('../pages/screens/common/dashboard/Dashboard'));

const UserProfile = lazy(() => import('../pages/screens/common/profile/UserProfile'));

// const Home:any = lazy(() =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(import("../pages/home/Home")), 2000)
//   )
// );

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage errorType="NOT_FOUND" />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/:role',
    errorElement: <ErrorPage errorType="NOT_FOUND" />,
    element: (
      <AuthGuard>
        <UserLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: 'calculator',
        element: <Calculator />,
      },
      {
        path: 'transaction',
        element: <Transactions />,
      },
      {
        path: 'dashboard',
        element: <DashBoard/>,
      },
      {
        path: 'profile',
        element: <UserProfile />,
      },
      {
        path: 'profile/:userId',
        element: (
          <Page crumb="dynamic">
            <p>Dynamic page</p>
          </Page>
        ),
      },
    ],
  },
]);

export default router;