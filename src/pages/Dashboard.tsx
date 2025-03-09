
import React from 'react';
import { 
  BarChart3, 
  Globe, 
  AlertCircle, 
  Activity,
  HardDrive,
  Clock,
  Users,
  ArrowUpRight,
  Plus
} from 'lucide-react';
import { SiteCard, SiteStatus } from '@/components/dashboard/SiteCard';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Mock data
const mockSites = [
  {
    id: '1',
    name: 'Company Website',
    url: 'https://example.com',
    status: 'online' as SiteStatus,
    lastDeployed: '2 hours ago',
    framework: 'React',
    domain: 'example.com'
  },
  {
    id: '2',
    name: 'E-commerce Store',
    url: 'https://store.example.com',
    status: 'warning' as SiteStatus,
    lastDeployed: '1 day ago',
    framework: 'Next.js',
    domain: 'store.example.com'
  },
  {
    id: '3',
    name: 'Marketing Blog',
    url: 'https://blog.example.com',
    status: 'offline' as SiteStatus,
    lastDeployed: '5 days ago',
    framework: 'Gatsby',
    domain: 'blog.example.com'
  },
  {
    id: '4',
    name: 'Admin Dashboard',
    url: 'https://admin.example.com',
    status: 'online' as SiteStatus,
    lastDeployed: '3 hours ago',
    framework: 'Vue.js',
    domain: 'admin.example.com'
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex space-x-2">
          <Link to="/sites/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Site
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Sites" 
          value="12" 
          description="Active websites in your account"
          icon={Globe}
          trend={{ value: 10, isPositive: true }}
        />
        <StatsCard 
          title="Uptime" 
          value="99.9%" 
          description="Average across all sites"
          icon={Activity}
          trend={{ value: 0.2, isPositive: true }}
        />
        <StatsCard 
          title="Total Traffic" 
          value="42.5k" 
          description="Visitors in the last 30 days"
          icon={Users}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatsCard 
          title="Server Load" 
          value="24%" 
          description="Average CPU utilization"
          icon={HardDrive}
          trend={{ value: 5, isPositive: false }}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Sites</h2>
          <Link to="/sites">
            <Button variant="outline" size="sm" className="gap-1">
              View All <ArrowUpRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockSites.map((site) => (
            <SiteCard key={site.id} {...site} />
          ))}
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-center space-x-2 text-amber-500">
          <AlertCircle className="h-5 w-5" />
          <h3 className="font-medium">Active Alerts</h3>
        </div>
        <div className="mt-4 space-y-3">
          <div className="rounded-md bg-muted p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">E-commerce Store</p>
                <p className="text-sm text-muted-foreground">High response time detected</p>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>30 min ago</span>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-muted p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Marketing Blog</p>
                <p className="text-sm text-muted-foreground">Site is down</p>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
