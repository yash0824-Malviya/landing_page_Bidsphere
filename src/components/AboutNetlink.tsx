import React from 'react';
import { 
  Building2, 
  Award, 
  Globe2, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const AboutNetlink: React.FC = () => {
  const credentials = [
    { label: 'Years of Engineering Excellence', value: '25+', subtext: 'Established global enterprise partner' },
    { label: 'Global Delivery Centers', value: 'Global Footprint', subtext: 'Serving Fortune 500 & mid-market leaders' },
    { label: 'Enterprise Systems Deployed', value: '500+', subtext: 'Mission-critical digital architectures' },
    { label: 'Supply Chain & Sourcing Focus', value: 'Deep Domain', subtext: 'Heavy engineering, manufacturing & automotive' },
  ];

  return (
    <section id="about-netlink" className="py-20 md:py-28 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-16 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 Cols: Netlink Story & Leadership */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src="/netlink-logo.png"
                  alt="Netlink Software Private Limited"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  FLAGSHIP INNOVATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                About Netlink Software Private Limited
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Netlink Software Private Limited is a global technology and digital transformation leader with
                over 25 years of proven excellence in engineering mission-critical enterprise platforms.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                BidSphere represents Netlink’s pinnacle strategic procurement ecosystem — developed to combine
                deep supply chain domain mastery, rigorous financial governance, and explainable artificial
                intelligence into a unified, high-performance platform.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                  <span>ISO 9001 & 27001 Certified Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                  <span>24/7 Global Enterprise Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                  <span>Seamless ERP & SAP Integrations</span>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Credential Tiles */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-brand-bg/80 border border-slate-200/90 shadow-subtle flex flex-col justify-between"
                >
                  <div className="text-3xl font-extrabold text-navy mb-1">{cred.value}</div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">{cred.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{cred.subtext}</div>
                  </div>
                </div>
              ))}

              <div className="sm:col-span-2 p-6 rounded-2xl bg-navy text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold">Partner with Netlink Software</div>
                  <div className="text-xs text-slate-300 mt-0.5">Custom procurement solution consulting & deployment</div>
                </div>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-primary-blue hover:bg-primary-blue-600 text-xs font-semibold text-white transition-colors flex items-center space-x-1 flex-shrink-0"
                >
                  <span>Connect With Our Team</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

