
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Globe, 
  Plus, 
  Settings, 
  Database, 
  BarChart3, 
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar>
      <SidebarHeader className="flex h-14 items-center border-b px-4">
        <div className={cn("flex items-center gap-2 font-semibold transition-all", 
          collapsed ? "justify-center w-full" : "justify-start")}>
          <Globe className="h-6 w-6 text-primary" />
          {!collapsed && <span className="text-lg">MySites</span>}
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent className="space-y-1">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className="w-full">
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/sites" className="w-full">
                    <Globe className="h-5 w-5" />
                    <span>All Sites</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/sites/new" className="w-full">
                    <Plus className="h-5 w-5" />
                    <span>Add Site</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarGroupContent className="space-y-1">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/analytics" className="w-full">
                    <BarChart3 className="h-5 w-5" />
                    <span>Overview</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/analytics/database" className="w-full">
                    <Database className="h-5 w-5" />
                    <span>Database</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-2">
        <div className={cn("flex items-center gap-2 py-2",
          collapsed ? "justify-center flex-col" : "px-2")}>
          <div className={cn("flex items-center gap-2 w-full", 
            collapsed ? "justify-center" : "justify-start")}>
            <Avatar className="h-8 w-8">
              <AvatarImage src="" alt="User" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="flex-1 text-sm">
                <div className="font-medium">User Name</div>
                <div className="text-xs text-muted-foreground">admin@example.com</div>
              </div>
            )}
          </div>
          <div className={cn("flex gap-1", 
            collapsed ? "flex-col" : "ml-auto")}>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="px-2 py-2">
          <SidebarTrigger asChild>
            <Button variant="outline" size="sm" className="w-full justify-center">
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </SidebarTrigger>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
