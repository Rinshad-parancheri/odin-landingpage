import React from 'react';
import Icon from '@mdi/react';
import { mdiViewDashboard } from '@mdi/js';

export const SidebarHeader: React.FC = () => (
  <div className="p-4">
    <h1 className="text-white text-2xl font-bold flex items-center">
      <Icon path={mdiViewDashboard} size={1.5} className="mr-2" />
      Dashboard
    </h1>
  </div>
);
