import { Layout } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/appHooks';
import {
  selectUiState,
  setSidebarCollapsed,
} from '../../../../redux/features/uiState/uiStateSlice';
import { useEffect, useRef, useState } from 'react';
import SideBarLogo from './SideBarLogo';
import SideBarMenu from './SideBarMenu';

export default function Sidebar() {
  const [activeOverlay, setActiveOverlay] = useState(false);
  const { sidebarCollapsed } = useAppSelector(selectUiState);
  const dispatch = useAppDispatch();
  const siderRef = useRef<HTMLElement | null>(null); 

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 992 && !sidebarCollapsed) {
      setActiveOverlay(true);
      (siderRef.current as HTMLElement).focus();
    } else {
      setActiveOverlay(false);
    }
  }, [activeOverlay, sidebarCollapsed]);


  return (
    <Layout.Sider
      breakpoint="xl"
      ref={(el)=> siderRef.current = el}
      collapsedWidth="50"
      width={220}
      theme="light"
      collapsible
      collapsed={sidebarCollapsed}
      tabIndex={0}
      onCollapse={() => dispatch(setSidebarCollapsed(!sidebarCollapsed))}
      className={`${sidebarCollapsed && "max-sm:!max-w-[0px] max-sm:!min-w-[0px]"} h-screen overflow-y-auto shadow-md z-50 relative`}
      onBlur={e => {
        console.log(e)
        if (!e.currentTarget.contains(e.relatedTarget)) {
          activeOverlay && dispatch(setSidebarCollapsed(!sidebarCollapsed));
        }
      }}
    >
      <SideBarLogo/>
      <SideBarMenu/>
    </Layout.Sider>
  );
}
