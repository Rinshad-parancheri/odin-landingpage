import { SidebarHeader } from "./sideBarComponent/SidebarHeader";
import { SidebarNavigation } from "./sideBarComponent/SidebarNavigation";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full bg-blue-500 h-screen">
      <SidebarHeader />
      <SidebarNavigation />
    </aside>
  );
};

export default Sidebar;
