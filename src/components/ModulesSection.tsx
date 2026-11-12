import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from '../animations/motion-shim';
import { modulesData } from '../data/modulesData';
import { ModuleItem } from '../types';
import { 
  Inbox, 
  Wrench, 
  TrendingUp, 
  Scale, 
  Users, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  PackageCheck, 
  BarChart3, 
  Check, 
  ArrowRight, 
  X, 
  ChevronRight, 
  Layers, 
  Sliders 
} from 'lucide-react';
import { ScrollReveal } from './common/MotionComponents';

// Icon Map helper
const iconMap: Record<string, React.ElementType> = {
  Inbox,
  Wrench,
  TrendingUp,
  Scale,
  Users,
  Sparkles,
  FileText,
  ShieldCheck,
  PackageCheck,
  BarChart3,
};

export const ModulesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedModalModule, setSelectedModalModule] = useState<ModuleItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedModalModule(null);
      }
    };
    if (selectedModalModule) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedModalModule]);

  const categories = [
    { id: 'all', label: 'All 10 Modules' },
    { id: 'intake', label: 'Intake & Engineering' },
    { id: 'sourcing', label: 'Sourcing & Suppliers' },
    { id: 'finance', label: 'Finance & CLM' },
    { id: 'execution', label: 'Execution & Receiving' },
    { id: 'command', label: 'Command Center' },
  ];

  const filteredModules = selectedCategory === 'all'
    ? modulesData
    : modulesData.filter((m) => {
        if (selectedCategory === 'intake') return m.category === 'intake';
        if (selectedCategory === 'sourcing') return m.category === 'sourcing';
        if (selectedCategory === 'finance') return m.category === 'finance';
        if (selectedCategory === 'execution') return m.category === 'execution';
        if (selectedCategory === 'command') return m.category === 'command';
        return true;
      });

  // Helper for 3 key capabilities per card
  const getCardCapabilities = (module: ModuleItem): string[] => {
    if (module.id === 'module-06') {
      return [
        'Intelligent Supplier Ranking algorithm',
        'Weighted Multi-Factor Scoring (35/25/30/10)',
        'Continuous Supplier Risk & SLA Assessment'
      ];
    }
    return module.capabilities.slice(0, 3);
  };

  // Determine grid container layout based on item count to avoid isolated orphan cards
  const getGridClasses = () => {
    if (filteredModules.length === 1) {
      return 'max-w-xl mx-auto w-full';
    }
    if (filteredModules.length === 2) {
      return 'grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full items-stretch';
    }
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch';
  };

  const isAllSelected = selectedCategory === 'all';

  return (
    <section id="modules" className="py-12 md:py-16 bg-[#F5F7FB] relative border-t border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-9">
          <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-primary-blue text-[11px] font-semibold uppercase tracking-wider border border-blue-200/80">
            <span>Modular Enterprise Suite</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-[#0F1B36] tracking-tight">
            Complete BidSphere Modules
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Ten fully integrated modules designed to eliminate process fragmentation and deliver end-to-end governance across the enterprise procurement lifecycle.
          </p>

          {/* Compact Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-[#0F1B36] text-white shadow-xs ring-1 ring-[#0F1B36]'
                      : 'bg-white text-slate-600 hover:text-[#0F1B36] border border-slate-200/90 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Responsive Grid with Equal Height Cards & Balanced Last Row */}
        <div className={getGridClasses()}>
          {filteredModules.map((module) => {
            const IconComponent = iconMap[module.icon] || Layers;
            const topCapabilities = getCardCapabilities(module);

            // Special executive capstone banner for Module 10 when displaying All 10 Modules
            // This eliminates the isolated 4th-row orphan card and creates a balanced, premium finish
            if (isAllSelected && module.id === 'module-10') {
              return (
                <div
                  key={module.id}
                  className="group relative col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-white via-blue-50/25 to-white rounded-2xl border border-blue-200/90 p-5 sm:p-6 shadow-[0_2px_8px_rgba(15,27,54,0.04)] hover:shadow-[0_8px_24px_rgba(20,108,232,0.08)] hover:border-primary-blue/60 transition-all duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                    {/* Left: Icon, Number, Title & Purpose */}
                    <div className="lg:max-w-md xl:max-w-lg space-y-2">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-10 h-10 rounded-xl bg-primary-blue text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-primary-blue/30 group-hover:scale-105 transition-transform duration-200">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-mono font-bold text-primary-blue">
                              MODULE {module.number}
                            </span>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-100/70 text-primary-blue border border-blue-200">
                              {module.badge}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-[#0F1B36] leading-snug group-hover:text-primary-blue transition-colors">
                            {module.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-600 line-clamp-2 leading-relaxed">
                        {module.purpose}
                      </p>
                    </div>

                    {/* Middle: 3 Key Capabilities in a clean vertical stack */}
                    <div className="space-y-1.5 border-y lg:border-y-0 lg:border-x border-slate-200/70 py-3 lg:py-0 lg:px-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Executive Capabilities
                      </span>
                      {topCapabilities.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-2.5 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => setSelectedModalModule(module)}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-primary-blue hover:bg-blue-700 text-white font-semibold text-xs shadow-sm shadow-primary-blue/20 transition-all hover:scale-[1.01]"
                      >
                        <span>Explore Command Center</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </button>
                      <a
                        href="#lifecycle"
                        className="text-xs font-medium text-slate-500 hover:text-primary-blue flex items-center gap-1 transition-colors"
                      >
                        <span>View in 17-Step Lifecycle</span>
                        <ChevronRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            // Standard Compact Module Card (Modules 01 - 09, or filtered views)
            return (
              <div 
                key={module.id}
                className="group relative bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between shadow-[0_2px_8px_rgba(15,27,54,0.04)] hover:shadow-[0_8px_20px_rgba(20,108,232,0.08)] hover:border-primary-blue/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div>
                  {/* Card Header: Icon, Number, Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-200 flex-shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {module.number}
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60 truncate max-w-[140px]">
                      {module.badge}
                    </span>
                  </div>

                  {/* Module Title (Max 2 lines, uniform height) */}
                  <h3 className="text-base font-bold text-[#0F1B36] group-hover:text-primary-blue transition-colors line-clamp-2 min-h-[2.75rem] flex items-center mb-1.5 leading-snug">
                    {module.title}
                  </h3>

                  {/* Module Description (Max 2 lines, clean ellipsis) */}
                  <p className="text-xs text-slate-600 line-clamp-2 min-h-[2rem] leading-relaxed mb-3">
                    {module.purpose}
                  </p>

                  {/* 3 Key Capabilities with Checkmarks */}
                  <div className="space-y-1.5 mb-4">
                    {topCapabilities.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Aligned at Bottom */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedModalModule(module)}
                    className="inline-flex items-center font-semibold text-primary-blue hover:text-navy group/link transition-colors focus:outline-none"
                  >
                    <span>Explore Module</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5" />
                  </button>

                  <a
                    href="#lifecycle"
                    className="text-slate-400 hover:text-primary-blue flex items-center gap-0.5 transition-colors"
                  >
                    <span>View Workflow</span>
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Polished Enterprise Module Detail Modal */}
        <AnimatePresence>
          {selectedModalModule && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-[#0F1B36]/60 backdrop-blur-sm transition-opacity"
                onClick={() => setSelectedModalModule(null)}
                aria-hidden="true"
              />

              {/* Modal Box */}
              <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
                
                {/* Modal Header */}
                <div className="bg-[#0F1B36] text-white p-6 flex items-start justify-between">
                  <div className="flex items-center space-x-3.5">
                    {(() => {
                      const IconComp = iconMap[selectedModalModule.icon] || Layers;
                      return (
                        <div className="w-12 h-12 rounded-2xl bg-primary-blue/30 border border-primary-blue/40 flex items-center justify-center text-white flex-shrink-0">
                          <IconComp className="w-6 h-6" />
                        </div>
                      );
                    })()}
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                          Module {selectedModalModule.number}
                        </span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                          {selectedModalModule.badge}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                        {selectedModalModule.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedModalModule(null)}
                    className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors focus:outline-none"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  
                  {/* Detailed Description */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Module Scope & Objective
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/70">
                      {selectedModalModule.purpose}
                    </p>
                  </div>

                  {/* Special AI Evaluation Section for Module 06 */}
                  {selectedModalModule.id === 'module-06' && (
                    <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-4">
                      <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm">
                        <Sliders className="w-4 h-4 text-amber-600" />
                        <span>Weighted Scoring Algorithm Model</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                        <div className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-xs">
                          <span className="text-xs text-slate-500 font-medium block">Price Weight</span>
                          <span className="text-lg font-extrabold text-[#0F1B36]">35%</span>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-xs">
                          <span className="text-xs text-slate-500 font-medium block">Delivery Lead</span>
                          <span className="text-lg font-extrabold text-[#0F1B36]">25%</span>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-xs">
                          <span className="text-xs text-slate-500 font-medium block">Reliability</span>
                          <span className="text-lg font-extrabold text-[#0F1B36]">30%</span>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-xs">
                          <span className="text-xs text-slate-500 font-medium block">Completeness</span>
                          <span className="text-lg font-extrabold text-[#0F1B36]">10%</span>
                        </div>
                      </div>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Suppliers are scored automatically upon RFQ quotation submission. Risk classifications (Low, Medium, High) dynamically flag SLA anomalies before purchase awards.
                      </p>
                    </div>
                  )}

                  {/* All Capabilities Checklist */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Complete Technical & Functional Capabilities ({selectedModalModule.capabilities.length})
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedModalModule.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start text-xs sm:text-sm text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                          <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics / Impact Statistics */}
                  {selectedModalModule.metrics && selectedModalModule.metrics.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Operational Benchmarks & Impact Metrics
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {selectedModalModule.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-center">
                            <span className="text-base sm:text-lg font-extrabold text-[#0F1B36] block">
                              {metric.value}
                            </span>
                            <span className="text-[11px] font-semibold text-primary-blue block">
                              {metric.label}
                            </span>
                            {metric.helper && (
                              <span className="text-[10px] text-slate-500 block mt-0.5">
                                {metric.helper}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Strategic Governance Note */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-start space-x-3 text-xs sm:text-sm text-slate-600">
                    <ShieldCheck className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F1B36]">Direct Governance Enforcement: </span>
                      <span>
                        Adheres strictly to the Zero Department Head policy. Requisitions pass directly from business intakes through Finance and Procurement reviews into direct Executive Authorization.
                      </span>
                    </div>
                  </div>

                </div>

                {/* Modal Footer */}
                <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="#lifecycle"
                    onClick={() => setSelectedModalModule(null)}
                    className="inline-flex items-center text-xs sm:text-sm font-semibold text-primary-blue hover:text-navy transition-colors"
                  >
                    <span>View Stage in 17-Step Procurement Lifecycle</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedModalModule(null)}
                    className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#0F1B36] text-white hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Close Specs
                  </button>
                </div>

              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
