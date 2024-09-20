import Icon from "@mdi/react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: string;
  to?: string;
}

const HeaderIcon: React.FC<SidebarItemProps> = ({ icon, to }) => (
  <Link to={(to) ? to : ''} className="text-2xl  text-black font-bold " >
    <Icon color={'black'} path={icon} size={1.2} className="mr-5" />
  </Link >
);

export default HeaderIcon
