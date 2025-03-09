
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ExternalLink, MoreVertical, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export type SiteStatus = 'online' | 'warning' | 'offline';

export interface SiteCardProps {
  id: string;
  name: string;
  url: string;
  status: SiteStatus;
  lastDeployed: string;
  framework: string;
  domain?: string;
}

export const SiteCard = ({
  id,
  name,
  url,
  status,
  lastDeployed,
  framework,
  domain
}: SiteCardProps) => {
  return (
    <Card className="site-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          <div className={cn("status-indicator", status)} />
          <h3 className="font-semibold">{name}</h3>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={`/sites/${id}`} className="flex w-full items-center">
                View Details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={url} target="_blank" rel="noopener noreferrer" className="flex w-full items-center">
                Visit Site
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center text-sm text-muted-foreground">
          <Globe className="mr-1 h-4 w-4" />
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary"
          >
            {domain || url}
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="outline">{framework}</Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            <span>Updated {lastDeployed}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Link to={`/sites/${id}`} className="w-full">
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
