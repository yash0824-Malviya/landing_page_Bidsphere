import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

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

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
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
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-navy">Demo Request Confirmed!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. A dedicated BidSphere solutions architect from Netlink Software has been assigned to your organization.
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
                  <span className="font-mono text-navy">{formData.email}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Corporate Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="sarah.jenkins@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company / Organization *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Global Manufacturing Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Primary Role / Function
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                  >
                    <option>Procurement Leader / CPO</option>
                    <option>Strategic Sourcing Manager</option>
                    <option>Finance Controller / CFO</option>
                    <option>Engineering / Operations Director</option>
                    <option>Legal & Compliance Officer</option>
                    <option>Enterprise IT & ERP Architect</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Annual Procurement Spend Volume
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['< $10M', '$10M - $50M', '$50M - $250M', '$250M+'].map((range) => (
                    <button
                      type="button"
                      key={range}
                      onClick={() => setFormData({ ...formData, spendRange: range })}
                      className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                        formData.spendRange === range
                          ? 'bg-primary-blue text-white border-primary-blue shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Priority Modules of Interest (Select All That Apply)
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {moduleOptions.map((mod) => {
                    const isSelected = formData.selectedModules.includes(mod);
                    return (
                      <button
                        type="button"
                        key={mod}
                        onClick={() => toggleModule(mod)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          isSelected
                            ? 'bg-blue-100 text-blue-900 border-blue-300 font-semibold'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected && '✓ '}
                        {mod}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Specific Requirements or Current ERP (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Evaluating AI recommendation engine to replace SAP Ariba manual scoring..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary-blue hover:bg-primary-blue-600 active:scale-[0.99] text-white font-semibold text-sm shadow-card hover:shadow-card-hover transition-all flex items-center justify-center space-x-2"
                >
                  <span>Confirm Demo Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Zero commitment. Netlink Software strictly protects enterprise confidentiality.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

