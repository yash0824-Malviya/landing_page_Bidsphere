import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Send,
  Loader2
} from 'lucide-react';
import { ScrollReveal, MagneticButton } from './common/MotionComponents';

interface ContactSectionProps {
  onRequestDemo: () => void;
}

export const ContactSection = ({ onRequestDemo }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid corporate email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Realistic API submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 5 Cols: Contact Information */}
          <ScrollReveal className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-xs font-semibold uppercase tracking-wider border border-blue-200/80">
              <span>Enterprise Engagement</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Ready to Modernize Your Procurement Infrastructure?
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Connect with our procurement solution specialists to discuss deployment options, ERP connectors,
              custom workflows, and tailored proof-of-concept timelines.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-slate-100 text-primary-blue flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">Global Headquarters</div>
                  <div className="text-xs text-slate-600 mt-0.5">Netlink Software Private Limited</div>
                  <div className="text-xs text-slate-500">Global Delivery Centers & Enterprise Support Hubs</div>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-slate-100 text-primary-blue flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">Corporate Enquiries</div>
                  <div className="text-xs text-slate-600 mt-0.5 font-mono">bidsphere@netlink.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-slate-100 text-primary-blue flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">SLA Response Guarantee</div>
                  <div className="text-xs text-slate-600 mt-0.5">Enterprise inquiries reviewed within 4 business hours</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-3">
              <button
                type="button"
                onClick={onRequestDemo}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary-blue hover:bg-primary-blue-600 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <span>Launch Interactive Demo Modal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </ScrollReveal>

          {/* Right 7 Cols: Interactive Direct Inquiry Form with Validation & Feedback */}
          <ScrollReveal delay={0.15} className="lg:col-span-7 bg-brand-bg rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-card">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Inquiry Received Successfully</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. A Netlink senior procurement engineer has received your details and will contact you at <strong>{formData.email}</strong> within 4 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: '', email: '', company: '', message: '' });
                      }}
                      className="px-5 py-2 rounded-xl bg-navy text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-navy">
                      Schedule a Tailored Solution Briefing
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Direct consultation with Netlink Software supply chain architects.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy bg-white focus:outline-none transition-all ${
                          errors.name
                            ? 'border-rose-400 ring-2 ring-rose-100'
                            : 'border-slate-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs text-rose-500 mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="sarah@enterprise.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy bg-white focus:outline-none transition-all ${
                            errors.email
                              ? 'border-rose-400 ring-2 ring-rose-100'
                              : 'border-slate-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Organization / Company *
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => {
                            setFormData({ ...formData, company: e.target.value });
                            if (errors.company) setErrors({ ...errors, company: '' });
                          }}
                          placeholder="Enterprise Corp"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy bg-white focus:outline-none transition-all ${
                            errors.company
                              ? 'border-rose-400 ring-2 ring-rose-100'
                              : 'border-slate-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20'
                          }`}
                        />
                        {errors.company && (
                          <span className="text-xs text-rose-500 mt-1 block">{errors.company}</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Procurement Scope & Interest (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention category spend, ERP integrations (SAP, Oracle), or targeted timelines..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy bg-white focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto px-7 py-3 rounded-xl bg-primary-blue hover:bg-primary-blue-600 active:scale-[0.99] text-white font-semibold text-sm shadow-card hover:shadow-card-hover transition-all flex items-center justify-center space-x-2 disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Processing Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Solution Request</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>

                      <div className="text-xs text-slate-500">
                        <span>✓ SLA response in &lt; 4 hours</span>
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
