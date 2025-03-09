
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { useToast } from '@/hooks/use-toast';

export const AppLayout = () => {
  const { toast } = useToast();

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container py-4">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
