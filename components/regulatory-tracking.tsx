"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Globe, CircleAlert as AlertCircle, Clock, ExternalLink, Bell, Filter, Search, Calendar, FileText, Shield } from "lucide-react";

export function RegulatoryTracking() {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("all");
  const [selectedFramework, setSelectedFramework] = useState("all");

  const regulatoryUpdates = [
    {
      id: 1,
      title: "EU AI Act - Final Implementation Guidelines",
      framework: "EU AI Act",
      jurisdiction: "European Union",
      type: "Major Update",
      severity: "high",
      publishDate: "2024-01-15",
      effectiveDate: "2024-08-01",
      description: "New guidelines for high-risk AI system deployment and monitoring requirements",
      impactedDocuments: 47,
      status: "active",
      source: "European Commission",
      url: "https://ec.europa.eu/ai-act"
    },
    {
      id: 2,
      title: "SEC Form 10-K Cybersecurity Disclosure Requirements",
      framework: "SOX",
      jurisdiction: "United States",
      type: "Amendment",
      severity: "medium", 
      publishDate: "2024-01-12",
      effectiveDate: "2024-03-15",
      description: "Updated requirements for reporting material cybersecurity incidents",
      impactedDocuments: 23,
      status: "pending",
      source: "SEC",
      url: "https://sec.gov/cybersecurity"
    },
    {
      id: 3,
      title: "GDPR Adequacy Decision - New Jurisdictions",
      framework: "GDPR",
      jurisdiction: "European Union",
      type: "Policy Change",
      severity: "medium",
      publishDate: "2024-01-10",
      effectiveDate: "2024-02-01",
      description: "Three additional countries granted adequacy status for data transfers",
      impactedDocuments: 156,
      status: "implemented",
      source: "European Data Protection Board",
      url: "https://edpb.europa.eu"
    },
    {
      id: 4,
      title: "PCI DSS v4.0 Transition Deadline Extension",
      framework: "PCI DSS",
      jurisdiction: "Global",
      type: "Timeline Change",
      severity: "low",
      publishDate: "2024-01-08",
      effectiveDate: "2024-06-30",
      description: "Extended deadline for transitioning to PCI DSS version 4.0",
      impactedDocuments: 34,
      status: "active",
      source: "PCI Security Standards Council",
      url: "https://pcisecuritystandards.org"
    }
  ];

  const complianceFrameworks = [
    {
      name: "GDPR",
      jurisdiction: "EU",
      lastUpdate: "Jan 10, 2024",
      trackedSources: 15,
      pendingChanges: 2,
      status: "active"
    },
    {
      name: "SOX",
      jurisdiction: "US", 
      lastUpdate: "Jan 12, 2024",
      trackedSources: 8,
      pendingChanges: 1,
      status: "active"
    },
    {
      name: "HIPAA",
      jurisdiction: "US",
      lastUpdate: "Dec 28, 2023",
      trackedSources: 12,
      pendingChanges: 0,
      status: "active"
    },
    {
      name: "PCI DSS",
      jurisdiction: "Global",
      lastUpdate: "Jan 8, 2024", 
      trackedSources: 6,
      pendingChanges: 1,
      status: "active"
    },
    {
      name: "EU AI Act",
      jurisdiction: "EU",
      lastUpdate: "Jan 15, 2024",
      trackedSources: 22,
      pendingChanges: 3,
      status: "active"
    }
  ];

  const alertSubscriptions = [
    {
      id: 1,
      name: "GDPR Updates - High Priority",
      framework: "GDPR",
      enabled: true,
      frequency: "Immediate",
      filters: ["High severity", "Final rules", "Guidance documents"]
    },
    {
      id: 2,
      name: "US Financial Regulations",
      framework: "SOX",
      enabled: true,
      frequency: "Daily digest",
      filters: ["SEC releases", "PCAOB updates", "Final rules"]
    },
    {
      id: 3,
      name: "Healthcare Compliance",
      framework: "HIPAA",
      enabled: false,
      frequency: "Weekly summary",
      filters: ["Privacy rules", "Security standards", "Enforcement actions"]
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Regulatory Tracking</h1>
          <p className="text-slate-400">Monitor regulatory changes across global frameworks</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-slate-600 text-slate-300">
            <Bell className="w-4 h-4 mr-2" />
            Manage Alerts
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            {/* <Plus className="w-4 h-4 mr-2" /> */}
            Add Framework
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Active Updates</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8</div>
            <p className="text-xs text-slate-400">
              <span className="text-orange-400">+3</span> this week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Tracked Frameworks</CardTitle>
            <Shield className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-slate-400">Across 5 jurisdictions</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Pending Changes</CardTitle>
            <Clock className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">7</div>
            <p className="text-xs text-slate-400">Effective within 30 days</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Document Impact</CardTitle>
            <FileText className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">260</div>
            <p className="text-xs text-slate-400">Documents require review</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="updates" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="updates" className="data-[state=active]:bg-slate-700">Recent Updates</TabsTrigger>
          <TabsTrigger value="frameworks" className="data-[state=active]:bg-slate-700">Frameworks</TabsTrigger>
          <TabsTrigger value="alerts" className="data-[state=active]:bg-slate-700">Alert Setup</TabsTrigger>
          <TabsTrigger value="sources" className="data-[state=active]:bg-slate-700">Data Sources</TabsTrigger>
        </TabsList>

        <TabsContent value="updates" className="space-y-6">
          {/* Filters */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search regulations..."
                    className="w-64 bg-slate-700 border-slate-600 text-slate-200"
                  />
                </div>
                <Select value={selectedJurisdiction} onValueChange={setSelectedJurisdiction}>
                  <SelectTrigger className="w-48 bg-slate-700 border-slate-600 text-slate-200">
                    <SelectValue placeholder="All Jurisdictions" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="all" className="text-slate-200">All Jurisdictions</SelectItem>
                    <SelectItem value="eu" className="text-slate-200">European Union</SelectItem>
                    <SelectItem value="us" className="text-slate-200">United States</SelectItem>
                    <SelectItem value="global" className="text-slate-200">Global</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                  <SelectTrigger className="w-48 bg-slate-700 border-slate-600 text-slate-200">
                    <SelectValue placeholder="All Frameworks" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="all" className="text-slate-200">All Frameworks</SelectItem>
                    <SelectItem value="gdpr" className="text-slate-200">GDPR</SelectItem>
                    <SelectItem value="sox" className="text-slate-200">SOX</SelectItem>
                    <SelectItem value="hipaa" className="text-slate-200">HIPAA</SelectItem>
                    <SelectItem value="pci" className="text-slate-200">PCI DSS</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Regulatory Updates */}
          <div className="space-y-4">
            {regulatoryUpdates.map((update) => (
              <Card key={update.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <CardTitle className="text-slate-200">{update.title}</CardTitle>
                        <Badge 
                          variant={update.severity === 'high' ? 'destructive' : 
                                  update.severity === 'medium' ? 'default' : 'secondary'}
                        >
                          {update.severity.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className="text-blue-400 border-blue-400">
                          {update.framework}
                        </Badge>
                      </div>
                      <CardDescription className="text-slate-400">
                        {update.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Badge 
                        variant={
                          update.status === 'active' ? 'default' :
                          update.status === 'pending' ? 'secondary' :
                          'outline'
                        }
                      >
                        {update.status.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Published</p>
                      <p className="text-sm text-slate-200">{update.publishDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Effective</p>
                      <p className="text-sm text-slate-200">{update.effectiveDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Jurisdiction</p>
                      <p className="text-sm text-slate-200">{update.jurisdiction}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Impact</p>
                      <p className="text-sm text-slate-200">{update.impactedDocuments} documents</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <Globe className="w-4 h-4" />
                      <span>Source: {update.source}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                        View Impact
                      </Button>
                      <Button variant="outline" size="sm" className="border-blue-400 text-blue-400">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Official Source
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="frameworks" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <CardTitle className="text-slate-200">{framework.name}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-green-400 border-green-400">
                      {framework.status.toUpperCase()}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400">
                    {framework.jurisdiction}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-400">Last Update</span>
                      <span className="text-sm text-slate-200">{framework.lastUpdate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-400">Sources</span>
                      <span className="text-sm text-slate-200">{framework.trackedSources}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-400">Pending Changes</span>
                      <Badge variant={framework.pendingChanges > 0 ? 'secondary' : 'outline'}>
                        {framework.pendingChanges}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 pt-4 border-t border-slate-700">
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                      Configure
                    </Button>
                    <Button variant="outline" size="sm" className="border-blue-400 text-blue-400">
                      View Updates
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-200">Alert Subscriptions</CardTitle>
              <CardDescription className="text-slate-400">
                Configure notifications for regulatory changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertSubscriptions.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-medium text-slate-200">{alert.name}</h4>
                        <Badge variant="outline" className="text-blue-400 border-blue-400">
                          {alert.framework}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400">
                        Frequency: {alert.frequency}
                      </p>
                      <p className="text-xs text-slate-500">
                        Filters: {alert.filters.join(', ')}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {/* <Switch
                          checked={alert.enabled}
                          className="data-[state=checked]:bg-blue-600"
                        /> */}
                        <span className="text-sm text-slate-300">
                          {alert.enabled ? 'Enabled' : 'Disabled'}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-slate-400">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end mt-6">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  {/* <Plus className="w-4 h-4 mr-2" /> */}
                  Add Alert Subscription
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Government Sources</CardTitle>
                <CardDescription className="text-slate-400">
                  Official regulatory agencies and departments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "SEC EDGAR Database", status: "active", lastSync: "2 hours ago" },
                    { name: "European Commission", status: "active", lastSync: "4 hours ago" },
                    { name: "EDPB Guidelines", status: "active", lastSync: "6 hours ago" },
                    { name: "PCAOB Standards", status: "active", lastSync: "1 day ago" },
                    { name: "HHS.gov Updates", status: "maintenance", lastSync: "2 days ago" }
                  ].map((source, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-200">{source.name}</p>
                        <p className="text-xs text-slate-400">Last sync: {source.lastSync}</p>
                      </div>
                      <Badge 
                        variant={source.status === 'active' ? 'default' : 'secondary'}
                      >
                        {source.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Industry Sources</CardTitle>
                <CardDescription className="text-slate-400">
                  Professional organizations and standards bodies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "PCI Security Standards Council", status: "active", lastSync: "3 hours ago" },
                    { name: "ISO Standards Updates", status: "active", lastSync: "5 hours ago" },
                    { name: "NIST Guidelines", status: "active", lastSync: "8 hours ago" },
                    { name: "GDPR.eu Resources", status: "active", lastSync: "12 hours ago" },
                    { name: "IAPP Privacy Updates", status: "active", lastSync: "1 day ago" }
                  ].map((source, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-200">{source.name}</p>
                        <p className="text-xs text-slate-400">Last sync: {source.lastSync}</p>
                      </div>
                      <Badge variant="default">
                        {source.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}