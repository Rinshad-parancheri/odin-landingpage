import { SidebarHeader } from "./sideBarComponent/SidebarHeader";
import { SidebarNavigation } from "./sideBarComponent/SidebarNavigation";

const Sidebar: React.FC = () => {
  return (
    <aside className="lg:max-w-sm  w-full bg-sky-600 h-screen">
      <SidebarHeader />
      <SidebarNavigation />
    </aside>
  );
};

export default Sidebar;
