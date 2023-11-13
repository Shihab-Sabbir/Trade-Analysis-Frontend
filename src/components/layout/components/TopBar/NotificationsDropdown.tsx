import { BellOutlined } from '@ant-design/icons';
import { Avatar, Badge, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { BsCheck2All } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const items: MenuProps['items'] = [
  {
    label: (
      <div className="flex w-full min-w-[220px] justify-between">
        <span>Notifications</span>
        <button className="font-medium hover:text-secondary flex gap-1 items-center">
          <BsCheck2All />
          Mark all as read
        </button>
      </div>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <div className="flex w-full max-w-[280px] gap-5">
        <div className="flex gap-1">
          <RxDotFilled className="text-2xl text-primary" />
          <div>
            <p>Your password has been changed successfully.</p>
            <p className="text-gray-500 text-xs">July 23, 2023 at 10:15 am</p>
          </div>
        </div>
        <div>
          <Avatar src="https://e7.pngegg.com/pngimages/407/557/png-clipart-password-strength-computer-security-password-policy-managed-security-service-procurement-icon-blue-logo.png" />
        </div>
      </div>
    ),
    key: '2',
  },
  {
    label: (
      <div className="flex w-full max-w-[280px] gap-5">
        <div className="flex gap-1">
          <RxDotFilled className="text-2xl text-primary" />
          <div>
            <p>Thank you for booking a meeting with us</p>
            <p className="text-gray-500 text-xs">July 23, 2023 at 10:15 am</p>
          </div>
        </div>
        <div>
          <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
    ),
    key: '3',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <div className="w-full">
        <button className='font-medium hover:text-secondary'>View all notification</button>
      </div>
    ),
    key: '4',
  },
];

export default function NotificationsDropdown() {
  return (
    <Dropdown arrow menu={{ items }} placement="bottomRight" className='notification-dropdown'>
      <Badge count={1} className="cursor-pointer">
        <a>
        <BellOutlined style={{ fontSize: '20px' }} />
        </a>
      </Badge>
    </Dropdown>
  );
}
