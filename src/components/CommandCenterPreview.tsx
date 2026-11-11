import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Activity, 
  Users, 
  FileText, 
  Cpu, 
  Briefcase,
  ChevronRight,
  Filter,
  ArrowUpRight,
  DollarSign
} from 'lucide-react';

export const CommandCenterPreview: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'30d' | 'quarter' | 'ytd'>('ytd');

  const kpis = [
    { label: 'Total Managed Spend', value: '$84.5M', change: '+14.2% YOY', positive: true, icon: DollarSign, color: 'text-primary-blue bg-blue-50' },
    { label: 'Active RFQs', value: '128 Live', change: '14 Categories', positive: true, icon: Briefcase, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'Pending Approvals', value: '14 Active', change: 'Zero Dept Head SLA', positive: true, icon: Clock, color: 'text-amber-600 bg-amber-50' },
    { label: 'Verified Suppliers', value: '482 Total', change: '98.2% Compliance', positive: true, icon: Users, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'High-Risk Suppliers', value: '3 Flagged', change: 'Audit in progress', positive: false, icon: AlertTriangle, color: 'text-rose-600 bg-rose-50' },
    { label: 'Purchase Orders', value: '1,240 Executed', change: '99.8% match rate', positive: true, icon: FileText, color: 'text-teal-600 bg-teal-50' },
    { label: 'Business Cases', value: '46 Approved', change: '$9.2M CapEx ROI', positive: true, icon: TrendingUp, color: 'text-purple-600 bg-purple-50' },
    { label: 'Engineering Changes', value: '31 In Sync', change: 'BOM Feasibility 100%', positive: true, icon: Cpu, color: 'text-sky-600 bg-sky-50' },
  ];

  const spendCategories = [
    { category: 'Heavy Industrial Castings & Forgings', spend: '$28.4M', pct: 33.6, savings: '$3.4M' },
    { category: 'Precision Electronic Components & PCBs', spend: '$19.8M', pct: 23.4, savings: '$2.1M' },
    { category: 'Raw Metals, Titanium & Alloys', spend: '$16.2M', pct: 19.2, savings: '$1.8M' },
    { category: 'Hydraulic Systems & Actuators', spend: '$12.5M', pct: 14.8, savings: '$1.2M' },
    { category: 'Logistics, Freight & Third-Party MRO', spend: '$7.6M', pct: 9.0, savings: '$780K' },
  ];

  const recentActivities = [
    { time: '10m ago', text: 'Executive Approval completed for Business Case BC-2026-084 ($450,000)', badge: 'Approval', color: 'bg-emerald-100 text-emerald-800' },
    { time: '28m ago', text: 'AI Supplier Evaluation ranked FEMSA #1 for PUR-RFQ-2026-00091 (100 pts)', badge: 'AI Engine', color: 'bg-amber-100 text-amber-800' },
    { time: '1h ago', text: 'Dual E-Signature completed for Contract CON-2026-042 (Titan Industrial)', badge: 'CLM', color: 'bg-purple-100 text-purple-800' },
    { time: '2h ago', text: 'Engineering ECR-2026-0042 drawings synchronized with RFQ BOM line items', badge: 'Engineering', color: 'bg-indigo-100 text-indigo-800' },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-navy text-white text-xs font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-primary-blue" />
            <span>Module 10 • Executive Cockpit</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Procurement Command Center
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real-time spend aggregation, forward predictive forecasting, and vendor risk radar for enterprise leaders.
          </p>
        </div>

        {/* 8 Core KPIs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-subtle hover:shadow-card transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {kpi.label}
                  </span>
                  <div className={`p-2 rounded-xl ${kpi.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-navy mb-1">{kpi.value}</div>
                <div className="text-xs font-medium text-slate-600 flex items-center">
                  <span>{kpi.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spend Category Breakdown & Real-Time Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Spend Analytics Breakdown */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3">
              <div>
                <h3 className="text-lg font-bold text-navy">Category Spend & Savings Realization</h3>
                <p className="text-xs text-slate-500 mt-0.5">Continuous tracking across active global sourcing tenders</p>
              </div>
              <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-xs font-semibold">
                <button
                  onClick={() => setTimeRange('30d')}
                  className={`px-3 py-1 rounded-md transition-colors ${timeRange === '30d' ? 'bg-white text-navy shadow-sm' : 'text-slate-600'}`}
                >
                  30 Days
                </button>
                <button
                  onClick={() => setTimeRange('quarter')}
                  className={`px-3 py-1 rounded-md transition-colors ${timeRange === 'quarter' ? 'bg-white text-navy shadow-sm' : 'text-slate-600'}`}
                >
                  Quarter
                </button>
                <button
                  onClick={() => setTimeRange('ytd')}
                  className={`px-3 py-1 rounded-md transition-colors ${timeRange === 'ytd' ? 'bg-white text-navy shadow-sm' : 'text-slate-600'}`}
                >
                  YTD
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {spendCategories.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="text-navy">{item.category}</span>
                    <div className="space-x-3">
                      <span className="font-mono text-navy font-bold">{item.spend}</span>
                      <span className="text-emerald-600 font-mono text-xs">(Saved {item.savings})</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-primary-blue h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Predictive Spend Accuracy: <strong className="text-navy">99.1%</strong></span>
              <span className="text-primary-blue font-semibold hover:underline cursor-pointer flex items-center">
                <span>Export Sourcing Ledger</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </span>
            </div>
          </div>

          {/* Right 5 Cols: Live Governance Activity Stream */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  <h3 className="text-base font-bold text-navy">Live Procurement Telemetry</h3>
                </div>
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="mt-5 space-y-4">
                {recentActivities.map((act, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3 text-xs">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex-shrink-0 mt-0.5 ${act.color}`}>
                      {act.badge}
                    </span>
                    <div className="flex-1">
                      <div className="text-slate-800 font-medium leading-relaxed">{act.text}</div>
                      <div className="text-[10px] text-slate-400 mt-1 font-mono">{act.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 bg-blue-50/50 p-3 rounded-xl border border-blue-200/60 text-xs text-slate-600">
              <span className="font-bold text-navy">Audit Readiness: </span>
              Every intake, ECR, RFQ, AI scoring event, and contract signature is immutably timestamped and exportable for compliance auditors.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

