import { Layout } from "antd";
import Sidebar from "./components/sideBar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NProgressLoader from "../../components/loaders/NprogressLoader";
import "./styles/UserLayout.scss";
import { useAppSelector } from "../../redux/hooks/appHooks";
import { selectUiState } from "../../redux/features/uiState/uiStateSlice";

export default function UserLayout() {
  const {sidebarCollapsed} = useAppSelector(selectUiState);

  return (
    <Layout style={{height:"100%"}} className="max-w-[1700px] mx-auto">
      <Sidebar/>
      <Layout className={`${!sidebarCollapsed && "content-overlay z-40 "}`}>
        <TopBar/>
        <Layout.Content className="p-4 2xl:p-5 bg-[rgba(145,106,253,0.02)] overflow-auto w-full mx-auto layout-content sm:!pl-[66px] lgAnt:!pl-5">
          <Suspense fallback={<NProgressLoader/>}>
            <Outlet/>
          </Suspense>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
