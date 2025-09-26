"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { TrendingUp, TrendingDown, Activity, Users, FileText, Clock, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, ChartBar as BarChart3, Download } from "lucide-react";

const monthlyData = [
  { month: 'Jul', documents: 245, riskScore: 68, complianceScore: 87 },
  { month: 'Aug', documents: 312, riskScore: 65, complianceScore: 89 },
  { month: 'Sep', documents: 289, riskScore: 62, complianceScore: 91 },
  { month: 'Oct', documents: 356, riskScore: 58, complianceScore: 93 },
  { month: 'Nov', documents: 398, riskScore: 55, complianceScore: 95 },
  { month: 'Dec', documents: 425, riskScore: 52, complianceScore: 96 },
  { month: 'Jan', documents: 467, riskScore: 48, complianceScore: 97 }
];

const riskDistributionData = [
  { name: 'Low Risk', value: 65, color: '#10b981' },
  { name: 'Medium Risk', value: 25, color: '#f59e0b' },
  { name: 'High Risk', value: 8, color: '#ef4444' },
  { name: 'Critical', value: 2, color: '#dc2626' }
];

const frameworkPerformance = [
  { framework: 'GDPR', score: 94, trend: 'up', change: '+2%' },
  { framework: 'SOX', score: 87, trend: 'up', change: '+1%' },
  { framework: 'HIPAA', score: 92, trend: 'up', change: '+3%' },
  { framework: 'PCI DSS', score: 89, trend: 'down', change: '-1%' },
  { framework: 'Custom', score: 76, trend: 'up', change: '+4%' }
];

const aiModelMetrics = [
  { 
    model: 'Document QA', 
    accuracy: 98.7, 
    responseTime: 156, 
    throughput: '2.4K req/hr',
    status: 'excellent'
  },
  { 
    model: 'Risk Classification', 
    accuracy: 94.2, 
    responseTime: 89, 
    throughput: '5.1K req/hr',
    status: 'good'
  },
  { 
    model: 'Entity Extraction', 
    accuracy: 96.8, 
    responseTime: 67, 
    throughput: '7.8K req/hr',
    status: 'excellent'
  },
  { 
    model: 'Table Analysis', 
    accuracy: 92.1, 
    responseTime: 234, 
    throughput: '1.2K req/hr',
    status: 'good'
  }
];

const complianceInsights = [
  {
    title: "Improved GDPR Compliance",
    description: "Data retention policies have improved by 15% this quarter",
    impact: "Positive",
    trend: "up"
  },
  {
    title: "Contract Risk Reduction",
    description: "Liability clause detection reduced average risk by 23%",
    impact: "Positive",
    trend: "up"
  },
  {
    title: "Processing Speed Increase",
    description: "Document analysis speed improved by 35% with new AI models",
    impact: "Positive",
    trend: "up"
  },
  {
    title: "Regulatory Coverage Expansion",
    description: "Added tracking for 8 new regulatory frameworks",
    impact: "Positive",
    trend: "up"
  }
];

export function Analytics() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-slate-400">Comprehensive insights into compliance and AI performance</p>
        </div>
        <div className="flex space-x-2">
          <Select defaultValue="7d">
            <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-slate-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              <SelectItem value="7d" className="text-slate-200">Last 7 days</SelectItem>
              <SelectItem value="30d" className="text-slate-200">Last 30 days</SelectItem>
              <SelectItem value="90d" className="text-slate-200">Last 90 days</SelectItem>
              <SelectItem value="1y" className="text-slate-200">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-slate-600 text-slate-300">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Processing Volume</CardTitle>
            <Activity className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2,847</div>
            <p className="text-xs text-slate-400 flex items-center">
              <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
              <span className="text-green-400">+15%</span> vs last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2.1s</div>
            <p className="text-xs text-slate-400 flex items-center">
              <TrendingDown className="w-3 h-3 text-green-400 mr-1" />
              <span className="text-green-400">-0.3s</span> improvement
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">AI Model Accuracy</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">95.7%</div>
            <p className="text-xs text-slate-400 flex items-center">
              <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
              <span className="text-green-400">+1.2%</span> this quarter
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Cost Savings</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$2.4M</div>
            <p className="text-xs text-slate-400">
              Estimated annual savings
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="overview" className="data-[state=active]:bg-slate-700">Overview</TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:bg-slate-700">AI Performance</TabsTrigger>
          <TabsTrigger value="compliance" className="data-[state=active]:bg-slate-700">Compliance</TabsTrigger>
          <TabsTrigger value="trends" className="data-[state=active]:bg-slate-700">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Main Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Document Processing Trends</CardTitle>
                <CardDescription className="text-slate-400">
                  Monthly document volume and compliance scores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '6px' 
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="documents" 
                      stroke="#3b82f6" 
                      fill="#3b82f6" 
                      fillOpacity={0.3} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Risk Distribution</CardTitle>
                <CardDescription className="text-slate-400">
                  Current risk level breakdown across all documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={riskDistributionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {riskDistributionData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '6px' 
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Framework Performance */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-200">Compliance Framework Performance</CardTitle>
              <CardDescription className="text-slate-400">
                Current compliance scores by regulatory framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {frameworkPerformance.map((framework, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline" className="text-blue-400 border-blue-400">
                        {framework.framework}
                      </Badge>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-slate-200">{framework.score}%</span>
                          <div className={`flex items-center ${
                            framework.trend === 'up' ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {framework.trend === 'up' ? (
                              <TrendingUp className="w-4 h-4" />
                            ) : (
                              <TrendingDown className="w-4 h-4" />
                            )}
                            <span className="text-sm ml-1">{framework.change}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-32">
                      <div className="bg-slate-600 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            framework.score >= 90 ? 'bg-green-400' :
                            framework.score >= 80 ? 'bg-blue-400' :
                            framework.score >= 70 ? 'bg-yellow-400' : 'bg-red-400'
                          }`}
                          style={{ width: `${framework.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-200">AI Model Performance Metrics</CardTitle>
              <CardDescription className="text-slate-400">
                Real-time performance statistics for deployed AI models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiModelMetrics.map((model, index) => (
                  <div key={index} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-slate-200">{model.model}</h3>
                      <Badge className={`text-xs ${
                        model.status === 'excellent' ? 'bg-green-600' : 'bg-blue-600'
                      }`}>
                        {model.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Accuracy</span>
                        <span className="text-green-400 font-medium">{model.accuracy}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Avg Response</span>
                        <span className="text-slate-300">{model.responseTime}ms</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Throughput</span>
                        <span className="text-slate-300">{model.throughput}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Model Usage Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { name: 'Doc QA', requests: 12450 },
                    { name: 'Risk Class', requests: 8750 },
                    { name: 'Entity Ext', requests: 6890 },
                    { name: 'Table Ana', requests: 3420 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '6px' 
                      }}
                    />
                    <Bar dataKey="requests" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Response Time Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={[
                    { time: '00:00', docQA: 160, riskClass: 95, entityExt: 70 },
                    { time: '04:00', docQA: 155, riskClass: 89, entityExt: 68 },
                    { time: '08:00', docQA: 148, riskClass: 92, entityExt: 65 },
                    { time: '12:00', docQA: 156, riskClass: 88, entityExt: 67 },
                    { time: '16:00', docQA: 152, riskClass: 91, entityExt: 69 },
                    { time: '20:00', docQA: 159, riskClass: 87, entityExt: 71 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '6px' 
                      }}
                    />
                    <Line type="monotone" dataKey="docQA" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="riskClass" stroke="#10b981" strokeWidth={2} />
                    <Line type="monotone" dataKey="entityExt" stroke="#f59e0b" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-200">Compliance Score Trends</CardTitle>
              <CardDescription className="text-slate-400">
                Historical compliance performance across frameworks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151',
                      borderRadius: '6px' 
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="complianceScore" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    name="Compliance Score"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="riskScore" 
                    stroke="#ef4444" 
                    strokeWidth={3}
                    name="Average Risk Score"
                  />
                  <Legend />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-200">Key Compliance Insights</CardTitle>
              <CardDescription className="text-slate-400">
                Notable improvements and achievements in compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceInsights.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-slate-700/30 rounded-lg">
                    <div className={`p-2 rounded-lg ${
                      insight.impact === 'Positive' ? 'bg-green-600/20' : 'bg-red-600/20'
                    }`}>
                      {insight.trend === 'up' ? (
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-200 mb-1">{insight.title}</h3>
                      <p className="text-sm text-slate-400">{insight.description}</p>
                    </div>
                    <Badge className={`${
                      insight.impact === 'Positive' ? 'bg-green-600' : 'bg-red-600'
                    }`}>
                      {insight.impact}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Processing Volume Growth</CardTitle>
                <CardDescription className="text-slate-400">
                  Document processing trends over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '6px' 
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="documents" 
                      stroke="#8b5cf6" 
                      fill="#8b5cf6" 
                      fillOpacity={0.3} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Risk Reduction Trends</CardTitle>
                <CardDescription className="text-slate-400">
                  Average risk scores decreasing over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '6px' 
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="riskScore" 
                      stroke="#ef4444" 
                      strokeWidth={3}
                      dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-200">Predictive Analytics</CardTitle>
              <CardDescription className="text-slate-400">
                AI-powered predictions and recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <h3 className="font-medium text-slate-200">Predicted Growth</h3>
                  </div>
                  <p className="text-2xl font-bold text-green-400 mb-1">+23%</p>
                  <p className="text-xs text-slate-400">Document volume next month</p>
                </div>

                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-orange-400" />
                    <h3 className="font-medium text-slate-200">Risk Forecast</h3>
                  </div>
                  <p className="text-2xl font-bold text-orange-400 mb-1">12</p>
                  <p className="text-xs text-slate-400">Expected high-risk documents</p>
                </div>

                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <h3 className="font-medium text-slate-200">Efficiency Gain</h3>
                  </div>
                  <p className="text-2xl font-bold text-blue-400 mb-1">15%</p>
                  <p className="text-xs text-slate-400">Estimated time savings</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}