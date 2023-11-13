import logo from '../../../../assets/teamtrek-logo.png';
import TTIcon from "../../../../assets/teamtrek-iconpng.png"
import { useAppSelector } from '../../../../redux/hooks/appHooks';
import { selectUiState } from '../../../../redux/features/uiState/uiStateSlice';

export default function SideBarLogo() {
  const {sidebarCollapsed} = useAppSelector(selectUiState)
  return (
    <div className={`${sidebarCollapsed ? "py-5":"py-7"} w-full flex justify-center items-center border-b-4 border-b-primary mb-3`}>
      <img src={sidebarCollapsed ? TTIcon : logo} alt="" className={`${sidebarCollapsed ? "max-w-[30px]":"max-w-[150px]"}`} />
    </div>
  );
}
