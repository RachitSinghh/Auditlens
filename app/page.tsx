"use client";

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { Dashboard } from '@/components/dashboard';
import { DocumentAnalysis } from '@/components/document-analysis';
import { ComplianceRules } from '@/components/compliance-rules';
import { RegulatoryTracking } from '@/components/regulatory-tracking';
import { DocumentRepository } from '@/components/document-repository';
import { AuditReports } from '@/components/audit-reports';
import { Analytics } from '@/components/analytics';

export default function Home() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'analysis':
        return <DocumentAnalysis />;
      case 'rules':
        return <ComplianceRules />;
      case 'regulatory':
        return <RegulatoryTracking />;
      case 'repository':
        return <DocumentRepository />;
      case 'reports':
        return <AuditReports />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex h-screen">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}