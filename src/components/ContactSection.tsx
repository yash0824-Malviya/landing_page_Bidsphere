import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface ContactSectionProps {
  onRequestDemo: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestDemo }) => {
  const [formSent, setFormSent] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 5 Cols: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
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
          </div>

          {/* Right 7 Cols: Interactive Engagement Box */}
          <div className="lg:col-span-7 bg-brand-bg rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-card">
            <div className="max-w-xl mx-auto text-center space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-center justify-center text-primary-blue mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-navy">
                Schedule a Tailored Solution Briefing
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                See BidSphere in action with real data scenarios — including live reverse auctions,
                AI quotation scoring, and Zero Department Head workflow orchestration.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onRequestDemo}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-primary-blue hover:bg-primary-blue-600 active:scale-[0.99] text-white font-semibold text-sm shadow-card hover:shadow-card-hover transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request Full Platform Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#modules"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm transition-colors text-center"
                >
                  Review All 10 Modules
                </a>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-center space-x-6 text-xs text-slate-500 font-medium">
                <span>✓ Zero Obligation</span>
                <span>✓ Direct Engineer Consultation</span>
                <span>✓ SOC-2 Type II Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

