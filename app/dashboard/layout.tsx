import { ReactNode } from 'react';
import SideNav from '../ui/dashboard/sidenav';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="md: flex h-screen flex-col overflow-hidden md:flex-row">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

export default Layout;
