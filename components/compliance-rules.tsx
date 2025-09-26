"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Shield, Plus, CreditCard as Edit, Trash2, Copy, Eye, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Settings, Code, Zap } from "lucide-react";

export function ComplianceRules() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRule, setSelectedRule] = useState(null);

  const complianceRules = [
    {
      id: 1,
      name: "GDPR Data Retention Limit",
      category: "GDPR",
      description: "Flags data retention periods exceeding 5 years",
      severity: "high",
      status: "active",
      triggers: 247,
      accuracy: 98.5,
      lastUpdated: "2 days ago",
      conditions: [
        "Document contains 'data retention' keywords",
        "Time period > 5 years mentioned",
        "Personal data processing context detected"
      ]
    },
    {
      id: 2,
      name: "SOX Financial Controls Check",
      category: "SOX",
      description: "Validates internal control documentation requirements",
      severity: "high",
      status: "active",
      triggers: 89,
      accuracy: 94.2,
      lastUpdated: "1 week ago",
      conditions: [
        "Financial control mentions detected",
        "Missing segregation of duties clauses",
        "Inadequate approval workflows"
      ]
    },
    {
      id: 3,
      name: "Contract Liability Cap",
      category: "Contract Risk",
      description: "Detects unlimited liability clauses",
      severity: "medium",
      status: "active", 
      triggers: 156,
      accuracy: 96.8,
      lastUpdated: "3 days ago",
      conditions: [
        "Liability section present",
        "No monetary cap specified",
        "Unlimited/uncapped language used"
      ]
    },
    {
      id: 4,
      name: "PCI DSS Security Standards",
      category: "PCI DSS",
      description: "Ensures payment card data handling compliance",
      severity: "high",
      status: "draft",
      triggers: 23,
      accuracy: 91.3,
      lastUpdated: "5 days ago",
      conditions: [
        "Payment processing mentioned",
        "Card data handling procedures",
        "Security requirements compliance"
      ]
    }
  ];

  const ruleCategories = ["GDPR", "SOX", "HIPAA", "PCI DSS", "Contract Risk", "Custom"];
  const severityLevels = ["low", "medium", "high", "critical"];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Compliance Rules</h1>
          <p className="text-slate-400">Configure and manage compliance detection rules</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Rule
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 border-slate-700 max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-slate-200">Create Compliance Rule</DialogTitle>
              <DialogDescription className="text-slate-400">
                Define a new rule to detect compliance issues in documents
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-slate-300">Rule Name</Label>
                  <Input className="bg-slate-700 border-slate-600 text-slate-200" 
                         placeholder="Enter rule name" />
                </div>
                <div>
                  <Label className="text-slate-300">Category</Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-slate-200">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      {ruleCategories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()} className="text-slate-200">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label className="text-slate-300">Description</Label>
                <Textarea className="bg-slate-700 border-slate-600 text-slate-200"
                         placeholder="Describe what this rule detects" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-slate-300">Severity Level</Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-slate-200">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      {severityLevels.map((level) => (
                        <SelectItem key={level} value={level} className="text-slate-200">
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2 pt-6">
                  <Switch id="auto-remediation" />
                  <Label htmlFor="auto-remediation" className="text-slate-300">
                    Enable Auto-Remediation
                  </Label>
                </div>
              </div>
              
              <div>
                <Label className="text-slate-300">Detection Conditions</Label>
                <Textarea className="bg-slate-700 border-slate-600 text-slate-200"
                         placeholder="Define conditions that trigger this rule (one per line)"
                         rows={4} />
              </div>
              
              <div>
                <Label className="text-slate-300">AI Model Configuration</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <Label className="text-sm text-slate-400">Primary Model</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-slate-200">
                        <SelectValue placeholder="Document QA" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="document-qa" className="text-slate-200">Document QA</SelectItem>
                        <SelectItem value="text-classification" className="text-slate-200">Text Classification</SelectItem>
                        <SelectItem value="token-classification" className="text-slate-200">Token Classification</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm text-slate-400">Confidence Threshold</Label>
                    <Input className="bg-slate-700 border-slate-600 text-slate-200" 
                           placeholder="0.85" type="number" min="0" max="1" step="0.01" />
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)} 
                      className="border-slate-600 text-slate-300">
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Create Rule
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="active" className="data-[state=active]:bg-slate-700">Active Rules</TabsTrigger>
          <TabsTrigger value="draft" className="data-[state=active]:bg-slate-700">Draft Rules</TabsTrigger>
          <TabsTrigger value="templates" className="data-[state=active]:bg-slate-700">Rule Templates</TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:bg-slate-700">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4">
            {complianceRules.filter(rule => rule.status === 'active').map((rule) => (
              <Card key={rule.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <div>
                        <CardTitle className="text-slate-200">{rule.name}</CardTitle>
                        <CardDescription className="text-slate-400">
                          {rule.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={rule.severity === 'high' ? 'destructive' : 
                                rule.severity === 'medium' ? 'default' : 'secondary'}
                      >
                        {rule.severity.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className="text-green-400 border-green-400">
                        {rule.status.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-200">{rule.triggers}</p>
                      <p className="text-xs text-slate-400">Total Triggers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-400">{rule.accuracy}%</p>
                      <p className="text-xs text-slate-400">Accuracy</p>
                    </div>
                    <div className="text-center">
                      <Badge variant="outline" className="text-blue-400 border-blue-400">
                        {rule.category}
                      </Badge>
                      <p className="text-xs text-slate-400 mt-1">Category</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-slate-300">{rule.lastUpdated}</p>
                      <p className="text-xs text-slate-400">Last Updated</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Detection Conditions:</h4>
                    <div className="space-y-1">
                      {rule.conditions.map((condition, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-slate-400">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-200">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-200">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-200">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-200">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="draft" className="space-y-4">
          <div className="grid gap-4">
            {complianceRules.filter(rule => rule.status === 'draft').map((rule) => (
              <Card key={rule.id} className="bg-slate-800/30 border-slate-700 border-dashed">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Code className="w-5 h-5 text-orange-400" />
                      <div>
                        <CardTitle className="text-slate-200">{rule.name}</CardTitle>
                        <CardDescription className="text-slate-400">
                          {rule.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-orange-400 border-orange-400">
                      DRAFT
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-400">
                      Created {rule.lastUpdated} • Category: {rule.category}
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Activate Rule
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "GDPR Compliance Pack",
                description: "Complete set of GDPR compliance rules",
                rules: 12,
                category: "GDPR"
              },
              {
                name: "Financial Compliance",
                description: "SOX and financial regulations",
                rules: 8,
                category: "SOX"
              },
              {
                name: "Healthcare HIPAA",
                description: "HIPAA privacy and security rules",
                rules: 15,
                category: "HIPAA"
              },
              {
                name: "Contract Risk Analysis", 
                description: "Standard contract risk patterns",
                rules: 6,
                category: "Contract Risk"
              },
              {
                name: "PCI DSS Security",
                description: "Payment card industry standards",
                rules: 10,
                category: "PCI DSS"
              },
              {
                name: "Custom Industry Pack",
                description: "Customizable rule templates",
                rules: 5,
                category: "Custom"
              }
            ].map((template, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <CardTitle className="text-sm text-slate-200">{template.name}</CardTitle>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-blue-400 border-blue-400 text-xs">
                        {template.category}
                      </Badge>
                      <span className="text-xs text-slate-400">{template.rules} rules</span>
                    </div>
                    <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-600/10">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Overall Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400 mb-2">96.2%</div>
                <p className="text-sm text-slate-400">Across all active rules</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Total Triggers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-400 mb-2">515</div>
                <p className="text-sm text-slate-400">This month</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">False Positives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-400 mb-2">3.8%</div>
                <p className="text-sm text-slate-400">Continuously improving</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-200">Rule Performance Breakdown</CardTitle>
              <CardDescription className="text-slate-400">
                Individual rule accuracy and trigger statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {complianceRules.filter(rule => rule.status === 'active').map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <div>
                        <p className="font-medium text-slate-200">{rule.name}</p>
                        <p className="text-xs text-slate-400">{rule.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="text-sm font-medium text-green-400">{rule.accuracy}%</p>
                        <p className="text-xs text-slate-400">Accuracy</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-200">{rule.triggers}</p>
                        <p className="text-xs text-slate-400">Triggers</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={rule.severity === 'high' ? 'destructive' : 'secondary'}>
                          {rule.severity}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}