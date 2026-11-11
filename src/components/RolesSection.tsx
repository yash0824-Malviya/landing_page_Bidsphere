import React, { useState } from 'react';
import { rolesData } from '../data/rolesData';
import { 
  UserCheck, 
  Briefcase, 
  Cpu, 
  DollarSign, 
  Scale, 
  ShieldAlert, 
  Store,
  CheckCircle2,
  Bell,
  Eye,
  Lock,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  UserCheck,
  Briefcase,
  Cpu,
  DollarSign,
  Scale,
  ShieldAlert,
  Store,
};

export const RolesSection: React.FC = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>('procurement-team');

  const activeRole = rolesData.find((r) => r.id === selectedRoleId) || rolesData[0];
  const ActiveIcon = iconMap[activeRole.icon] || Briefcase;

  return (
    <section id="roles" className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-xs font-semibold uppercase tracking-wider border border-blue-200/80">
            <span>Collaborative Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Role-Based Workflows & Collaboration
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            BidSphere delivers tailored, secure dashboards for every stakeholder in the procurement lifecycle.
            Cross-functional teams stay perfectly aligned with granular access controls and instant notifications.
          </p>
        </div>

        {/* Stakeholder Selector Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {rolesData.map((role) => {
            const Icon = iconMap[role.icon] || Briefcase;
            const isSelected = role.id === selectedRoleId;

            return (
              <button
                key={role.id}
                onClick={() => setSelectedRoleId(role.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-navy text-white shadow-card scale-105'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-primary-blue' : 'text-slate-500'}`} />
                <span>{role.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Role Showcase Card */}
        <div className="rounded-3xl border border-slate-200 bg-brand-bg/50 p-6 sm:p-10 shadow-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Cols: Role Persona & Mission */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-3.5">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-center justify-center text-primary-blue">
                  <ActiveIcon className="w-7 h-7" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200">
                    {activeRole.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-navy mt-1">
                    {activeRole.title}
                  </h3>
                  <div className="text-xs text-slate-500">{activeRole.shortName}</div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle">
                {activeRole.summary}
              </p>

              {/* Direct Collaborators */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs">
                <span className="font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Direct Collaboration Channels
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeRole.collaborationWith.map((partner, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              {/* Security & Access Guardrail */}
              <div className="flex items-center space-x-2 text-xs text-slate-600 bg-blue-50/60 p-3 rounded-xl border border-blue-200/60">
                <Lock className="w-4 h-4 text-primary-blue flex-shrink-0" />
                <span>Zero Department Head governance with role-based cryptographic data segregation.</span>
              </div>
            </div>

            {/* Right 7 Cols: Dedicated View, Approvals & Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Role Dashboard Features */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle">
                <div className="flex items-center space-x-2 mb-4">
                  <Eye className="w-4 h-4 text-primary-blue" />
                  <h4 className="text-sm font-bold text-navy uppercase tracking-wider">
                    Role-Specific Dashboard Capabilities
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeRole.dashboardFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-2 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approvals Handled & Key Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-subtle">
                  <div className="flex items-center space-x-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider">
                      Authorizations & Approvals
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {activeRole.approvalsHandled.map((appr, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{appr}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-subtle">
                  <div className="flex items-center space-x-2 mb-3">
                    <Bell className="w-4 h-4 text-amber-500" />
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider">
                      Primary Workflow Actions
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {activeRole.keyActions.map((act, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <ArrowRight className="w-3.5 h-3.5 text-primary-blue flex-shrink-0" />
                        <span className="font-medium">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

