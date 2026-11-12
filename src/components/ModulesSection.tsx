import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Layers
} from 'lucide-react';
import { ScrollReveal, SpotlightCard } from './common/MotionComponents';
import { fadeInUp, staggerContainer } from '../animations/variants';

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

  const toggleExpand = (id: string) => {
    setExpandedModuleId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="modules" className="py-20 md:py-28 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4 mb-14">
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

          {/* Category Filter Pills with Layout Animation */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  selectedCategory === cat.id
                    ? 'text-white'
                    : 'text-slate-700 hover:text-navy bg-white border border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                {selectedCategory === cat.id && (
                  <motion.div
                    layoutId="module-filter-pill"
                    className="absolute inset-0 bg-navy rounded-xl shadow-sm -z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Modules Grid with Staggered Entrance */}
        <motion.div 
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {filteredModules.map((module) => {
            const IconComponent = iconMap[module.icon] || Layers;
            const isExpanded = expandedModuleId === module.id;

            return (
              <motion.div
                key={module.id}
                layout
                variants={fadeInUp}
                className="h-full"
              >
                <div 
                  className={`bg-white rounded-2xl border transition-all duration-300 shadow-subtle hover:shadow-card p-6 sm:p-7 flex flex-col justify-between ${
                    isExpanded 
                      ? 'border-primary-blue/70 ring-1 ring-primary-blue/30 shadow-card' 
                      : 'border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Header Row: Badge & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2.5">
                        <motion.div 
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                          className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-blue"
                        >
                          <IconComponent className="w-5 h-5" />
                        </motion.div>
                        <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                          {module.number}
                        </span>
                      </div>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {module.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-2">
                      {module.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {module.purpose}
                    </p>

                    {/* Features Preview list */}
                    <div className="space-y-2 mb-4">
                      {module.capabilities.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Animated Accordion Expandable Section */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pb-2 border-t border-slate-100 space-y-3">
                            {module.capabilities.length > 3 && (
                              <div className="space-y-2 pt-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                  Extended Capabilities
                                </span>
                                {module.capabilities.slice(3).map((extraFeat, eIdx) => (
                                  <div key={eIdx} className="flex items-start text-xs text-slate-700">
                                    <Check className="w-3.5 h-3.5 text-primary-blue mr-2 mt-0.5 flex-shrink-0" />
                                    <span>{extraFeat}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="p-3 bg-brand-bg/80 rounded-xl border border-slate-200/80 text-xs">
                              <span className="font-semibold text-navy">Zero Dept Head Compliance: </span>
                              <span className="text-slate-600">Requisitions flow strictly through Finance and Procurement governance into Executive Authorization.</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
                    <button
                      type="button"
                      onClick={() => toggleExpand(module.id)}
                      className="inline-flex items-center text-xs font-semibold text-primary-blue hover:text-navy transition-colors focus:outline-none"
                    >
                      <span>{isExpanded ? 'Collapse Module Specs' : 'Expand Module Specs'}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-1"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.div>
                    </button>
                    <a
                      href="#lifecycle"
                      className="text-xs text-slate-400 hover:text-primary-blue flex items-center gap-1 transition-colors"
                    >
                      <span>View in Workflow</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
