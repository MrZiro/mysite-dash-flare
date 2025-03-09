
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Filter } from 'lucide-react';
import { SiteCard, SiteStatus } from '@/components/dashboard/SiteCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
  {
    id: '5',
    name: 'Documentation Site',
    url: 'https://docs.example.com',
    status: 'online' as SiteStatus,
    lastDeployed: '1 week ago',
    framework: 'Docusaurus',
    domain: 'docs.example.com'
  },
  {
    id: '6',
    name: 'API Portal',
    url: 'https://api.example.com',
    status: 'warning' as SiteStatus,
    lastDeployed: '2 days ago',
    framework: 'Express',
    domain: 'api.example.com'
  },
];

const SiteList = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [frameworkFilter, setFrameworkFilter] = React.useState('all');

  const filteredSites = mockSites.filter((site) => {
    const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         site.url.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || site.status === statusFilter;
    const matchesFramework = frameworkFilter === 'all' || site.framework === frameworkFilter;
    
    return matchesSearch && matchesStatus && matchesFramework;
  });

  const frameworks = Array.from(new Set(mockSites.map(site => site.framework)));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <h1 className="text-3xl font-bold tracking-tight">All Sites</h1>
        <Link to="/sites/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New Site
          </Button>
        </Link>
      </div>

      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search sites..." 
            className="pl-8" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[130px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
            </SelectContent>
          </Select>

          <Select value={frameworkFilter} onValueChange={setFrameworkFilter}>
            <SelectTrigger className="w-[130px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Frameworks</SelectItem>
              {frameworks.map(framework => (
                <SelectItem key={framework} value={framework}>{framework}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredSites.map((site) => (
          <SiteCard key={site.id} {...site} />
        ))}
        {filteredSites.length === 0 && (
          <div className="col-span-full flex h-40 flex-col items-center justify-center rounded-lg border border-dashed">
            <p className="text-muted-foreground">No sites found</p>
            <Link to="/sites/new" className="mt-2">
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" /> Add New Site
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SiteList;
