"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, Settings, User, Upload, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [notifications] = useState([
    {
      id: 1,
      type: 'high-risk',
      title: 'High Risk Contract Detected',
      description: 'Non-standard liability clause in vendor agreement',
      time: '2 minutes ago'
    },
    {
      id: 2,
      type: 'compliance',
      title: 'GDPR Compliance Check Complete',
      description: '15 documents processed, 2 issues found',
      time: '15 minutes ago'
    },
    {
      id: 3,
      type: 'regulatory',
      title: 'New SEC Regulation Update',
      description: 'Form 10-K filing requirements changed',
      time: '1 hour ago'
    }
  ]);

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            placeholder="Search documents, rules, or regulations..."
            className="pl-10 w-96 bg-slate-800/50 border-slate-700 text-slate-300 placeholder-slate-500"
          />
        </div>
        <Button variant="outline" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600">
          <Upload className="w-4 h-4 mr-2" />
          Upload Documents
        </Button>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-green-400 border-green-400">
            <CheckCircle className="w-3 h-3 mr-1" />
            98.7% Accuracy
          </Badge>
          <Badge variant="outline" className="text-orange-400 border-orange-400">
            <AlertTriangle className="w-3 h-3 mr-1" />
            3 High Risk
          </Badge>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5 text-slate-300" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications.length}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-slate-800 border-slate-700">
            <DropdownMenuLabel className="text-slate-300">Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-700" />
            {notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="text-slate-300 hover:bg-slate-700">
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    notification.type === 'high-risk' ? 'bg-red-400' :
                    notification.type === 'compliance' ? 'bg-blue-400' :
                    'bg-orange-400'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{notification.title}</p>
                    <p className="text-xs text-slate-400">{notification.description}</p>
                    <p className="text-xs text-slate-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button variant="ghost" size="sm">
          <Settings className="w-5 h-5 text-slate-300" />
        </Button>
        
        <Button variant="ghost" size="sm">
          <User className="w-5 h-5 text-slate-300" />
        </Button>
      </div>
    </header>
  );
}