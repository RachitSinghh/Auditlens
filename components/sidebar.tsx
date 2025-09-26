"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FileSearch, Shield, TrendingUp, Archive, FileText, ChartBar as BarChart3, Zap } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'analysis', name: 'Document Analysis', icon: FileSearch },
  { id: 'rules', name: 'Compliance Rules', icon: Shield },
  { id: 'regulatory', name: 'Regulatory Tracking', icon: TrendingUp },
  { id: 'repository', name: 'Document Repository', icon: Archive },
  { id: 'reports', name: 'Audit Reports', icon: FileText },
  { id: 'analytics', name: 'Analytics', icon: BarChart3 },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="w-64 bg-slate-900/90 backdrop-blur-sm border-r border-slate-800 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AuditLens</h1>
            <p className="text-sm text-slate-400">AI Compliance Platform</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start text-left h-12",
              activeSection === item.id 
                ? "bg-blue-600/20 text-blue-400 border-blue-500/30" 
                : "text-slate-300 hover:text-white hover:bg-slate-800/50"
            )}
            onClick={() => onSectionChange(item.id)}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </Button>
        ))}
      </nav>
      
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm font-medium text-slate-300">System Status</span>
          </div>
          <p className="text-xs text-slate-400">All AI models operational</p>
          <p className="text-xs text-slate-400">Processing 47 documents</p>
        </div>
      </div>
    </div>
  );
}