import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Cpu, 
  BarChart4, 
  Sparkles, 
  FileCheck, 
  Workflow, 
  Check, 
  ArrowRight,
  ArrowUpRight 
} from 'lucide-react';
import { SpotlightCard, ScrollReveal } from './common/MotionComponents';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const PlatformOverview = () => {
  const pillars = [
    {
      icon: Network,
      title: 'Unified Intake & Demand Orchestration',
      description: 'Replace fragmented emails and spreadsheets with a single, governed digital intake gateway that categorizes, scores, and routes requisitions instantly.',
      features: ['Contextual Requisition Portals', 'Automated Triage Queues', 'Zero Shadow Spend Guarantee'],
      accent: 'border-blue-200/80 hover:border-primary-blue/60 group',
      target: '#modules'
    },
    {
      icon: Cpu,
      title: 'Engineering & ECR Integration',
      description: 'Bridge engineering teams and sourcing before contracts are drafted. Validate CAD revisions, BOM specs, and technical feasibility upfront.',
      features: ['Parametric Drawing Vault', 'BOM Impact Analysis', 'Direct Sourcing Transition'],
      accent: 'border-indigo-200/80 hover:border-indigo-500/60 group',
      target: '#modules'
    },
    {
      icon: BarChart4,
      title: 'Financial Governance & Business Cases',
      description: 'Ensure every procurement dollar delivers verifiable ROI. Automated models compute CAPEX, OPEX, Expected Savings, NPV, IRR, and Cash Flows.',
      features: ['Dynamic DCF Capital Models', 'Payback Period Tracking', 'Pre-Commitment Finance Sign-off'],
      accent: 'border-emerald-200/80 hover:border-emerald-500/60 group',
      target: '#modules'
    },
    {
      icon: Sparkles,
      title: 'AI Multi-Criteria Supplier Intelligence',
      description: 'Proprietary multi-factor recommendation engine evaluates price (35%), reliability (30%), delivery (25%), and completeness (10%) with risk stratification.',
      features: ['Explainable Transparent Scoring', 'Tri-Level Risk Stratification', 'Human-in-the-Loop Decision Support'],
      accent: 'border-amber-200/80 hover:border-amber-500/60 group',
      target: '#ai-intelligence'
    },
    {
      icon: FileCheck,
      title: 'Integrated Contract Lifecycle (CLM)',
      description: 'Convert awarded bids into enforceable contracts with standardized clause templates, legal redlining, automated approval routing, and dual e-signatures.',
      features: ['Automated RFQ-to-Contract Binding', 'Dual Cryptographic E-Signatures', 'Searchable Master Repository'],
      accent: 'border-purple-200/80 hover:border-purple-500/60 group',
      target: '#modules'
    },
    {
      icon: Workflow,
      title: 'Purchasing, GRN & 3-Way Reconciliation',
      description: 'Connect procurement to fulfillment. Track dispatch, generate digital Goods Receipt Notes (GRN), and perform automated 3-way matching before release.',
      features: ['Line-Item PO Tracking', 'Warehouse Dock Receipt & Inspection', 'Automated 3-Way Match Audit'],
      accent: 'border-teal-200/80 hover:border-teal-500/60 group',
      target: '#lifecycle'
    }
  ];

  return (
    <section id="platform" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
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
        </ScrollReveal>

        {/* 6 Core Pillars Grid with Staggered Scroll Reveal and Spotlight Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <SpotlightCard
                  className={`h-full bg-brand-bg/60 p-7 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-card-hover hover:bg-white flex flex-col justify-between ${pillar.accent}`}
                >
                  <div>
                    {/* Icon with interactive spring rotation */}
                    <div className="flex items-center justify-between mb-5">
                      <motion.div 
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                        className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-subtle flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors"
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <a 
                        href={pillar.target}
                        aria-label={`Explore ${pillar.title}`}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg text-slate-400 hover:text-primary-blue hover:bg-blue-50"
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
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
                        <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                    <div className="pt-3 flex items-center text-xs font-semibold text-primary-blue opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore capabilities</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
