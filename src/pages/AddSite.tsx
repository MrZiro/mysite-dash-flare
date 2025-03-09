
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, Server, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const AddSite = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Site Added",
        description: "Your new site has been added successfully.",
      });
      navigate('/sites');
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center space-x-2">
        <Link to="/sites">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Add New Site</h1>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Site Information</CardTitle>
            <CardDescription>
              Enter the details of the website you want to add to your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="site-name">Site Name</Label>
              <Input id="site-name" placeholder="My Awesome Website" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="site-domain">Domain</Label>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <Input id="site-domain" placeholder="example.com" required />
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="framework">Framework</Label>
                <Select required>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="vue">Vue.js</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="environment">Environment</Label>
                <Select defaultValue="production">
                  <SelectTrigger id="environment">
                    <SelectValue placeholder="Select environment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="production">Production</SelectItem>
                    <SelectItem value="staging">Staging</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="site-description">Description</Label>
              <Textarea 
                id="site-description" 
                placeholder="Describe your website..." 
                className="min-h-[100px]" 
              />
            </div>
            
            <div className="space-y-2">
              <Label>Deployment Method</Label>
              <div className="grid gap-2 md:grid-cols-3">
                <div className="flex cursor-pointer flex-col items-center justify-between rounded-md border border-primary bg-primary/5 p-4 hover:bg-primary/10">
                  <Server className="mb-2 h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">Git Repository</span>
                </div>
                <div className="flex cursor-pointer flex-col items-center justify-between rounded-md border p-4 hover:bg-secondary/50">
                  <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
                  <span className="text-sm font-medium">Direct Upload</span>
                </div>
                <div className="flex cursor-pointer flex-col items-center justify-between rounded-md border p-4 hover:bg-secondary/50">
                  <Globe className="mb-2 h-8 w-8 text-muted-foreground" />
                  <span className="text-sm font-medium">External URL</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => navigate('/sites')}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding Site..." : "Add Site"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AddSite;
