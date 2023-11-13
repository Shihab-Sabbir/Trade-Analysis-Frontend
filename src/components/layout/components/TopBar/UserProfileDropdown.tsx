import { Avatar, Dropdown } from 'antd';
import {
  DownOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../../../redux/services/auth/authApi';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/appHooks';
import getUserProfileDropdownItems from '../../utils/getUserProfileDropdownItems';
import { selectAuth } from '../../../../redux/features/auth/authSelector';
import { IUser } from '../../../../interfaces/user.interfaces';

export default function UserProfileDropdown() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {user} = useAppSelector(selectAuth)

  const handleLogut = () => {
    dispatch(authApi.endpoints.logOut.initiate(null));
    navigate('/')
  };
  const name = user?.firstName + ' ' + user?.lastName;

  return (
    <Dropdown
      // trigger={['click']}
      menu={getUserProfileDropdownItems(handleLogut, user?.role as string,user as IUser)}
      arrow
      placement="bottomRight"
    >
      <div className="flex items-center gap-2 cursor-pointer group transition-all group">
        <Avatar
          size="large"
          src="https://th.bing.com/th/id/R.739297c3ec0f727c32c8135aca85df15?rik=%2f%2bAysCeUw6gWcA&pid=ImgRaw&r=0"
          className="border-1 transition-all animate-border-rotate"
        />
        <div className="flex flex-col leading-tight max-w-[130px]">
          <p className="text-base font-medium -mt-1 truncate group-hover:text-secondary transition-all">
            {name}
          </p>
          <p className="text-gray-500 truncate italic">{user?.role}</p>
        </div>
        <DownOutlined className="text-gray-500 group-hover:text-secondary group-hover:animate-bounce" />
      </div>
    </Dropdown>
  );
}
