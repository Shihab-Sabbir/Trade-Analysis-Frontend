import { Layout, theme } from 'antd';
import '../../styles/topBar.scss';
import RightNavItems from './RightNavItems';
import { useAppDispatch } from '../../../../redux/hooks/appHooks';
import { setSidebarCollapsed } from '../../../../redux/features/uiState/uiStateSlice';
import {AiOutlineMenu} from 'react-icons/ai';

export default function TopBar() {
  const dispatch = useAppDispatch();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSidebarCollapse = ()=>{
    dispatch(setSidebarCollapsed(false))
  }

  return (
    <Layout.Header style={{ paddingLeft: "20px", paddingRight:"20px", height:"60px", background: colorBgContainer }} className='layout-topbar shadow-sm py-2 2xl:py-3 flex w-full items-center sm:!pl-[66px] lgAnt:!pl-5'>
      <button className='leading-none text-lg sm:hidden' onClick={handleSidebarCollapse}><AiOutlineMenu/></button>
        <RightNavItems/>
    </Layout.Header>
  );
}
