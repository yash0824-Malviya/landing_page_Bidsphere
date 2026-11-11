import React, { useState } from 'react';
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
  ChevronDown,
  ChevronUp,
  Layers
} from 'lucide-react';

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

export const ModulesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>('module-06'); // Default open AI engine or first module

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

  return (
    <section id="modules" className="py-20 md:py-28 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-xs font-semibold uppercase tracking-wider border border-blue-200/80">
            <span>Modular Enterprise Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Complete BidSphere Modules
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ten fully integrated modules designed to eliminate process fragmentation and provide complete
            transparency across the enterprise procurement lifecycle.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredModules.map((module) => {
            const IconComponent = iconMap[module.icon] || Layers;
            const isExpanded = expandedModuleId === module.id;

            return (
              <div
                key={module.id}
                className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  module.id === 'module-06'
                    ? 'ring-2 ring-primary-blue/40 border-primary-blue/60 shadow-card-hover'
                    : module.id === 'module-08'
                    ? 'ring-1 ring-purple-300 border-purple-300 shadow-subtle'
                    : 'border-slate-200/90 hover:border-slate-300 shadow-subtle hover:shadow-card'
                }`}
              >
                {/* Card Header */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-primary-blue shadow-subtle flex-shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-slate-400">
                            MODULE {module.number}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${module.badgeColor || 'bg-slate-50 text-slate-700'}`}>
                            {module.badge}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-navy mt-0.5">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Purpose */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {module.purpose}
                  </p>

                  {/* Key Metrics / Highlights */}
                  {module.metrics && module.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2.5 mb-5 p-3 rounded-xl bg-brand-bg/80 border border-slate-200/60">
                      {module.metrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-[11px] text-slate-500 font-medium">{metric.label}</div>
                          <div className="text-sm font-bold text-navy">{metric.value}</div>
                          {metric.helper && (
                            <div className="text-[10px] text-slate-400">{metric.helper}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Capabilities List */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      Core Enterprise Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {(isExpanded ? module.capabilities : module.capabilities.slice(0, 4)).map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer / Expand Toggle */}
                <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium italic">
                    {module.highlight}
                  </span>
                  {module.capabilities.length > 4 && (
                    <button
                      onClick={() => setExpandedModuleId(isExpanded ? null : module.id)}
                      className="inline-flex items-center text-primary-blue font-semibold hover:underline flex-shrink-0 ml-3"
                    >
                      <span>{isExpanded ? 'Show Less' : `+${module.capabilities.length - 4} More`}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 ml-1" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 ml-1" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-600">
            Need custom approval rules or specific ERP integrations? BidSphere configures seamlessly to your enterprise taxonomy.
          </p>
        </div>
      </div>
    </section>
  );
};

