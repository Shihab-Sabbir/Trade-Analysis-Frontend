import { ConfigProvider, Menu, MenuProps } from 'antd';
import { DashboardOutlined, TransactionOutlined } from '@ant-design/icons';
import getSideBarMenuItem from '../../utils/getSideBarMenuItem';
import { useLocation, useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
  getSideBarMenuItem('Dashboard', 'dashboard', <DashboardOutlined />),
  getSideBarMenuItem('Transaction', 'transaction', <TransactionOutlined />),
];

export default function SideBarMenu() {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = e => {
    navigate(`/user/${e.key}`);
  };
 
  return (
    <ConfigProvider
      theme={{ components: { Menu: { itemMarginInline: 0, itemBorderRadius: 0 } } }}
    >
      <Menu
        onClick={onClick}
        defaultSelectedKeys={[pathname.split('/')[2]]}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        className='sidebar-menu'
      />
    </ConfigProvider>
  );
}
