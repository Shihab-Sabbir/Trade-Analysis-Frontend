import {  Divider } from 'antd';
import type { MenuProps } from 'antd';
import {
  LogoutOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { IUser } from '../../../interfaces/user.interfaces';

const getUserProfileDropdownItems = (logout: () => void, role:string,user:IUser) => {
    const name = user?.firstName + ' ' + user?.lastName;
    const items: MenuProps['items'] = [
      {
        label: (
          <div className="flex items-center my-2">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="userImage"
              className="w-14 h-14 rounded-full"
            />
            <Divider type="vertical" style={{ height: '80px' }} />
            <div>
              <p className="text-base font-medium">{name}</p>
              <p className="italic">{user?.role}</p>
              <p className="italic">{user?.email}</p>
              <p className="italic">{user.companyName}</p>
            </div>
          </div>
        ),
        key: '0',
      },
      {
        type: 'divider',
      },
      {
        label: (
          <button className="w-full">
            <Link to={`/${role}/profile`} className="flex w-full gap-3">
              <UserOutlined /> <span>My Profile</span>
            </Link>
          </button>
        ),
        key: '1',
      },
      {
        label: (
          <button className="w-full">
            <p className="flex gap-3 cursor-pointer">
              <NotificationOutlined /> <span>Notice</span>
            </p>
          </button>
        ),
        key: '2',
      },
      {
        type: 'divider',
      },
      {
        label: (
          <div
            className="flex w-full gap-3 hover:text-red-500"
            onClick={() => {
              logout();
            }}
          >
            <LogoutOutlined /> <span>Logout</span>
          </div>
        ),
        key: '3',
      },
    ];
    return { items };
  };

  export default getUserProfileDropdownItems;