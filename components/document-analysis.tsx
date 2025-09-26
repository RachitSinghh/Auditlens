"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileText, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Clock, Eye, Download, Search, Filter, Zap } from "lucide-react";

export function DocumentAnalysis() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);

  const processingSteps = [
    "Document Upload & OCR",
    "AI Content Extraction", 
    "Risk Classification",
    "Compliance Checking",
    "Report Generation"
  ];

  const analysisResults = {
    riskScore: 73,
    complianceIssues: [
      {
        type: "GDPR Violation",
        severity: "high",
        description: "Data retention clause exceeds GDPR maximum of 5 years",
        page: 12,
        suggestion: "Modify clause to comply with GDPR Article 5(1)(e)"
      },
      {
        type: "Contract Risk",
        severity: "medium", 
        description: "Unlimited liability clause detected",
        page: 8,
        suggestion: "Consider capping liability to contract value"
      }
    ],
    extractedEntities: {
      parties: ["TechCorp Inc.", "DataFlow Solutions Ltd."],
      dates: ["2024-01-15", "2025-01-15", "2024-12-31"],
      amounts: ["$250,000", "$50,000"],
      obligations: [
        "Monthly security audit reports",
        "24/7 technical support availability",
        "Data breach notification within 72 hours"
      ]
    },
    aiInsights: [
      "Contract contains non-standard indemnification terms",
      "Payment terms favor the vendor significantly",
      "Termination clauses are asymmetric",
      "Force majeure provisions are comprehensive"
    ]
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setIsProcessing(true);
      setProcessingStep(0);
      
      // Simulate processing steps
      const interval = setInterval(() => {
        setProcessingStep(prev => {
          if (prev < processingSteps.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setIsProcessing(false);
            return prev;
          }
        });
      }, 1500);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Document Analysis</h1>
          <p className="text-slate-400">AI-powered compliance and risk assessment</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Upload className="w-4 h-4 mr-2" />
          Bulk Upload
        </Button>
      </div>

      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="upload" className="data-[state=active]:bg-slate-700">Document Upload</TabsTrigger>
          <TabsTrigger value="results" className="data-[state=active]:bg-slate-700">Analysis Results</TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-slate-700">Processing History</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-200">Upload Document for Analysis</CardTitle>
              <CardDescription className="text-slate-400">
                Supported formats: PDF, DOCX, TXT, Images (JPG, PNG)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
                <div className="mx-auto w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-200 mb-2">Drop files here or click to browse</h3>
                <p className="text-slate-400 mb-4">Maximum file size: 50MB</p>
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <Input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                  />
                  <Button variant="outline" className="bg-blue-600/10 border-blue-400 text-blue-400 hover:bg-blue-600/20">
                    Select Files
                  </Button>
                </Label>
              </div>

              {selectedFile && (
                <Card className="bg-slate-700/50 border-slate-600">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-sm font-medium text-slate-200">{selectedFile.name}</p>
                          <p className="text-xs text-slate-400">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      {isProcessing ? (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-yellow-400 animate-spin" />
                          <span className="text-sm text-yellow-400">Processing...</span>
                        </div>
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                    
                    {isProcessing && (
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-300">{processingSteps[processingStep]}</span>
                          <span className="text-slate-400">{((processingStep + 1) / processingSteps.length * 100).toFixed(0)}%</span>
                        </div>
                        <Progress value={(processingStep + 1) / processingSteps.length * 100} className="h-2" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <Zap className="w-5 h-5 text-blue-400 mb-2" />
                  <h4 className="font-medium text-slate-200 mb-1">Fast Processing</h4>
                  <p className="text-xs text-slate-400">Average 2.3 seconds per document</p>
                </div>
                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
                  <h4 className="font-medium text-slate-200 mb-1">High Accuracy</h4>
                  <p className="text-xs text-slate-400">98.7% compliance detection rate</p>
                </div>
                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <AlertTriangle className="w-5 h-5 text-orange-400 mb-2" />
                  <h4 className="font-medium text-slate-200 mb-1">Risk Detection</h4>
                  <p className="text-xs text-slate-400">Identifies hidden compliance risks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {selectedFile && !isProcessing && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-slate-200">Risk Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-400 mb-2">
                        {analysisResults.riskScore}
                      </div>
                      <p className="text-sm text-slate-400 mb-4">Medium Risk</p>
                      <Progress value={analysisResults.riskScore} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-slate-200">Issues Found</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">High Priority</span>
                        <Badge variant="destructive">1</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Medium Priority</span>
                        <Badge variant="secondary">1</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Low Priority</span>
                        <Badge variant="outline">0</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-slate-200">Processing Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">2.1s</div>
                      <p className="text-sm text-slate-400">
                        {((selectedFile.size / 1024 / 1024) / 2.1).toFixed(1)} MB/s throughput
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-200">Compliance Issues</CardTitle>
                  <CardDescription className="text-slate-400">
                    Detected violations and recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysisResults.complianceIssues.map((issue, index) => (
                      <div key={index} className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Badge 
                              variant={issue.severity === 'high' ? 'destructive' : 'secondary'}
                              className="text-xs"
                            >
                              {issue.severity.toUpperCase()}
                            </Badge>
                            <span className="font-medium text-slate-200">{issue.type}</span>
                          </div>
                          <span className="text-xs text-slate-400">Page {issue.page}</span>
                        </div>
                        <p className="text-sm text-slate-300 mb-2">{issue.description}</p>
                        <p className="text-xs text-blue-400">{issue.suggestion}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-slate-200">Extracted Entities</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-300 mb-2">Parties</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysisResults.extractedEntities.parties.map((party, index) => (
                          <Badge key={index} variant="outline" className="text-blue-400 border-blue-400">
                            {party}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-300 mb-2">Key Dates</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysisResults.extractedEntities.dates.map((date, index) => (
                          <Badge key={index} variant="outline" className="text-green-400 border-green-400">
                            {date}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-300 mb-2">Financial Amounts</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysisResults.extractedEntities.amounts.map((amount, index) => (
                          <Badge key={index} variant="outline" className="text-yellow-400 border-yellow-400">
                            {amount}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-slate-200">AI Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analysisResults.aiInsights.map((insight, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg">
                          <Zap className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-300">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-200">Key Obligations</CardTitle>
                  <CardDescription className="text-slate-400">
                    Extracted contractual obligations and requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysisResults.extractedEntities.obligations.map((obligation, index) => (
                      <div key={index} className="p-3 bg-slate-700/30 rounded-lg border border-slate-600">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-300">{obligation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" className="border-slate-600 text-slate-300">
                  <Eye className="w-4 h-4 mr-2" />
                  View Full Report
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export Analysis
                </Button>
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-slate-200">Processing History</CardTitle>
                  <CardDescription className="text-slate-400">
                    Recently analyzed documents
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-slate-600">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-600">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    name: "vendor_agreement_2024.pdf",
                    processed: "2 hours ago",
                    riskScore: 73,
                    issues: 2,
                    status: "completed"
                  },
                  {
                    name: "privacy_policy_update.docx", 
                    processed: "5 hours ago",
                    riskScore: 45,
                    issues: 1,
                    status: "completed"
                  },
                  {
                    name: "employment_contract.pdf",
                    processed: "1 day ago", 
                    riskScore: 28,
                    issues: 0,
                    status: "completed"
                  }
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="font-medium text-slate-200">{doc.name}</p>
                        <p className="text-xs text-slate-400">Processed {doc.processed}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-200">Risk: {doc.riskScore}</p>
                        <p className="text-xs text-slate-400">{doc.issues} issues</p>
                      </div>
                      <Badge variant={doc.status === 'completed' ? 'default' : 'secondary'}>
                        {doc.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
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