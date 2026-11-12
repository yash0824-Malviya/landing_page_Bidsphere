import React, { useState } from 'react';
import { motion, AnimatePresence } from '../animations/motion-shim';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Cpu,
  Users,
  ChevronRight,
  Clock,
  Briefcase,
  AlertTriangle,
  FileCheck2,
  Calendar,
  Kanban
} from 'lucide-react';
import { MagneticButton, AnimatedCounter } from './common/MotionComponents';
import { springGentle, transitionSmooth } from '../animations/variants';

interface HeroProps {
  onRequestDemo: () => void;
}

export const Hero = ({ onRequestDemo }: HeroProps) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'ai' | 'supplier' | 'clm' | 'project'>('dashboard');

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F0F4FA] via-white to-brand-bg">
      {/* Background Decorative Grid & Subtle Moving Gradient Blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(#146ce8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
      
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-48 left-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Product Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-subtle hover:border-primary-blue/50 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-primary-blue animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-navy">
              Enterprise Procurement & Strategic Sourcing Platform
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-primary-blue font-medium flex items-center">
              Netlink Software Flagship
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </motion.div>

        {/* Hero Title & Subtitle with Staggered Entrance */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-[1.15]"
          >
            Transform Procurement Into a{' '}
            <span className="bg-gradient-to-r from-primary-blue via-[#0D56C0] to-[#074868] bg-clip-text text-transparent">
              Strategic Business Advantage.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            BidSphere brings every stage of procurement together — from business intake and engineering approvals
            to strategic sourcing, supplier collaboration, AI-powered recommendations and contract management.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <MagneticButton
              onClick={onRequestDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-primary-blue hover:bg-primary-blue-600 active:scale-[0.99] rounded-xl shadow-card hover:shadow-card-hover transition-all group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <a
              href="#platform"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-subtle hover:border-slate-300 transition-all hover:scale-[1.01]"
            >
              <span>Explore Platform</span>
            </a>
          </motion.div>

          {/* Value Props Strip with Floating Micro-Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium"
          >
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero Department Head Rule Compliant</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>AI Weighted Sourcing (35% Price / 30% Reliability)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-primary-blue" />
              <span>Integrated CLM & Dual E-Sign</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Interactive Procurement Cockpit Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 max-w-6xl mx-auto"
        >
          {/* Laptop / Browser Mockup Shell */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-premium overflow-hidden transition-all">
            {/* Browser Header Bar */}
            <div className="bg-slate-900 text-slate-400 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline-block">
                  https://bidsphere.netlink.com/portal/enterprise-cockpit
                </span>
              </div>

              {/* View Switcher Tabs with Animated Spring Highlights */}
              <div className="flex items-center space-x-1 bg-slate-800/80 p-0.5 rounded-lg text-xs overflow-x-auto max-w-[65%] sm:max-w-none">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`relative px-3 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'dashboard' ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {activeTab === 'dashboard' && (
                    <motion.div
                      layoutId="hero-tab-pill"
                      className="absolute inset-0 bg-primary-blue rounded-md shadow-sm -z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Command Hub</span>
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`relative px-3 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'ai' ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {activeTab === 'ai' && (
                    <motion.div
                      layoutId="hero-tab-pill"
                      className="absolute inset-0 bg-primary-blue rounded-md shadow-sm -z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">AI Evaluator</span>
                </button>
                <button
                  onClick={() => setActiveTab('supplier')}
                  className={`relative px-3 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'supplier' ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {activeTab === 'supplier' && (
                    <motion.div
                      layoutId="hero-tab-pill"
                      className="absolute inset-0 bg-primary-blue rounded-md shadow-sm -z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Supplier Portal</span>
                </button>
                <button
                  onClick={() => setActiveTab('clm')}
                  className={`relative px-3 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'clm' ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {activeTab === 'clm' && (
                    <motion.div
                      layoutId="hero-tab-pill"
                      className="absolute inset-0 bg-primary-blue rounded-md shadow-sm -z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">CLM & E-Sign</span>
                </button>
                <button
                  onClick={() => setActiveTab('project')}
                  className={`relative px-3 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'project' ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {activeTab === 'project' && (
                    <motion.div
                      layoutId="hero-tab-pill"
                      className="absolute inset-0 bg-primary-blue rounded-md shadow-sm -z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Project Mgmt</span>
                </button>
              </div>
            </div>

            {/* Dashboard Content Display with AnimatePresence */}
            <div className="p-4 sm:p-6 bg-brand-bg min-h-[440px]">
              <AnimatePresence mode="wait">
                {/* TAB 1: EXECUTIVE COMMAND HUB */}
                {activeTab === 'dashboard' && (
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    {/* Top Metric Cards with Animated KPI Counters */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-subtle hover:border-primary-blue/40 transition-colors">
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Managed Spend</div>
                        <div className="text-2xl font-bold text-navy mt-1">
                          <AnimatedCounter value="$84,520,000" />
                        </div>
                        <div className="text-[11px] text-emerald-600 font-medium flex items-center mt-1">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          <span>+$4.8M Sourcing Savings (12.4%)</span>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-subtle hover:border-primary-blue/40 transition-colors">
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Active RFQs</div>
                        <div className="text-2xl font-bold text-primary-blue mt-1">
                          <AnimatedCounter value="128 Live" />
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1">14 Category Clusters</div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-subtle hover:border-primary-blue/40 transition-colors">
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Pending Approvals</div>
                        <div className="text-2xl font-bold text-amber-600 mt-1">
                          <AnimatedCounter value="14 Pending" />
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1">Zero Dept Head Rule Applied</div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-subtle hover:border-primary-blue/40 transition-colors">
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Verified Suppliers</div>
                        <div className="text-2xl font-bold text-navy mt-1">
                          <AnimatedCounter value="482 Active" />
                        </div>
                        <div className="text-[11px] text-emerald-600 font-medium mt-1">98.2% Compliance Rate</div>
                      </div>
                    </div>

                    {/* Main Work Area Preview */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {/* Left: Active RFQ & Tender Pipeline */}
                      <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-4 shadow-subtle">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <div className="flex items-center space-x-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <h4 className="text-sm font-semibold text-navy">Priority Strategic Sourcing Pipeline</h4>
                          </div>
                          <span className="text-xs text-primary-blue font-medium hover:underline cursor-pointer">
                            View All 128 Tenders
                          </span>
                        </div>

                        <div className="mt-3 divide-y divide-slate-100">
                          <div className="py-2.5 flex items-center justify-between hover:bg-slate-50/60 px-2 rounded-lg transition-colors">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-bold text-navy">PUR-RFQ-2026-00091</span>
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  AI Evaluated
                                </span>
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5">Heavy Casting Components — 3 Quotations Received</div>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-bold text-navy">$450,000 Target</span>
                              <div className="text-[10px] text-emerald-600 font-medium">Rank 1: FEMSA (100 pts)</div>
                            </div>
                          </div>

                          <div className="py-2.5 flex items-center justify-between hover:bg-slate-50/60 px-2 rounded-lg transition-colors">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-bold text-navy">PUR-RFQ-2026-00098</span>
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                                  Reverse Auction
                                </span>
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5">Precision Machined Titanium Shafts — 5 Bidders</div>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-bold text-navy">$1,280,000 Est.</span>
                              <div className="text-[10px] text-blue-600 font-medium">Closes in 02h 45m</div>
                            </div>
                          </div>

                          <div className="py-2.5 flex items-center justify-between hover:bg-slate-50/60 px-2 rounded-lg transition-colors">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-bold text-navy">ECR-2026-00042</span>
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                                  Engineering ECR
                                </span>
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5">Hydraulic Valve Spec Revision — BOM Synchronized</div>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-bold text-navy">Approved</span>
                              <div className="text-[10px] text-indigo-600 font-medium">Ready for RFQ Release</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Quick Action Cards */}
                      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-subtle flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-navy mb-3 flex items-center">
                            <ShieldCheck className="w-4 h-4 text-primary-blue mr-1.5" />
                            Governance & Approvals
                          </h4>
                          <div className="space-y-2.5 text-xs">
                            <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/80">
                              <div className="font-semibold text-amber-900 flex items-center justify-between">
                                <span>BC-2026-081 Capex Review</span>
                                <span className="text-[10px] font-mono bg-white px-1 py-0.5 rounded">ROI 24.8%</span>
                              </div>
                              <div className="text-slate-600 text-[11px] mt-0.5">Finance lead approval pending for $320,000 investment.</div>
                            </div>

                            <div className="p-2.5 rounded-lg bg-purple-50/70 border border-purple-200/80">
                              <div className="font-semibold text-purple-900 flex items-center justify-between">
                                <span>CON-2026-019 E-Signature</span>
                                <span className="text-[10px] font-mono bg-white px-1 py-0.5 rounded">CLM Ready</span>
                              </div>
                              <div className="text-slate-600 text-[11px] mt-0.5">Supplier counter-signature awaiting executive counter-sign.</div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                          <span>Zero Dept Head Rule:</span>
                          <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                            Direct Executive Sanction
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: AI RECOMMENDATION ENGINE */}
                {activeTab === 'ai' && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                            AI SCORING ENGINE
                          </span>
                          <span className="text-xs text-slate-500">RFQ: PUR-RFQ-2026-00091 (Heavy Machined Components)</span>
                        </div>
                        <div className="text-sm font-semibold text-navy mt-1">
                          Evaluation Formula: Price (35%) + Supplier Reliability (30%) + Delivery Performance (25%) + Quotation Completeness (10%)
                        </div>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                        Recommendation Mode: Human Decision Support
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-50 text-slate-600 uppercase font-semibold border-b border-slate-200">
                            <tr>
                              <th className="px-4 py-3">Rank</th>
                              <th className="px-4 py-3">Supplier Name</th>
                              <th className="px-4 py-3">Price (35%)</th>
                              <th className="px-4 py-3">Delivery (25%)</th>
                              <th className="px-4 py-3">Reliability (30%)</th>
                              <th className="px-4 py-3">Completeness (10%)</th>
                              <th className="px-4 py-3">Overall Score</th>
                              <th className="px-4 py-3">Risk Tier</th>
                              <th className="px-4 py-3">Verdict</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            <tr className="bg-blue-50/40">
                              <td className="px-4 py-3 font-bold text-primary-blue">#1</td>
                              <td className="px-4 py-3 font-semibold text-navy">FEMSA Industrial Supply</td>
                              <td className="px-4 py-3 font-mono font-medium">100 / 100</td>
                              <td className="px-4 py-3 font-mono font-medium">100 / 100</td>
                              <td className="px-4 py-3 font-mono font-medium">100 / 100</td>
                              <td className="px-4 py-3 font-mono font-medium">100 / 100</td>
                              <td className="px-4 py-3 font-bold text-emerald-600 font-mono text-sm">100.0</td>
                              <td className="px-4 py-3">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                  Low Risk
                                </span>
                              </td>
                              <td className="px-4 py-3 font-bold text-emerald-700">BEST VALUE</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-bold text-slate-500">#2</td>
                              <td className="px-4 py-3 font-semibold text-navy">Titan Industrial Products LLC</td>
                              <td className="px-4 py-3 font-mono">100 / 100</td>
                              <td className="px-4 py-3 font-mono">92 / 100</td>
                              <td className="px-4 py-3 font-mono">98 / 100</td>
                              <td className="px-4 py-3 font-mono">100 / 100</td>
                              <td className="px-4 py-3 font-bold text-navy font-mono text-sm">97.4</td>
                              <td className="px-4 py-3">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                  Low Risk
                                </span>
                              </td>
                              <td className="px-4 py-3 font-semibold text-blue-700">GOOD OPTION</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-bold text-slate-500">#3</td>
                              <td className="px-4 py-3 font-semibold text-navy">Eagle Peak Technologies Inc.</td>
                              <td className="px-4 py-3 font-mono">84 / 100</td>
                              <td className="px-4 py-3 font-mono">78 / 100</td>
                              <td className="px-4 py-3 font-mono">88 / 100</td>
                              <td className="px-4 py-3 font-mono">90 / 100</td>
                              <td className="px-4 py-3 font-bold text-slate-700 font-mono text-sm">84.3</td>
                              <td className="px-4 py-3">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                                  Medium Risk
                                </span>
                              </td>
                              <td className="px-4 py-3 font-medium text-slate-600">GOOD OPTION</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: SUPPLIER PORTAL PREVIEW */}
                {activeTab === 'supplier' && (
                  <motion.div
                    key="supplier"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img src="/netlink-logo.png" alt="Netlink Logo" className="h-6 w-auto" />
                        <span className="text-xs font-bold text-navy">BidSphere Supplier Collaboration Portal</span>
                      </div>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        ● Live Connected Vendor: FEMSA Industrial
                      </span>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-subtle">
                      <img
                        src="/supplier-dashboard-desktop.png"
                        alt="BidSphere Real Supplier Portal"
                        className="w-full h-auto object-cover max-h-[380px]"
                      />
                    </div>
                  </motion.div>
                )}

                {/* TAB 4: CLM CONTRACT & E-SIGN */}
                {activeTab === 'clm' && (
                  <motion.div
                    key="clm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-navy">Contract Lifecycle Management (CLM)</div>
                        <div className="text-[11px] text-slate-500">CON-2026-0042 — Master Supply Agreement linked to PUR-RFQ-00091</div>
                      </div>
                      <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                        Dual Cryptographic Signatures Active
                      </span>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-subtle">
                      <img
                        src="/supplier-contract-acceptance-ready.png"
                        alt="BidSphere Contract E-Sign Interface"
                        className="w-full h-auto object-cover max-h-[380px]"
                      />
                    </div>
                  </motion.div>
                )}

                {/* TAB 5: NETLINK ENTERPRISE PROJECT MANAGEMENT (Section 9 & 15E) */}
                {activeTab === 'project' && (
                  <motion.div
                    key="project"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    {/* Project Header Bar */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-subtle">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                          <Kanban className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy">Enterprise Project & Sourcing Delivery Suite</div>
                          <div className="text-xs text-slate-500">Cross-functional milestone tracking, Gantt timeline & vendor SLA governance</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                          Portfolio Health: 94% On-Track
                        </span>
                      </div>
                    </div>

                    {/* Gantt Timeline & Milestone Drawing Animation */}
                    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-subtle space-y-3">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pb-2 border-b border-slate-100">
                        <span>Milestone / Workstream</span>
                        <span>Phase Duration & Critical Path</span>
                        <span>Status</span>
                      </div>

                      {/* Milestone 1 */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-navy">1. Spec Freeze & ECR CAD Validation</span>
                          <span className="text-slate-500 font-mono text-[11px]">Weeks 1 - 2</span>
                          <span className="text-[11px] font-bold text-emerald-600">Completed (100%)</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full bg-emerald-500 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Milestone 2 */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-navy">2. Sealed RFQ & Reverse Auction Showdown</span>
                          <span className="text-slate-500 font-mono text-[11px]">Weeks 3 - 4</span>
                          <span className="text-[11px] font-bold text-primary-blue">In Progress (85%)</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '85%' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                            className="h-full bg-primary-blue rounded-full"
                          />
                        </div>
                      </div>

                      {/* Milestone 3 */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-navy">3. Dual E-Sign Contract Execution & ERP Sync</span>
                          <span className="text-slate-500 font-mono text-[11px]">Weeks 5 - 6</span>
                          <span className="text-[11px] font-bold text-amber-600">Scheduled (40%)</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '40%' }}
                            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                            className="h-full bg-amber-500 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Milestone 4 */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-navy">4. GRN Receiving & 3-Way Match Settlement</span>
                          <span className="text-slate-500 font-mono text-[11px]">Weeks 7 - 8</span>
                          <span className="text-[11px] font-bold text-slate-400">Planned</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '10%' }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                            className="h-full bg-slate-300 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Status Ribbon */}
            <div className="bg-slate-50 px-4 sm:px-6 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                  System Operational (99.98% SLA)
                </span>
                <span className="hidden sm:inline-block text-slate-300">•</span>
                <span className="hidden sm:inline-block">Real Production Engine Preview</span>
              </div>
              <div 
                className="text-primary-blue font-semibold hover:underline cursor-pointer flex items-center" 
                onClick={onRequestDemo}
              >
                <span>Book Guided Architecture Walkthrough</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise Logos & Trust Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-200/70"
        >
          <p className="text-center text-xs font-semibold tracking-wider text-slate-500 uppercase mb-6">
            Engineered by Netlink Software • Powering Enterprise Supply Chains Globally
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center space-x-2 text-slate-700 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-primary-blue" />
              <span>SOC-2 TYPE II READY</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-700 font-bold text-sm">
              <Cpu className="w-5 h-5 text-primary-blue" />
              <span>25+ YEARS NETLINK ENGINEERING</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-700 font-bold text-sm">
              <Layers className="w-5 h-5 text-primary-blue" />
              <span>ERP & SAP INTEGRATION READY</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-700 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-primary-blue" />
              <span>ZERO DEPT HEAD COMPLIANT</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
