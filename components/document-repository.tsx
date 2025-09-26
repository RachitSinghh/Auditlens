"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Archive, Search, Filter, Download, Eye, FileText, Image, File, Calendar, Tag, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Clock, Share } from "lucide-react";

export function DocumentRepository() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const documents = [
    {
      id: 1,
      name: "Vendor_Agreement_2024_TechCorp.pdf",
      type: "contract",
      category: "Legal",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      lastAnalyzed: "2024-01-15",
      riskScore: 73,
      status: "high-risk",
      tags: ["vendor", "liability", "gdpr"],
      aiInsights: 4,
      complianceIssues: 2,
      extractedEntities: 15
    },
    {
      id: 2,
      name: "Privacy_Policy_Update_2024.docx",
      type: "policy",
      category: "Compliance",
      size: "856 KB",
      uploadDate: "2024-01-12",
      lastAnalyzed: "2024-01-12",
      riskScore: 45,
      status: "medium-risk",
      tags: ["privacy", "gdpr", "data-retention"],
      aiInsights: 2,
      complianceIssues: 1,
      extractedEntities: 8
    },
    {
      id: 3,
      name: "SOX_Compliance_Report_Q4.pdf",
      type: "report",
      category: "Financial",
      size: "4.2 MB",
      uploadDate: "2024-01-10",
      lastAnalyzed: "2024-01-10",
      riskScore: 28,
      status: "low-risk",
      tags: ["sox", "financial-controls", "audit"],
      aiInsights: 1,
      complianceIssues: 0,
      extractedEntities: 22
    },
    {
      id: 4,
      name: "Employee_Handbook_2024.pdf",
      type: "policy",
      category: "HR",
      size: "3.1 MB",
      uploadDate: "2024-01-08",
      lastAnalyzed: "2024-01-08",
      riskScore: 52,
      status: "medium-risk",
      tags: ["hr", "employment", "policies"],
      aiInsights: 3,
      complianceIssues: 1,
      extractedEntities: 12
    },
    {
      id: 5,
      name: "PCI_DSS_Compliance_Scan.png",
      type: "image",
      category: "Security",
      size: "1.8 MB",
      uploadDate: "2024-01-05",
      lastAnalyzed: "2024-01-05",
      riskScore: 35,
      status: "low-risk",
      tags: ["pci-dss", "security", "scan-results"],
      aiInsights: 2,
      complianceIssues: 0,
      extractedEntities: 6
    },
    {
      id: 6,
      name: "Board_Meeting_Transcript_2024_01.txt",
      type: "transcript",
      category: "Governance",
      size: "234 KB",
      uploadDate: "2024-01-03",
      lastAnalyzed: "2024-01-03",
      riskScore: 67,
      status: "high-risk",
      tags: ["governance", "board-meeting", "strategic"],
      aiInsights: 5,
      complianceIssues: 1,
      extractedEntities: 18
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="w-5 h-5 text-purple-400" />;
      case 'transcript':
        return <File className="w-5 h-5 text-green-400" />;
      default:
        return <FileText className="w-5 h-5 text-blue-400" />;
    }
  };

  const getRiskColor = (status: string) => {
    switch (status) {
      case 'high-risk':
        return 'text-red-400 bg-red-400/20 border-red-400';
      case 'medium-risk':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400';
      case 'low-risk':
        return 'text-green-400 bg-green-400/20 border-green-400';
      default:
        return 'text-slate-400 bg-slate-400/20 border-slate-400';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    if (selectedFilter !== 'all' && doc.status !== selectedFilter) return false;
    if (searchQuery && !doc.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) return false;
    return true;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Document Repository</h1>
          <p className="text-slate-400">Centralized document storage with AI-powered analysis</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-slate-600 text-slate-300">
            <Share className="w-4 h-4 mr-2" />
            Share Collection
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            {/* <Upload className="w-4 h-4 mr-2" /> */}
            Upload Documents
          </Button>
        </div>
      </div>

      {/* Repository Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Documents</CardTitle>
            <Archive className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,247</div>
            <p className="text-xs text-slate-400">
              <span className="text-green-400">+23</span> this week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">High Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">47</div>
            <p className="text-xs text-slate-400">
              <span className="text-red-400">+2</span> today
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Processing Queue</CardTitle>
            <Clock className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-slate-400">Avg 2.3s per doc</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Storage Used</CardTitle>
            <Archive className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2.8 GB</div>
            <p className="text-xs text-slate-400">of 10 GB limit</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="all" className="data-[state=active]:bg-slate-700">All Documents</TabsTrigger>
            <TabsTrigger value="recent" className="data-[state=active]:bg-slate-700">Recently Added</TabsTrigger>
            <TabsTrigger value="analyzed" className="data-[state=active]:bg-slate-700">Recently Analyzed</TabsTrigger>
            <TabsTrigger value="shared" className="data-[state=active]:bg-slate-700">Shared</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64 bg-slate-800/50 border-slate-600 text-slate-300"
              />
            </div>
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-40 bg-slate-800/50 border-slate-600 text-slate-300">
                <SelectValue placeholder="Filter by risk" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                <SelectItem value="all" className="text-slate-200">All Risk Levels</SelectItem>
                <SelectItem value="high-risk" className="text-slate-200">High Risk</SelectItem>
                <SelectItem value="medium-risk" className="text-slate-200">Medium Risk</SelectItem>
                <SelectItem value="low-risk" className="text-slate-200">Low Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {filteredDocuments.map((doc) => (
              <Card key={doc.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      {getFileIcon(doc.type)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-slate-200 truncate">{doc.name}</h3>
                          <Badge className={`text-xs ${getRiskColor(doc.status)}`}>
                            {doc.status.replace('-', ' ').toUpperCase()}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-400 mb-3">
                          <div>
                            <span className="text-slate-500">Category: </span>
                            <span className="text-slate-300">{doc.category}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Size: </span>
                            <span className="text-slate-300">{doc.size}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Uploaded: </span>
                            <span className="text-slate-300">{doc.uploadDate}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Risk Score: </span>
                            <span className={`font-medium ${
                              doc.riskScore >= 70 ? 'text-red-400' : 
                              doc.riskScore >= 40 ? 'text-yellow-400' : 'text-green-400'
                            }`}>
                              {doc.riskScore}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {doc.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs text-blue-400 border-blue-400/50">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-slate-400">
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-4 h-4 text-blue-400" />
                            <span>{doc.aiInsights} AI Insights</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <AlertTriangle className="w-4 h-4 text-orange-400" />
                            <span>{doc.complianceIssues} Issues</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Tag className="w-4 h-4 text-green-400" />
                            <span>{doc.extractedEntities} Entities</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-200">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-200">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-200">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <Card className="bg-slate-800/30 border-slate-700 border-dashed">
              <CardContent className="p-12 text-center">
                <Archive className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-300 mb-2">No documents found</h3>
                <p className="text-slate-400 mb-4">
                  {searchQuery || selectedFilter !== 'all' 
                    ? "Try adjusting your search or filters"
                    : "Upload your first document to get started"}
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  {/* <Upload className="w-4 h-4 mr-2" /> */}
                  Upload Documents
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4">
            {filteredDocuments
              .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
              .slice(0, 10)
              .map((doc) => (
                <Card key={doc.id} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getFileIcon(doc.type)}
                        <div>
                          <h4 className="font-medium text-slate-200">{doc.name}</h4>
                          <p className="text-sm text-slate-400">Uploaded {doc.uploadDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={`text-xs ${getRiskColor(doc.status)}`}>
                          Risk: {doc.riskScore}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="analyzed" className="space-y-4">
          <div className="grid gap-4">
            {filteredDocuments
              .sort((a, b) => new Date(b.lastAnalyzed).getTime() - new Date(a.lastAnalyzed).getTime())
              .slice(0, 10)
              .map((doc) => (
                <Card key={doc.id} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getFileIcon(doc.type)}
                        <div>
                          <h4 className="font-medium text-slate-200">{doc.name}</h4>
                          <p className="text-sm text-slate-400">
                            Analyzed {doc.lastAnalyzed} • {doc.aiInsights} insights, {doc.complianceIssues} issues
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={`text-xs ${getRiskColor(doc.status)}`}>
                          {doc.status.replace('-', ' ').toUpperCase()}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="shared" className="space-y-4">
          <Card className="bg-slate-800/30 border-slate-700 border-dashed">
            <CardContent className="p-12 text-center">
              <Share className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-300 mb-2">No shared documents</h3>
              <p className="text-slate-400 mb-4">
                Documents shared with you or by you will appear here
              </p>
              <Button variant="outline" className="border-slate-600 text-slate-300">
                Learn about sharing
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}