import { ReactNode } from 'react';
import Sidebar from '../Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto p-8 animate-fade-in">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;