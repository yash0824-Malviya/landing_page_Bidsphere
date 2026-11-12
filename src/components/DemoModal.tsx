import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, Clock, ShieldCheck, ArrowRight, Sparkles, Loader2 } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: 'Procurement Leader / CPO',
    spendRange: '$50M - $250M',
    selectedModules: ['AI Recommendation Engine', 'Contract Lifecycle (CLM)'],
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const moduleOptions = [
    'Business Intake & Triage',
    'Engineering ECR & BOMs',
    'Business Case & CapEx ROI',
    'Strategic Sourcing & RFQs',
    'Supplier Collaboration Portal',
    'AI Recommendation Engine',
    'Purchase Order Management',
    'Contract Lifecycle (CLM)',
    'Purchasing & GRN Receiving',
    'Procurement Command Center',
  ];

  const toggleModule = (mod: string) => {
    if (formData.selectedModules.includes(mod)) {
      setFormData({
        ...formData,
        selectedModules: formData.selectedModules.filter((m) => m !== mod),
      });
    } else {
      setFormData({
        ...formData,
        selectedModules: [...formData.selectedModules, mod],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-primary-blue flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Request an Enterprise BidSphere Demonstration</h3>
                  <p className="text-xs text-slate-400">Tailored 30-minute walkthrough with Netlink procurement engineers</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy">Demo Request Confirmed!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName || 'Valued Partner'}</strong>. A dedicated BidSphere solutions architect from Netlink Software has been assigned to your organization.
                  </p>

                  <div className="p-4 rounded-2xl bg-brand-bg border border-slate-200 text-xs text-left max-w-md mx-auto space-y-2 mt-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Booking Reference:</span>
                      <span className="font-mono font-bold text-navy">DEMO-BS-2026-0941</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scheduled Contact Window:</span>
                      <span className="font-semibold text-emerald-700">Within 4 Business Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Registered Email:</span>
                      <span className="font-mono text-navy">{formData.email || 'corporate@enterprise.com'}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Return to Website
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Corporate Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Organization / Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Manufacturing Inc."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Stakeholder Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy bg-white focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
                      >
                        <option>Chief Procurement Officer / VP Supply Chain</option>
                        <option>Director of Strategic Sourcing</option>
                        <option>Finance Controller / CFO</option>
                        <option>Lead Category Manager</option>
                        <option>Engineering / Operations Manager</option>
                        <option>Legal Counsel / Contract Manager</option>
                        <option>Other Executive</option>
                      </select>
                    </div>
                  </div>

                  {/* Modules of Primary Interest */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Target Modules for Architecture Walkthrough
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {moduleOptions.map((mod) => {
                        const isSelected = formData.selectedModules.includes(mod);
                        return (
                          <motion.button
                            key={mod}
                            type="button"
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleModule(mod)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-primary-blue text-white shadow-sm ring-1 ring-primary-blue'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {mod}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Specific Integration or Sourcing Questions
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Inquiring about SAP S/4HANA connector, reverse auction concurrency, or SOC-2 compliance package..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <div className="text-xs text-slate-500 flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Netlink Enterprise Privacy Guarantee</span>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-2.5 rounded-xl bg-primary-blue hover:bg-primary-blue-600 text-white font-semibold text-sm shadow-card hover:shadow-card-hover transition-all flex items-center space-x-2 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Scheduling...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Booking</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
