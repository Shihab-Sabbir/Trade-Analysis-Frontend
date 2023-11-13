 import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { selectAuth } from '../redux/features/auth/authSelector';
// import { useAppSelector } from '../redux/hooks/appHooks';
export default function useCheckPermission() {
  // const [hasPermission, setHasPermission] = useState<boolean>(true);
  // const { user } = useAppSelector(selectAuth);
  // const location = useLocation();
  // const pathArr = location.pathname
  //   .split('/')
  //   .filter(path => path !== '')
  //   .slice(1, 3);

  useEffect(() => {
    // const permissionKey = user?.permissions && Object.keys(user?.permissions)?.includes(pathArr?.[0]);
    // if (permissionKey) {
    //   // implement the logic if permission path is found in user's permissions object
    //   if (typeof user?.permissions[pathArr[0]] === 'object') {
    //     // if type of permission is an object check the nested permissions by using next path index
    //     setHasPermission(
    //       !!(user?.permissions[pathArr[0]] as Record<string, boolean>)[pathArr[1]],
    //     );
    //   } else if (typeof user?.permissions[pathArr[0]] === 'boolean') {
    //     // if type of permission is boolean set the hasPermissionState
    //     setHasPermission(user?.permissions[pathArr[0]] as boolean);
    //   }
    // } else {
    //   // if permission path is not found in user's permissions object, that means this path is not required to check permission.
    //   setHasPermission(true);
    // }
  }, []);

 // return { hasPermission };
}
