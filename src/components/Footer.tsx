import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowUp, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="bg-navy text-white pt-16 pb-12 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/netlink-logo.png"
                alt="Netlink Software Logo"
                className="h-8 w-auto brightness-0 invert"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="h-5 w-px bg-slate-700"></div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Bid<span className="text-primary-blue">Sphere</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Smarter Procurement. Stronger Business Decisions.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An intelligent, end-to-end enterprise procurement and strategic sourcing platform
              engineered by Netlink Software Private Limited.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Department Head Governance Enforced</span>
            </div>
          </div>

          {/* Col 2: Platform Modules */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
              Core Modules
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#modules" className="hover:text-white hover:translate-x-1 inline-block transition-all">Business Intake & Triage</a></li>
              <li><a href="#modules" className="hover:text-white hover:translate-x-1 inline-block transition-all">Engineering ECR & BOMs</a></li>
              <li><a href="#modules" className="hover:text-white hover:translate-x-1 inline-block transition-all">Business Case & CapEx ROI</a></li>
              <li><a href="#modules" className="hover:text-white hover:translate-x-1 inline-block transition-all">Strategic Sourcing & RFQs</a></li>
              <li><a href="#modules" className="hover:text-white hover:translate-x-1 inline-block transition-all">Supplier Collaboration Portal</a></li>
              <li><a href="#modules" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contract Lifecycle (CLM)</a></li>
              <li><a href="#modules" className="hover:text-white hover:translate-x-1 inline-block transition-all">Command Center Cockpit</a></li>
            </ul>
          </div>

          {/* Col 3: AI & Workflows */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
              Intelligence & Governance
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#ai-intelligence" className="hover:text-white hover:translate-x-1 inline-block transition-all">AI Recommendation Model</a></li>
              <li><a href="#ai-intelligence" className="hover:text-white hover:translate-x-1 inline-block transition-all">Multi-Criteria 35/25/30/10</a></li>
              <li><a href="#lifecycle" className="hover:text-white hover:translate-x-1 inline-block transition-all">17-Step Procurement Journey</a></li>
              <li><a href="#lifecycle" className="hover:text-white hover:translate-x-1 inline-block transition-all">Zero Department Head Rule</a></li>
              <li><a href="#roles" className="hover:text-white hover:translate-x-1 inline-block transition-all">Cross-Functional Roles</a></li>
              <li><a href="#showcase" className="hover:text-white hover:translate-x-1 inline-block transition-all">Product Screen Gallery</a></li>
            </ul>
          </div>

          {/* Col 4: Netlink Corporate */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
              Netlink Corporate
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#about-netlink" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Netlink Software</a></li>
              <li><a href="#about-netlink" className="hover:text-white hover:translate-x-1 inline-block transition-all">25+ Years Experience</a></li>
              <li><a href="#contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Global Delivery Centers</a></li>
              <li><a href="#contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Enterprise Support SLAs</a></li>
              <li><a href="#contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Request a Consultation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Netlink Software Private Limited. All rights reserved. BidSphere is a registered trademark of Netlink Software.
          </div>

          <div className="flex items-center space-x-6">
            <span className="hover:text-white cursor-pointer transition-colors">Security & Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
