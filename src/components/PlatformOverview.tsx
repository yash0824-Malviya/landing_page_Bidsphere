import React from 'react';
import { 
  Network, 
  Cpu, 
  BarChart4, 
  Sparkles, 
  FileCheck, 
  Workflow, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

export const PlatformOverview: React.FC = () => {
  const pillars = [
    {
      icon: Network,
      title: 'Unified Intake & Demand Orchestration',
      description: 'Replace fragmented emails and spreadsheets with a single, governed digital intake gateway that categorizes, scores, and routes requisitions instantly.',
      features: ['Contextual Requisition Portals', 'Automated Triage Queues', 'Zero Shadow Spend Guarantee'],
      accent: 'border-blue-200 hover:border-primary-blue/60 group'
    },
    {
      icon: Cpu,
      title: 'Engineering & ECR Integration',
      description: 'Bridge engineering teams and sourcing before contracts are drafted. Validate CAD revisions, BOM specs, and technical feasibility upfront.',
      features: ['Parametric Drawing Vault', 'BOM Impact Analysis', 'Direct Sourcing Transition'],
      accent: 'border-indigo-200 hover:border-indigo-500/60 group'
    },
    {
      icon: BarChart4,
      title: 'Financial Governance & Business Cases',
      description: 'Ensure every procurement dollar delivers verifiable ROI. Automated models compute CAPEX, OPEX, Expected Savings, NPV, IRR, and Cash Flows.',
      features: ['Dynamic DCF Capital Models', 'Payback Period Tracking', 'Pre-Commitment Finance Sign-off'],
      accent: 'border-emerald-200 hover:border-emerald-500/60 group'
    },
    {
      icon: Sparkles,
      title: 'AI Multi-Criteria Supplier Intelligence',
      description: 'Proprietary multi-factor recommendation engine evaluates price (35%), reliability (30%), delivery (25%), and completeness (10%) with risk stratification.',
      features: ['Explainable Transparent Scoring', 'Tri-Level Risk Stratification', 'Human-in-the-Loop Decision Support'],
      accent: 'border-amber-200 hover:border-amber-500/60 group'
    },
    {
      icon: FileCheck,
      title: 'Integrated Contract Lifecycle (CLM)',
      description: 'Convert awarded bids into enforceable contracts with standardized clause templates, legal redlining, automated approval routing, and dual e-signatures.',
      features: ['Automated RFQ-to-Contract Binding', 'Dual Cryptographic E-Signatures', 'Searchable Master Repository'],
      accent: 'border-purple-200 hover:border-purple-500/60 group'
    },
    {
      icon: Workflow,
      title: 'Purchasing, GRN & 3-Way Reconciliation',
      description: 'Connect procurement to fulfillment. Track dispatch, generate digital Goods Receipt Notes (GRN), and perform automated 3-way matching before release.',
      features: ['Line-Item PO Tracking', 'Warehouse Dock Receipt & Inspection', 'Automated 3-Way Match Audit'],
      accent: 'border-teal-200 hover:border-teal-500/60 group'
    }
  ];

  return (
    <section id="platform" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-xs font-semibold uppercase tracking-wider border border-blue-200/80">
            <span>Platform Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Everything Your Procurement Team Needs.{' '}
            <span className="text-primary-blue">In One Platform.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            BidSphere connects business stakeholders, procurement professionals, finance teams,
            engineering teams and suppliers through a unified procurement ecosystem.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`bg-brand-bg/60 p-7 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-card-hover hover:bg-white flex flex-col justify-between ${pillar.accent}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-subtle flex items-center justify-center text-primary-blue mb-5 group-hover:scale-105 group-hover:bg-primary-blue group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary-blue transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 space-y-2.5">
                  {pillar.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center text-xs font-medium text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-2 flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Architecture Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy via-navy-800 to-deep-navy text-white shadow-premium flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase font-semibold tracking-wider text-primary-blue-200">
              Zero Department Head Rule Enforced
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Eliminate Bureaucracy Without Compromising Compliance
            </h3>
            <p className="text-sm text-slate-300">
              BidSphere enforces direct, cross-functional accountability between demand owners, engineering,
              finance, and executive approvers — removing redundant department head bottlenecks while elevating fiscal transparency.
            </p>
          </div>
          <a
            href="#lifecycle"
            className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white text-navy font-semibold text-sm hover:bg-slate-100 transition-colors shadow-sm"
          >
            <span>Explore Lifecycle Flow</span>
            <ArrowUpRight className="w-4 h-4 text-primary-blue" />
          </a>
        </div>
      </div>
    </section>
  );
};

