import { StakeholderRole } from '../types';

export const rolesData: StakeholderRole[] = [
  {
    id: 'dept-user',
    title: 'Department User',
    shortName: 'Internal Stakeholder',
    badge: 'Demand Originator',
    icon: 'UserCheck',
    color: 'blue',
    summary: 'Submits business needs, tracks intake progress in real-time, provides operational requirements, and inspects receipt status without needing procurement jargon.',
    dashboardFeatures: [
      'Self-service Business Intake submission forms',
      'Live requisition milestone tracking widget',
      'Real-time status alerts (Under Review, RFQ Active, PO Dispatched)',
      'Direct receipt inspection & confirmation log'
    ],
    approvalsHandled: [
      'Operational requirements clarification',
      'User acceptance testing verification'
    ],
    keyActions: [
      'Submit Business Need',
      'Attach Functional Specifications',
      'Track Sourcing Timeline',
      'Confirm Material Delivery'
    ],
    collaborationWith: ['Procurement Team', 'Engineering Team', 'Warehouse']
  },
  {
    id: 'procurement-team',
    title: 'Procurement Team',
    shortName: 'Sourcing & Category Leads',
    badge: 'Commercial Orchestration',
    icon: 'Briefcase',
    color: 'teal',
    summary: 'Owns end-to-end tender strategy, RFQ packaging, vendor invitations, quotation comparisons, AI recommendation audits, price negotiations, and contract handoffs.',
    dashboardFeatures: [
      'Consolidated Sourcing Workbench & RFQ Command Hub',
      'Side-by-side quotation comparison matrix & currency normalizer',
      'AI Recommendation Evaluation scoring inspector',
      'Reverse Bidding real-time auction management console',
      'PO Generation & supplier performance telemetry'
    ],
    approvalsHandled: [
      'Sourcing strategy selection (RFQ, RFI, RFP, Auction)',
      'Supplier shortlist qualification',
      'Commercial award sanction'
    ],
    keyActions: [
      'Publish RFQ Tender',
      'Broadcast Supplier Invites',
      'Run AI Evaluation',
      'Negotiate BAFO Rates',
      'Issue Award & Generate PO'
    ],
    collaborationWith: ['Finance Team', 'Engineering', 'Legal / CLM', 'Suppliers']
  },
  {
    id: 'engineering-team',
    title: 'Engineering Team',
    shortName: 'Technical & Design Leads',
    badge: 'Spec & ECR Governance',
    icon: 'Cpu',
    color: 'indigo',
    summary: 'Governs technical feasibility, CAD drawing validations, Bill of Materials (BOM) changes, and Engineering Change Requests (ECRs) prior to commercial tender release.',
    dashboardFeatures: [
      'ECR Workbench with revision comparison diffs',
      'CAD drawing & technical attachment viewer',
      'Part substitution impact & tolerance analyzer',
      'Engineering status tracking across production stages'
    ],
    approvalsHandled: [
      'ECR technical feasibility approval',
      'Engineering change impact sign-off',
      'Supplier technical query resolution'
    ],
    keyActions: [
      'Create and revise ECRs',
      'Upload technical specifications & BOMs',
      'Review supplier technical deviations',
      'Transition approved ECR to Sourcing'
    ],
    collaborationWith: ['Procurement Team', 'Department Users', 'Suppliers']
  },
  {
    id: 'finance-team',
    title: 'Finance Team',
    shortName: 'Financial Controllers & CFO Office',
    badge: 'Capital & ROI Guardrails',
    icon: 'DollarSign',
    color: 'emerald',
    summary: 'Audits multi-year business cases, enforces CAPEX and OPEX allocations, calculates NPV and IRR metrics, validates savings, and oversees 3-way invoice matching.',
    dashboardFeatures: [
      'Real-time Spend Analytics & budget burn rate monitors',
      'Automated DCF modelers (CAPEX, OPEX, NPV, IRR, Payback)',
      'Savings realization benchmark reports',
      '3-Way Match discrepancy resolution queue'
    ],
    approvalsHandled: [
      'Business case capital authorization',
      'Budget re-allocation requests',
      'Payment voucher disbursements'
    ],
    keyActions: [
      'Review Business Case Models',
      'Validate ROI & Payback Hurdles',
      'Audit Sourcing Savings',
      'Authorize Payment Execution'
    ],
    collaborationWith: ['Executive Approvers', 'Procurement Team', 'Legal']
  },
  {
    id: 'legal-team',
    title: 'Legal / Compliance Team',
    shortName: 'Corporate Legal & Governance',
    badge: 'Risk & CLM Stewardship',
    icon: 'Scale',
    color: 'purple',
    summary: 'Directs contract lifecycle management (CLM), maintains standardized clause libraries, conducts regulatory compliance reviews, redlines agreements, and oversees dual e-signatures.',
    dashboardFeatures: [
      'CLM Request Queue with automated risk routing',
      'Contract Redlining & clause library version comparator',
      'Regulatory compliance & vendor risk checklist',
      'Digital signature audit trail and certificate vault'
    ],
    approvalsHandled: [
      'Contract draft terms & risk profile approval',
      'Non-standard clause deviation waivers',
      'Legal execution authorization'
    ],
    keyActions: [
      'Draft Contracts from RFQ Awards',
      'Redline & Negotiate Legal Clauses',
      'Enforce Compliance Standards',
      'Execute Cryptographic E-Signatures'
    ],
    collaborationWith: ['Procurement Team', 'Executive Approvers', 'Suppliers']
  },
  {
    id: 'exec-approver',
    title: 'Executive Approver',
    shortName: 'C-Suite & Board Officers',
    badge: 'Zero Dept Head Authority',
    icon: 'ShieldAlert',
    color: 'amber',
    summary: 'Acts on high-value business cases, capital allocation sanctions, and high-impact strategic sourcing awards with instant mobile/desktop approval summaries.',
    dashboardFeatures: [
      'Executive Summary Cockpit with financial ROI cards',
      'Single-click approval drawer with full audit trail',
      'High-risk supplier alerts and exposure analytics',
      'Macro spend category forecasting dashboards'
    ],
    approvalsHandled: [
      'High-value Business Case approvals',
      'Strategic sourcing award sanction (Zero Dept Head Rule)',
      'Capital budget threshold exceptions'
    ],
    keyActions: [
      'Review Consolidated Sourcing Dossiers',
      'Authorize Strategic Capital Expenditure',
      'Sanction Enterprise Contracts',
      'Audit Governance Health'
    ],
    collaborationWith: ['Finance Team', 'Procurement Director', 'Legal Team']
  },
  {
    id: 'supplier-portal',
    title: 'Supplier',
    shortName: 'Certified Vendors & Partners',
    badge: 'Vendor Self-Service',
    icon: 'Store',
    color: 'sky',
    summary: 'Interacts through a dedicated secure portal to view published RFQs, submit line-item bids, participate in live reverse auctions, review orders, and complete e-signatures.',
    dashboardFeatures: [
      'Active RFQ & Invitation workbench',
      'Structured quotation submission form with attachment uploads',
      'Live Reverse Bidding interactive auction room',
      'Purchase Order receipt and shipment status tracker',
      'Contract E-Sign digital signing interface'
    ],
    approvalsHandled: [
      'Formal quotation submission confirmation',
      'Contract e-signature counter-signing',
      'Purchase Order acceptance acknowledgment'
    ],
    keyActions: [
      'Complete Onboarding Credentials',
      'Submit Quotation Bids',
      'Engage in Live Reverse Bidding',
      'Sign Enterprise Contracts',
      'Submit Invoices & Dispatch Notes'
    ],
    collaborationWith: ['Procurement Leads', 'Warehouse Receiving', 'Finance']
  }
];

