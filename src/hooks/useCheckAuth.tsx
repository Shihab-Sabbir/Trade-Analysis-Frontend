import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks/appHooks';
import { selectAuth } from '../redux/features/auth/authSelector';
import { useRefreshTokenMutation } from '../redux/services/auth/authApi';
import { addUser } from '../redux/features/auth/authSlice';

export default function useAuthcheck() {
  const [getUserByRefreshToken] = useRefreshTokenMutation();
  const { user, accessToken } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!user || !accessToken) {
      getUserByRefreshToken(null).unwrap()
      .then(data => {
        if (data?.data) {
          dispatch(addUser(data.data));
        }
      })
      .catch(error => console.error(error))
      .finally(() => setAuthChecked(true))
    } else {
      setAuthChecked(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { authChecked };
}
