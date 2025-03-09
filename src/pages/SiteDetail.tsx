
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Globe, 
  Clock, 
  BarChart3, 
  ExternalLink, 
  Server, 
  RefreshCw,
  Users,
  Download,
  FileCode,
  GitBranch,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { Badge } from '@/components/ui/badge';
import { SiteStatus } from '@/components/dashboard/SiteCard';
import { cn } from '@/lib/utils';

// Mock data
const mockSites = [
  {
    id: '1',
    name: 'Company Website',
    url: 'https://example.com',
    status: 'online' as SiteStatus,
    lastDeployed: '2 hours ago',
    framework: 'React',
    domain: 'example.com',
    description: 'Main company website with information about products and services.',
    deployments: [
      { id: 'd1', status: 'success', date: '2 hours ago', commitMsg: 'Update hero section', branch: 'main' },
      { id: 'd2', status: 'success', date: '1 day ago', commitMsg: 'Fix contact form', branch: 'main' },
      { id: 'd3', status: 'failed', date: '2 days ago', commitMsg: 'Add new product page', branch: 'feature/products' }
    ],
    stats: {
      visitors: '12.5k',
      pageviews: '45.2k',
      bounceRate: '32%',
      avgSessionTime: '2m 15s'
    }
  },
  {
    id: '2',
    name: 'E-commerce Store',
    url: 'https://store.example.com',
    status: 'warning' as SiteStatus,
    lastDeployed: '1 day ago',
    framework: 'Next.js',
    domain: 'store.example.com',
    description: 'Online store selling company products with integrated payment gateway.',
    deployments: [
      { id: 'd1', status: 'success', date: '1 day ago', commitMsg: 'Fix product sorting', branch: 'main' },
      { id: 'd2', status: 'success', date: '3 days ago', commitMsg: 'Add new payment method', branch: 'feature/payments' },
      { id: 'd3', status: 'success', date: '1 week ago', commitMsg: 'Optimize images', branch: 'main' }
    ],
    stats: {
      visitors: '8.3k',
      pageviews: '36.7k',
      bounceRate: '28%',
      avgSessionTime: '3m 42s'
    }
  },
  {
    id: '3',
    name: 'Marketing Blog',
    url: 'https://blog.example.com',
    status: 'offline' as SiteStatus,
    lastDeployed: '5 days ago',
    framework: 'Gatsby',
    domain: 'blog.example.com',
    description: 'Company blog with articles, news and updates.',
    deployments: [
      { id: 'd1', status: 'failed', date: '5 days ago', commitMsg: 'Add commenting system', branch: 'feature/comments' },
      { id: 'd2', status: 'success', date: '1 week ago', commitMsg: 'Publish new article', branch: 'main' },
      { id: 'd3', status: 'success', date: '2 weeks ago', commitMsg: 'Update dependencies', branch: 'main' }
    ],
    stats: {
      visitors: '5.2k',
      pageviews: '18.9k',
      bounceRate: '42%',
      avgSessionTime: '1m 50s'
    }
  },
  {
    id: '4',
    name: 'Admin Dashboard',
    url: 'https://admin.example.com',
    status: 'online' as SiteStatus,
    lastDeployed: '3 hours ago',
    framework: 'Vue.js',
    domain: 'admin.example.com',
    description: 'Internal admin dashboard for managing company resources.',
    deployments: [
      { id: 'd1', status: 'success', date: '3 hours ago', commitMsg: 'Add user management', branch: 'main' },
      { id: 'd2', status: 'success', date: '2 days ago', commitMsg: 'Fix authentication bug', branch: 'hotfix/auth' },
      { id: 'd3', status: 'success', date: '1 week ago', commitMsg: 'Add reporting dashboard', branch: 'feature/reports' }
    ],
    stats: {
      visitors: '1.2k',
      pageviews: '15.6k',
      bounceRate: '12%',
      avgSessionTime: '12m 30s'
    }
  },
];

const DeploymentStatus = ({ status }: { status: string }) => {
  return (
    <div className="flex items-center">
      <div 
        className={cn(
          "mr-2 h-2 w-2 rounded-full",
          status === 'success' ? "bg-green-500" : "bg-red-500"
        )} 
      />
      <span>{status === 'success' ? 'Success' : 'Failed'}</span>
    </div>
  );
};

const SiteDetail = () => {
  const { id } = useParams();
  const site = mockSites.find(site => site.id === id);

  if (!site) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Site not found</h2>
        <p className="text-muted-foreground">The site you're looking for doesn't exist or has been removed.</p>
        <Link to="/sites" className="mt-4">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Sites
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Link to="/sites">
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
            <div className={cn("status-indicator", site.status)} />
            <Badge variant="outline">{site.framework}</Badge>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Globe className="mr-1 h-4 w-4" />
            <a 
              href={site.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary"
            >
              {site.domain}
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Redeploy
          </Button>
          <Button>
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Site Information</CardTitle>
          <CardDescription>{site.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1">
              <div className="text-sm font-medium">Status</div>
              <div className={cn(
                "flex items-center font-semibold",
                site.status === 'online' ? "text-green-500" : 
                site.status === 'warning' ? "text-amber-500" : "text-red-500"
              )}>
                <div className={cn("mr-1.5 status-indicator", site.status)} />
                {site.status === 'online' ? "Online" : 
                 site.status === 'warning' ? "Warning" : "Offline"}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Last Deployed</div>
              <div className="flex items-center font-semibold">
                <Clock className="mr-1.5 h-4 w-4" />
                {site.lastDeployed}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Framework</div>
              <div className="font-semibold">{site.framework}</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Domain</div>
              <div className="font-semibold">{site.domain}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard 
          title="Total Visitors" 
          value={site.stats.visitors} 
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard 
          title="Pageviews" 
          value={site.stats.pageviews} 
          icon={BarChart3}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard 
          title="Bounce Rate" 
          value={site.stats.bounceRate} 
          icon={ArrowLeft}
          trend={{ value: 3, isPositive: false }}
        />
        <StatsCard 
          title="Avg. Session" 
          value={site.stats.avgSessionTime} 
          icon={Clock}
          trend={{ value: 5, isPositive: true }}
        />
      </div>
      
      <Tabs defaultValue="deployments">
        <TabsList>
          <TabsTrigger value="deployments">Deployments</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="deployments" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Deployments</CardTitle>
              <CardDescription>
                History of recent deployments for {site.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {site.deployments.map((deployment) => (
                  <div 
                    key={deployment.id} 
                    className="flex flex-col space-y-2 rounded-md border p-4 md:flex-row md:items-center md:justify-between md:space-y-0"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <DeploymentStatus status={deployment.status} />
                      </div>
                      <div className="text-sm text-muted-foreground">{deployment.commitMsg}</div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <GitBranch className="mr-1 h-4 w-4" />
                        {deployment.branch}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        {deployment.date}
                      </div>
                      <Button variant="outline" size="sm">
                        <FileCode className="mr-2 h-4 w-4" /> View Logs
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Traffic and performance metrics for {site.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-8 text-center">
                <p className="text-muted-foreground">Analytics details coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="resources" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>
                Server resources and bandwidth usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-8 text-center">
                <p className="text-muted-foreground">Resource details coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteDetail;
