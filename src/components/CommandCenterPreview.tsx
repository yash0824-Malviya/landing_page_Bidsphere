import React, { useState } from 'react';
import { motion, AnimatePresence } from '../animations/motion-shim';
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
  DollarSign,
  Kanban,
  Calendar,
  Layers,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ScrollReveal, AnimatedCounter } from './common/MotionComponents';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const CommandCenterPreview = () => {
  const [activeProduct, setActiveProduct] = useState<'bidsphere' | 'project-mgmt'>('bidsphere');
  const [timeRange, setTimeRange] = useState<'30d' | 'quarter' | 'ytd'>('ytd');

  // BidSphere Procurement Cockpit KPIs
  const bidsphereKpis = [
    { label: 'Total Managed Spend', value: '$84,520,000', change: '+14.2% YOY', positive: true, icon: DollarSign, color: 'text-primary-blue bg-blue-50' },
    { label: 'Active RFQs', value: '128 Live', change: '14 Categories', positive: true, icon: Briefcase, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'Pending Approvals', value: '14 Active', change: 'Zero Dept Head SLA', positive: true, icon: Clock, color: 'text-amber-600 bg-amber-50' },
    { label: 'Verified Suppliers', value: '482 Total', change: '98.2% Compliance', positive: true, icon: Users, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'High-Risk Suppliers', value: '3 Flagged', change: 'Audit in progress', positive: false, icon: AlertTriangle, color: 'text-rose-600 bg-rose-50' },
    { label: 'Purchase Orders', value: '1,240 Executed', change: '99.8% match rate', positive: true, icon: FileText, color: 'text-teal-600 bg-teal-50' },
    { label: 'Business Cases', value: '46 Approved', change: '$9.2M CapEx ROI', positive: true, icon: TrendingUp, color: 'text-purple-600 bg-purple-50' },
    { label: 'Engineering Changes', value: '31 In Sync', change: 'BOM Feasibility 100%', positive: true, icon: Cpu, color: 'text-sky-600 bg-sky-50' },
  ];

  // Project Management Cockpit KPIs
  const projectKpis = [
    { label: 'Active Enterprise Projects', value: '42 Active', change: '8 Global Workstreams', positive: true, icon: Kanban, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'Milestone SLA Adherence', value: '96.4%', change: '+3.8% vs Q3', positive: true, icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Budget Variance', value: '-3.2% Spend', change: 'Favorable Savings', positive: true, icon: DollarSign, color: 'text-teal-600 bg-teal-50' },
    { label: 'Critical Path Tasks', value: '9 In Progress', change: 'Zero Blockers', positive: true, icon: Clock, color: 'text-amber-600 bg-amber-50' },
    { label: 'Sourcing Interlock Rate', value: '100% Synced', change: 'BidSphere Connected', positive: true, icon: Layers, color: 'text-primary-blue bg-blue-50' },
    { label: 'Resource Utilization', value: '88.5%', change: 'Optimal Capacity', positive: true, icon: Users, color: 'text-purple-600 bg-purple-50' },
    { label: 'Risk Mitigation Rate', value: '94.2%', change: '18 Risks Mitigated', positive: true, icon: ShieldCheck, color: 'text-sky-600 bg-sky-50' },
    { label: 'Quality & Audit Pass', value: '99.1%', change: 'CMMI L3 Aligned', positive: true, icon: CheckCircle, color: 'text-emerald-600 bg-emerald-50' },
  ];

  const spendCategories = [
    { category: 'Heavy Industrial Castings & Forgings', spend: '$28.4M', pct: 33.6, savings: '$3.4M' },
    { category: 'Precision Electronic Components & PCBs', spend: '$19.8M', pct: 23.4, savings: '$2.1M' },
    { category: 'Raw Metals, Titanium & Alloys', spend: '$16.2M', pct: 19.2, savings: '$1.8M' },
    { category: 'Hydraulic Systems & Actuators', spend: '$12.5M', pct: 14.8, savings: '$1.2M' },
    { category: 'Logistics, Freight & Third-Party MRO', spend: '$7.6M', pct: 9.0, savings: '$780K' },
  ];

  const projectPortfolio = [
    { name: 'Project Titan — Next-Gen Powertrain Sourcing', phase: 'Tendering & Reverse Auction', progress: 85, lead: 'Marcus Vance (CPO)', status: 'On Track', color: 'bg-emerald-500' },
    { name: 'Global ERP Migration & Supplier Portal Sync', phase: 'API Connector Validation', progress: 68, lead: 'Priya Sharma (Tech PM)', status: 'Reviewing', color: 'bg-amber-500' },
    { name: 'Avionics Titanium Fasteners Multi-Year Contract', phase: 'Dual E-Sign Execution', progress: 95, lead: 'David Chen (Legal/CLM)', status: 'On Track', color: 'bg-emerald-500' },
    { name: 'Hydraulic Systems Component Standardization', phase: 'Engineering ECR Signoff', progress: 42, lead: 'Elena Rostova (Lead Eng)', status: 'On Track', color: 'bg-blue-500' },
  ];

  const recentActivities = [
    { time: '10m ago', text: 'Executive Approval completed for Business Case BC-2026-084 ($450,000)', badge: 'Approval', color: 'bg-emerald-100 text-emerald-800' },
    { time: '28m ago', text: 'AI Supplier Evaluation ranked FEMSA #1 for PUR-RFQ-2026-00091 (100 pts)', badge: 'AI Engine', color: 'bg-amber-100 text-amber-800' },
    { time: '1h ago', text: 'Dual E-Signature completed for Contract CON-2026-042 (Titan Industrial)', badge: 'CLM', color: 'bg-purple-100 text-purple-800' },
    { time: '2h ago', text: 'Engineering ECR-2026-0042 drawings synchronized with RFQ BOM line items', badge: 'Engineering', color: 'bg-indigo-100 text-indigo-800' },
  ];

  const currentKpis = activeProduct === 'bidsphere' ? bidsphereKpis : projectKpis;

  return (
    <section className="py-20 md:py-28 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-navy text-white text-xs font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-primary-blue" />
            <span>Executive Command Center & Analytics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Integrated Enterprise Intelligence
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real-time spend aggregation, predictive delivery forecasting, and cross-portfolio risk tracking.
          </p>

          {/* Interactive Product Switcher (Section 15 E) */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300/80 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveProduct('bidsphere')}
                className={`relative px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors ${
                  activeProduct === 'bidsphere' ? 'text-white' : 'text-slate-700 hover:text-navy'
                }`}
              >
                {activeProduct === 'bidsphere' && (
                  <motion.div
                    layoutId="command-product-pill"
                    className="absolute inset-0 bg-primary-blue rounded-lg shadow-sm -z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4" />
                  <span>BidSphere Sourcing Analytics</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveProduct('project-mgmt')}
                className={`relative px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors ${
                  activeProduct === 'project-mgmt' ? 'text-white' : 'text-slate-700 hover:text-navy'
                }`}
              >
                {activeProduct === 'project-mgmt' && (
                  <motion.div
                    layoutId="command-product-pill"
                    className="absolute inset-0 bg-primary-blue rounded-lg shadow-sm -z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Kanban className="w-4 h-4" />
                  <span>Project & Portfolio Management</span>
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 8 Core KPIs Grid with Animated Counters */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          >
            {currentKpis.map((kpi, idx) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-subtle hover:shadow-card hover:border-primary-blue/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {kpi.label}
                    </span>
                    <div className={`p-2 rounded-xl ${kpi.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-extrabold text-navy mb-1">
                    <AnimatedCounter value={kpi.value} />
                  </div>
                  <div className="text-xs font-medium text-slate-600 flex items-center">
                    <span>{kpi.change}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Interactive Main Analytics Cockpit View */}
        <AnimatePresence mode="wait">
          {activeProduct === 'bidsphere' ? (
            <motion.div
              key="bidsphere-analytics"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left 7 Cols: Spend Analytics Breakdown with Animated Bars */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-navy">Category Spend & Savings Realization</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Continuous tracking across active global sourcing tenders</p>
                  </div>
                  <span className="text-xs font-semibold text-primary-blue bg-blue-50 px-2.5 py-1 rounded-md">
                    Total: $84.5M Spend
                  </span>
                </div>

                <div className="mt-6 space-y-5">
                  {spendCategories.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-xs sm:text-sm font-semibold">
                        <span className="text-navy">{item.category}</span>
                        <div className="space-x-3 text-right">
                          <span className="font-mono text-slate-700">{item.spend}</span>
                          <span className="text-emerald-600 font-medium text-xs">({item.savings} saved)</span>
                        </div>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct * 2.2}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                          className="bg-primary-blue h-2.5 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 5 Cols: Real-Time Audit & Activity Feed */}
              <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-navy">Real-Time Audit Trail</h3>
                  <div className="flex items-center space-x-1.5 text-xs text-emerald-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Stream</span>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {recentActivities.map((act, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3"
                    >
                      <div className="mt-0.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${act.color}`}>
                          {act.badge}
                        </span>
                      </div>
                      <div className="flex-1 text-xs">
                        <p className="text-slate-800 leading-snug">{act.text}</p>
                        <span className="text-[10px] text-slate-400 mt-1 block font-mono">{act.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Project & Portfolio Management Cockpit View */
            <motion.div
              key="project-portfolio"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left 7 Cols: Portfolio Project Cards */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-bold text-navy">Active Enterprise Sourcing Workstreams</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Cross-functional milestone and deliverable health</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    42 Active Projects
                  </span>
                </div>

                <div className="space-y-4">
                  {projectPortfolio.map((proj, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.1 }}
                      className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-subtle transition-all"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="text-sm font-bold text-navy">{proj.name}</div>
                          <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                            <span>Phase: {proj.phase}</span>
                            <span>•</span>
                            <span>Lead: {proj.lead}</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                          {proj.status}
                        </span>
                      </div>

                      <div className="space-y-1 mt-3">
                        <div className="flex justify-between text-xs font-semibold text-slate-600">
                          <span>Milestone Completion</span>
                          <span className="font-mono text-navy">{proj.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${proj.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.1 + idx * 0.1, ease: 'easeOut' }}
                            className={`h-2 rounded-full ${proj.color}`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right 5 Cols: Risk Radar & Compliance Interlock */}
              <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-5">
                <div className="pb-4 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-navy">Sourcing & Engineering Risk Radar</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Automated risk mitigation matrix across milestones</p>
                </div>

                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-emerald-900 mb-1">
                      <span>BOM Synchronization Risk</span>
                      <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded text-emerald-800">LOW</span>
                    </div>
                    <p className="text-emerald-800 text-[11px]">
                      ECR CAD models validated against ERP inventory numbers with 0 discrepancies.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-blue-900 mb-1">
                      <span>Vendor Capacity SLA Risk</span>
                      <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded text-blue-800">MANAGED</span>
                    </div>
                    <p className="text-blue-800 text-[11px]">
                      Top 3 suppliers confirmed dual-shift tool capacity for Q1 production spikes.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-purple-900 mb-1">
                      <span>Contractual Liability Interlock</span>
                      <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded text-purple-800">SECURE</span>
                    </div>
                    <p className="text-purple-800 text-[11px]">
                      Automated legal clause library guarantees mandatory indemnification on all awarded POs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
