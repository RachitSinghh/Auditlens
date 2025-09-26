"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { FileText, Download, Eye, Calendar, CircleCheck as CheckCircle, TriangleAlert as AlertTriangle, Clock, Filter, Plus, Share, Printer } from "lucide-react";

export function AuditReports() {
  const [selectedPeriod, setSelectedPeriod] = useState("current");

  const auditReports = [
    {
      id: 1,
      name: "GDPR Compliance Assessment - Q1 2024",
      type: "compliance",
      framework: "GDPR",
      period: "Q1 2024",
      generated: "2024-01-15",
      status: "completed",
      score: 94,
      issues: 3,
      recommendations: 7,
      documentsAnalyzed: 247,
      pages: 45,
      lastUpdated: "2 hours ago"
    },
    {
      id: 2,
      name: "SOX Internal Controls Review",
      type: "financial",
      framework: "SOX",
      period: "2023 Annual",
      generated: "2024-01-12",
      status: "completed",
      score: 87,
      issues: 5,
      recommendations: 12,
      documentsAnalyzed: 156,
      pages: 67,
      lastUpdated: "1 day ago"
    },
    {
      id: 3,
      name: "PCI DSS Security Assessment",
      type: "security",
      framework: "PCI DSS",
      period: "Q4 2023",
      generated: "2024-01-10",
      status: "completed",
      score: 92,
      issues: 2,
      recommendations: 5,
      documentsAnalyzed: 89,
      pages: 23,
      lastUpdated: "3 days ago"
    },
    {
      id: 4,
      name: "HIPAA Privacy Impact Analysis",
      type: "privacy",
      framework: "HIPAA",
      period: "Q1 2024",
      generated: "2024-01-08",
      status: "in-progress",
      score: null,
      issues: null,
      recommendations: null,
      documentsAnalyzed: 134,
      pages: null,
      lastUpdated: "30 minutes ago"
    },
    {
      id: 5,
      name: "Contract Risk Summary Report",
      type: "risk",
      framework: "Custom",
      period: "December 2023",
      generated: "2024-01-05",
      status: "completed",
      score: 73,
      issues: 8,
      recommendations: 15,
      documentsAnalyzed: 78,
      pages: 34,
      lastUpdated: "5 days ago"
    }
  ];

  const scheduledReports = [
    {
      id: 1,
      name: "Monthly GDPR Compliance Review",
      framework: "GDPR",
      frequency: "Monthly",
      nextRun: "2024-02-01",
      status: "active"
    },
    {
      id: 2,
      name: "Quarterly Risk Assessment",
      framework: "Multi-Framework",
      frequency: "Quarterly",
      nextRun: "2024-04-01",
      status: "active"
    },
    {
      id: 3,
      name: "Annual SOX Controls Testing",
      framework: "SOX",
      frequency: "Annually",
      nextRun: "2024-12-31",
      status: "active"
    }
  ];

  const reportTemplates = [
    {
      name: "Executive Compliance Summary",
      description: "High-level overview for leadership teams",
      frameworks: ["GDPR", "SOX", "HIPAA"],
      sections: 6
    },
    {
      name: "Technical Risk Analysis",
      description: "Detailed technical compliance findings",
      frameworks: ["PCI DSS", "SOX", "Custom"],
      sections: 12
    },
    {
      name: "Regulatory Change Impact",
      description: "Assessment of regulatory updates on existing documents",
      frameworks: ["GDPR", "HIPAA", "Custom"],
      sections: 8
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-400/20 border-green-400';
      case 'in-progress':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400';
      case 'scheduled':
        return 'text-blue-400 bg-blue-400/20 border-blue-400';
      default:
        return 'text-slate-400 bg-slate-400/20 border-slate-400';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Audit Reports</h1>
          <p className="text-slate-400">Comprehensive compliance and risk assessment reports</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-slate-600 text-slate-300">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Report
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Report Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Reports</CardTitle>
            <FileText className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">47</div>
            <p className="text-xs text-slate-400">
              <span className="text-green-400">+5</span> this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Avg Compliance Score</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">89%</div>
            <p className="text-xs text-slate-400">
              <span className="text-green-400">+3%</span> improvement
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Active Issues</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">18</div>
            <p className="text-xs text-slate-400">
              <span className="text-red-400">+3</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Scheduled Reports</CardTitle>
            <Clock className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8</div>
            <p className="text-xs text-slate-400">Next: Feb 1, 2024</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reports" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="reports" className="data-[state=active]:bg-slate-700">Generated Reports</TabsTrigger>
          <TabsTrigger value="scheduled" className="data-[state=active]:bg-slate-700">Scheduled Reports</TabsTrigger>
          <TabsTrigger value="templates" className="data-[state=active]:bg-slate-700">Templates</TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-slate-700">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-48 bg-slate-800/50 border-slate-600 text-slate-300">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="current" className="text-slate-200">Current Quarter</SelectItem>
                  <SelectItem value="last" className="text-slate-200">Last Quarter</SelectItem>
                  <SelectItem value="ytd" className="text-slate-200">Year to Date</SelectItem>
                  <SelectItem value="all" className="text-slate-200">All Time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                <Download className="w-4 h-4 mr-2" />
                Export All
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {auditReports.map((report) => (
              <Card key={report.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-slate-200 mb-2">{report.name}</CardTitle>
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="text-blue-400 border-blue-400">
                          {report.framework}
                        </Badge>
                        <Badge className={`text-xs ${getStatusColor(report.status)}`}>
                          {report.status.replace('-', ' ').toUpperCase()}
                        </Badge>
                        <span className="text-sm text-slate-400">{report.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {report.score && (
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${getScoreColor(report.score)}`}>
                            {report.score}%
                          </div>
                          <p className="text-xs text-slate-400">Compliance Score</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-slate-200">
                        {report.issues !== null ? report.issues : '—'}
                      </p>
                      <p className="text-xs text-slate-400">Issues Found</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-slate-200">
                        {report.recommendations !== null ? report.recommendations : '—'}
                      </p>
                      <p className="text-xs text-slate-400">Recommendations</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-slate-200">{report.documentsAnalyzed}</p>
                      <p className="text-xs text-slate-400">Documents Analyzed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-slate-200">
                        {report.pages !== null ? report.pages : '—'}
                      </p>
                      <p className="text-xs text-slate-400">Report Pages</p>
                    </div>
                  </div>

                  {report.status === 'in-progress' && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-300">Processing Progress</span>
                        <span className="text-sm text-slate-400">
                          {Math.round((report.documentsAnalyzed / 200) * 100)}%
                        </span>
                      </div>
                      <Progress value={(report.documentsAnalyzed / 200) * 100} className="h-2" />
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <span>Generated: {report.generated}</span>
                      <span>Updated: {report.lastUpdated}</span>
                    </div>
                    <div className="flex space-x-2">
                      {report.status === 'completed' && (
                        <>
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <Eye className="w-4 h-4 mr-1" />
                            Preview
                          </Button>
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <Share className="w-4 h-4 mr-1" />
                            Share
                          </Button>
                        </>
                      )}
                      {report.status === 'in-progress' && (
                        <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                          <Clock className="w-4 h-4 mr-1" />
                          View Progress
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <div className="grid gap-4">
            {scheduledReports.map((report) => (
              <Card key={report.id} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-600/20 rounded-lg">
                        <Calendar className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-200">{report.name}</h3>
                        <div className="flex items-center space-x-3 mt-1">
                          <Badge variant="outline" className="text-blue-400 border-blue-400">
                            {report.framework}
                          </Badge>
                          <span className="text-sm text-slate-400">
                            {report.frequency} • Next: {report.nextRun}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={`text-xs ${getStatusColor(report.status)}`}>
                        {report.status.toUpperCase()}
                      </Badge>
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                        Configure
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-slate-800/30 border-slate-700 border-dashed">
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-300 mb-2">Schedule Automated Reports</h3>
              <p className="text-slate-400 mb-4">
                Set up recurring compliance and risk assessment reports
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Scheduled Report
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTemplates.map((template, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <CardTitle className="text-slate-200">{template.name}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Frameworks</p>
                      <div className="flex flex-wrap gap-1">
                        {template.frameworks.map((framework, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-blue-400 border-blue-400/50">
                            {framework}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">{template.sections} sections</span>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Use Template
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-slate-800/30 border-slate-700 border-dashed">
            <CardContent className="p-8 text-center">
              <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-300 mb-2">Create Custom Template</h3>
              <p className="text-slate-400 mb-4">
                Build your own report template with custom sections and formatting
              </p>
              <Button variant="outline" className="border-slate-600 text-slate-300">
                <Plus className="w-4 h-4 mr-2" />
                Create Template
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Compliance Trends</CardTitle>
                <CardDescription className="text-slate-400">
                  Average compliance scores over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">GDPR</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={94} className="w-20 h-2" />
                      <span className="text-sm font-medium text-green-400">94%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">SOX</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={87} className="w-20 h-2" />
                      <span className="text-sm font-medium text-yellow-400">87%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">PCI DSS</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={92} className="w-20 h-2" />
                      <span className="text-sm font-medium text-green-400">92%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">HIPAA</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={89} className="w-20 h-2" />
                      <span className="text-sm font-medium text-green-400">89%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Report Generation Stats</CardTitle>
                <CardDescription className="text-slate-400">
                  Monthly report generation metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">January 2024</span>
                    <span className="text-sm font-medium text-slate-200">12 reports</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">December 2023</span>
                    <span className="text-sm font-medium text-slate-200">8 reports</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">November 2023</span>
                    <span className="text-sm font-medium text-slate-200">15 reports</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">October 2023</span>
                    <span className="text-sm font-medium text-slate-200">6 reports</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Avg Generation Time</span>
                    <span className="text-sm font-medium text-blue-400">3.2 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}