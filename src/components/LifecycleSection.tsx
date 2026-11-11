import React, { useState } from 'react';
import { lifecycleSteps } from '../data/lifecycleData';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  FileCheck2, 
  ChevronRight,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  Cpu,
  CornerDownRight,
  Layers
} from 'lucide-react';

export const LifecycleSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(7); // Default on Executive Approval / Zero Dept Head
  const [phaseFilter, setPhaseFilter] = useState<'all' | 'intake' | 'sourcing' | 'fulfillment'>('all');

  const currentStep = lifecycleSteps[activeStepIndex] || lifecycleSteps[0];

  const phases = [
    { id: 'all', label: 'Complete 17-Step Journey' },
    { id: 'intake', label: '1. Demand, ECR & Approvals (Steps 1-8)' },
    { id: 'sourcing', label: '2. RFQ, AI Scoring & Award (Steps 9-15)' },
    { id: 'fulfillment', label: '3. PO, Receiving & Settlement (Steps 16-17)' },
  ];

  const filteredSteps = lifecycleSteps.filter((s) => {
    if (phaseFilter === 'intake') return s.step <= 8;
    if (phaseFilter === 'sourcing') return s.step >= 9 && s.step <= 15;
    if (phaseFilter === 'fulfillment') return s.step >= 16;
    return true;
  });

  return (
    <section id="lifecycle" className="py-20 md:py-28 bg-gradient-to-b from-brand-bg to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-xs font-semibold uppercase tracking-wider border border-blue-200/80">
            <span>End-to-End Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            The Complete Procurement Lifecycle
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A continuous, connected digital journey from initial business need through engineering change,
            financial business case, RFQ, AI scoring, and contract execution to invoice settlement.
          </p>

          {/* Phase Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setPhaseFilter(phase.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  phaseFilter === phase.id
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {phase.label}
              </button>
            ))}
          </div>
        </div>

        {/* Zero Department Head Rule Highlight Banner */}
        <div className="mb-12 p-5 rounded-2xl bg-gradient-to-r from-navy via-[#074868] to-navy text-white shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3.5">
            <div className="p-2 rounded-xl bg-white/10 text-primary-blue-200 flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-base sm:text-lg">Zero Department Head Rule Enforced</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Built-in Workflow Integrity
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-3xl leading-relaxed">
                In strict accordance with the real BidSphere architecture, requisitions flow directly through Finance,
                Legal/Compliance, and Procurement Leads straight to Executive Sign-off — without introducing redundant Department Head approval gates.
              </p>
            </div>
          </div>
          <div className="text-xs text-slate-300 font-mono bg-black/20 px-3 py-2 rounded-lg border border-white/10 flex-shrink-0">
            Gov Rule: Direct Executive Sanction
          </div>
        </div>

        {/* Connected Process Visualizer Ribbon */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 mb-10 overflow-x-auto">
          <div className="min-w-[880px]">
            <div className="flex items-center justify-between relative">
              {/* Connecting Background Line */}
              <div className="absolute top-5 left-6 right-6 h-0.5 bg-slate-200 -z-0" />

              {filteredSteps.map((step, idx) => {
                const isActive = step.step === currentStep.step;
                const isPast = step.step < currentStep.step;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(step.step - 1)}
                    className="relative z-10 flex flex-col items-center group focus:outline-none text-center px-1"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 ${
                        isActive
                          ? 'bg-primary-blue text-white ring-4 ring-blue-100 scale-110 shadow-md'
                          : isPast
                          ? 'bg-emerald-500 text-white'
                          : 'bg-white text-slate-600 border-2 border-slate-300 group-hover:border-primary-blue'
                      }`}
                    >
                      {isPast ? <CheckCircle className="w-5 h-5" /> : step.step}
                    </div>

                    <span
                      className={`text-[11px] font-semibold mt-2.5 max-w-[85px] line-clamp-2 leading-tight ${
                        isActive ? 'text-primary-blue font-bold' : 'text-slate-600 group-hover:text-navy'
                      }`}
                    >
                      {step.title}
                    </span>

                    {step.isCLMConnected && (
                      <span className="mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-purple-100 text-purple-800">
                        CLM
                      </span>
                    )}

                    {step.isZeroDepartmentHead && (
                      <span className="mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">
                        Zero DH
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-premium p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Step Left Overview */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-mono text-xs font-bold">
                  STEP {currentStep.step} OF 17
                </span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${currentStep.ownerBadge}`}>
                  Owner: {currentStep.owner}
                </span>
                <span className="flex items-center text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  Target SLA: {currentStep.sla}
                </span>
                {currentStep.isZeroDepartmentHead && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Zero Department Head Rule
                  </span>
                )}
                {currentStep.isCLMConnected && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
                    Integrated CLM Workflow Branch
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  {currentStep.title}
                </h3>
                <div className="text-xs uppercase tracking-wider text-primary-blue font-bold mt-1">
                  Phase: {currentStep.subtitle}
                </div>
                <p className="text-base text-slate-700 leading-relaxed mt-3">
                  {currentStep.description}
                </p>
              </div>

              {/* Inputs & Outputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-brand-bg border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Required Inputs & Milestones
                  </div>
                  <ul className="space-y-1.5">
                    {currentStep.inputs.map((inp, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-blue mr-2" />
                        <span>{inp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-brand-bg border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Verified Deliverables & Artifacts
                  </div>
                  <ul className="space-y-1.5">
                    {currentStep.outputs.map((out, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-center">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step Right Navigation & Context */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-3">
                  Journey Progress & Navigation
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600 font-medium">
                    <span>Workflow Completion:</span>
                    <span className="font-mono font-bold text-navy">
                      {Math.round((currentStep.step / 17) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-primary-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep.step / 17) * 100}%` }}
                    />
                  </div>
                </div>

                {currentStep.isCLMConnected && (
                  <div className="mt-5 p-3 rounded-lg bg-purple-50 border border-purple-200 text-xs text-purple-900">
                    <div className="font-bold flex items-center mb-1">
                      <CornerDownRight className="w-4 h-4 mr-1 text-purple-700" />
                      CLM Contract Integration
                    </div>
                    <span>
                      When sourcing awards require master supply agreements, BidSphere triggers the CLM workflow:
                      Contract Drafting → Legal Approval → Procurement Sign-off → Dual E-Signature.
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-slate-200">
                <button
                  disabled={currentStep.step === 1}
                  onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                  className="flex-1 py-2 px-3 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Previous Step
                </button>
                <button
                  disabled={currentStep.step === 17}
                  onClick={() => setActiveStepIndex(Math.min(16, activeStepIndex + 1))}
                  className="flex-1 py-2 px-3 rounded-lg bg-primary-blue text-white text-xs font-semibold hover:bg-primary-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

