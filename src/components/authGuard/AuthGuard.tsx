import { ReactNode } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useAuthcheck from '../../hooks/useCheckAuth';
import { ENUM_USER_ROLE } from '../../interfaces/user.interfaces';
import ErrorPage from '../../pages/errorPage/ErrorPage';
import { selectAuth } from '../../redux/features/auth/authSelector';
import { useAppSelector } from '../../redux/hooks/appHooks';
import LoadingScreen from '../loaders/LoadingScreen';

interface pageProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: pageProps) {
  const { user, accessToken } = useAppSelector(selectAuth);
  const { authChecked } = useAuthcheck();
  // const { hasPermission } = useCheckPermission();
  const { role } = useParams();

  if (!authChecked  && (!user || !accessToken)) {
    return <LoadingScreen />;
  }

  if (authChecked && (!user || !accessToken)) {
    return <Navigate to="/" replace={true} />;
  }

  if (role && !(Object.values(ENUM_USER_ROLE) as string[]).includes(role)) {
    return <ErrorPage errorType="NOT_FOUND" />;
  }

  if ((role && role !== user?.role)) {
    return <ErrorPage errorType="FORBIDDEN" />;
  }

  return <>{children}</>;
}
