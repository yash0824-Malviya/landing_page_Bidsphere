import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  FileCheck2, 
  Server, 
  CheckCircle2, 
  KeyRound, 
  EyeOff, 
  DatabaseBackup 
} from 'lucide-react';
import { ScrollReveal, SpotlightCard } from './common/MotionComponents';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const SecurityCompliance: React.FC = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'AES-256 & TLS 1.3 Encryption',
      description: 'End-to-end data encryption across rest and transit states. Requisitions, bids, and contracts remain protected with hardware-security-module (HSM) keys.'
    },
    {
      icon: ShieldCheck,
      title: 'SOC-2 Type II Alignment',
      description: 'Engineered in compliance with enterprise security criteria covering availability, processing integrity, confidentiality, and privacy.'
    },
    {
      icon: KeyRound,
      title: 'Granular Role-Based Access Control (RBAC)',
      description: 'Strict segregation of duties across Department Users, Sourcing Leads, Finance Controllers, Legal Counsel, and external Vendors.'
    },
    {
      icon: FileCheck2,
      title: 'Non-Repudiation Dual E-Signatures',
      description: 'Cryptographically certified e-signatures for contracts and POs with SHA-256 hashing, IP timestamping, and permanent signature certificates.'
    },
    {
      icon: EyeOff,
      title: 'Sealed Commercial Bidding Integrity',
      description: 'Guarantees unalterable sealed quotation custody until formal tender opening deadlines, preventing premature bid visibility.'
    },
    {
      icon: DatabaseBackup,
      title: 'Immutable Audit Trail',
      description: 'Comprehensive, tamper-evident transaction logs capturing every specification change, approval click, bid modification, and payment authorization.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-xs font-semibold uppercase tracking-wider border border-blue-200/80">
            <span>Enterprise Trust & Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Security, Compliance & Governance
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Built from the ground up to satisfy the rigorous security and auditing standards of global Fortune 500 enterprises.
          </p>
        </ScrollReveal>

        {/* Security Feature Grid with Spotlight Cards and Staggered Entrance */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {securityFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div key={idx} variants={fadeInUp}>
                <SpotlightCard
                  className="p-7 rounded-2xl bg-brand-bg/70 border border-slate-200/90 hover:border-primary-blue/50 hover:bg-white hover:shadow-card transition-all h-full"
                >
                  <div>
                    <motion.div 
                      whileHover={{ scale: 1.08, rotate: [0, -6, 6, 0] }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-center justify-center text-primary-blue mb-5"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-navy mb-2.5">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Deployment Options Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold">Flexible Deployment Architecture</h4>
            <p className="text-sm text-slate-300">
              Available as Multi-Tenant Enterprise Cloud, Dedicated Private Cloud (AWS / Azure / GCP), or On-Premises Air-Gapped deployment.
            </p>
          </div>
          <div className="flex items-center space-x-3 text-xs font-semibold">
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200">
              SaaS Multi-Tenant
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200">
              Dedicated VPC
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-primary-blue text-white shadow-sm">
              On-Premises
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
