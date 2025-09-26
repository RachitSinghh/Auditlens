"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import { TriangleAlert as AlertTriangle, Shield, TrendingUp, FileText, Clock, CircleCheck as CheckCircle, Circle as XCircle, Activity, Zap } from "lucide-react";

const riskData = [
  { name: 'Jan', high: 12, medium: 24, low: 45 },
  { name: 'Feb', high: 8, medium: 32, low: 52 },
  { name: 'Mar', high: 15, medium: 28, low: 48 },
  { name: 'Apr', high: 6, medium: 35, low: 58 },
  { name: 'May', high: 3, medium: 31, low: 62 },
  { name: 'Jun', high: 9, medium: 29, low: 55 }
];

const complianceData = [
  { name: 'GDPR', value: 94, color: '#10b981' },
  { name: 'SOX', value: 87, color: '#3b82f6' },
  { name: 'HIPAA', value: 96, color: '#8b5cf6' },
  { name: 'PCI DSS', value: 89, color: '#f59e0b' }
];

const processingData = [
  { time: '00:00', processed: 0 },
  { time: '04:00', processed: 150 },
  { time: '08:00', processed: 420 },
  { time: '12:00', processed: 680 },
  { time: '16:00', processed: 920 },
  { time: '20:00', processed: 1150 },
  { time: '24:00', processed: 1340 }
];

export function Dashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');

  const recentAlerts = [
    {
      id: 1,
      type: 'high',
      title: 'Critical liability clause detected',
      document: 'Vendor_Agreement_2024.pdf',
      time: '5 minutes ago',
      status: 'new'
    },
    {
      id: 2,
      type: 'medium',
      title: 'Data retention policy mismatch',
      document: 'Privacy_Policy_Update.docx',
      time: '18 minutes ago',
      status: 'reviewing'
    },
    {
      id: 3,
      type: 'low',
      title: 'Minor formatting inconsistency',
      document: 'Employment_Contract_Template.pdf',
      time: '2 hours ago',
      status: 'resolved'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Documents Processed</CardTitle>
            <FileText className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,342</div>
            <p className="text-xs text-slate-400">
              <span className="text-green-400">+12%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Compliance Score</CardTitle>
            <Shield className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">94.7%</div>
            <p className="text-xs text-slate-400">
              <span className="text-green-400">+2.1%</span> improvement
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">High Risk Items</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3</div>
            <p className="text-xs text-slate-400">
              <span className="text-red-400">-6</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Processing Speed</CardTitle>
            <Zap className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2.3s</div>
            <p className="text-xs text-slate-400">
              avg per document
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-200">Risk Analysis Trends</CardTitle>
            <CardDescription className="text-slate-400">
              Monthly risk distribution across document types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={riskData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Area type="monotone" dataKey="high" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.8} />
                <Area type="monotone" dataKey="medium" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.8} />
                <Area type="monotone" dataKey="low" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.8} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-200">Document Processing</CardTitle>
            <CardDescription className="text-slate-400">
              Real-time processing volume over 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={processingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Line 
                  type="monotone" 
                  dataKey="processed" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Overview and Recent Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-200">Compliance Overview</CardTitle>
            <CardDescription className="text-slate-400">
              Regulatory framework adherence
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {complianceData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">{item.name}</span>
                  <span className="text-sm text-slate-400">{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-slate-800/50 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-slate-200">Recent Alerts</CardTitle>
                <CardDescription className="text-slate-400">
                  Latest compliance and risk notifications
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-blue-400 border-blue-400">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-4 p-3 rounded-lg bg-slate-700/50 border border-slate-600">
                  <div className={`w-3 h-3 rounded-full mt-1 ${
                    alert.type === 'high' ? 'bg-red-400' :
                    alert.type === 'medium' ? 'bg-yellow-400' :
                    'bg-green-400'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-200 truncate">
                        {alert.title}
                      </p>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          alert.status === 'new' ? 'text-red-400 border-red-400' :
                          alert.status === 'reviewing' ? 'text-yellow-400 border-yellow-400' :
                          'text-green-400 border-green-400'
                        }`}
                      >
                        {alert.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{alert.document}</p>
                    <p className="text-xs text-slate-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Model Status */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-200">AI Model Performance</CardTitle>
          <CardDescription className="text-slate-400">
            Real-time status of deployed AI models
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-300">Document QA</span>
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-xs text-slate-400">98.7% accuracy</p>
              <p className="text-xs text-slate-500">156ms avg response</p>
            </div>
            <div className="p-4 bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-300">Risk Classification</span>
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-xs text-slate-400">94.2% accuracy</p>
              <p className="text-xs text-slate-500">89ms avg response</p>
            </div>
            <div className="p-4 bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-300">Entity Extraction</span>
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-xs text-slate-400">96.8% accuracy</p>
              <p className="text-xs text-slate-500">67ms avg response</p>
            </div>
            <div className="p-4 bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-300">Table Analysis</span>
                <Activity className="w-4 h-4 text-yellow-400" />
              </div>
              <p className="text-xs text-slate-400">92.1% accuracy</p>
              <p className="text-xs text-slate-500">234ms avg response</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}