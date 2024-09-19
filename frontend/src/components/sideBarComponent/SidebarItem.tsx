import Icon from "@mdi/react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: string;
  label: string;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, to }) => (
  <Link to={to} className="flex items-center p-2 text-xl text-white font-bold hover:bg-blue-600">
    <Icon path={icon} size={1} className="mr-5" />
    <span>{label}</span>
  </Link>
);

export default SidebarItem

