import {
  mdiAccount,
  mdiAccountGroup,
  mdiCheckboxMarkedCircleOutline,
  mdiCog,
  mdiHelpCircle,
  mdiHistory,
  mdiHome,
  mdiMessage,
  mdiShieldLock
} from '@mdi/js';
import React from 'react';
import SidebarItem from './SidebarItem';

export const SidebarNavigation: React.FC = () => (
  <nav className='mt-5 pl-4'>
    <div>
      <SidebarItem icon={mdiHome} label="Home" to="/" />
      <SidebarItem icon={mdiAccount} label="Profile" to="/profile" />
      <SidebarItem icon={mdiMessage} label="Messages" to="/messages" />
      <SidebarItem icon={mdiHistory} label="History" to="/history" />
      <SidebarItem icon={mdiCheckboxMarkedCircleOutline} label="Tasks" to="/tasks" />
      <SidebarItem icon={mdiAccountGroup} label="Communities" to="/communities" />
    </div>
    <div className='mt-5'>
      <SidebarItem icon={mdiCog} label="Settings" to="/settings" />
      <SidebarItem icon={mdiHelpCircle} label="Support" to="/support" />
      <SidebarItem icon={mdiShieldLock} label="Privacy" to="/privacy" />
    </div>
  </nav>
);
