import { ModuleItem } from '../types';

export const modulesData: ModuleItem[] = [
  {
    id: 'module-01',
    number: '01',
    title: 'Business Intake Management',
    shortTitle: 'Business Intake',
    badge: 'Demand Centralization',
    purpose: 'Centralize enterprise business requirements, demand capture, and initial procurement requests under a single governed intake gateway.',
    icon: 'Inbox',
    category: 'intake',
    badgeColor: 'bg-blue-50 text-primary-blue border-blue-200',
    capabilities: [
      'Business Need Submission with contextual intake templates',
      'Dynamic Requirement Capture across departments',
      'Automated Business Case Initiation & preliminary scoping',
      'End-to-End Intake Status Tracking with real-time audit milestones',
      'Direct Approval Routing adhering to the Zero Department Head Rule',
      'Centralized Procurement Queue Management & triage'
    ],
    metrics: [
      { label: 'Demand Capture Rate', value: '100%', helper: 'Zero shadow requisitions' },
      { label: 'Intake-to-Triage Time', value: '< 4 hrs', helper: 'Automated queue dispatch' }
    ],
    highlight: 'Eliminates unmanaged email requests and shadow purchasing by channeling all company needs into structured digital pipelines.'
  },
  {
    id: 'module-02',
    number: '02',
    title: 'Engineering Change Request (ECR)',
    shortTitle: 'Engineering ECR',
    badge: 'Technical Governance',
    purpose: 'Manage engineering revisions, bill-of-materials modifications, and technical specifications seamlessly before initiating sourcing.',
    icon: 'Wrench',
    category: 'intake',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    capabilities: [
      'Digital ECR Creation with parametric specification sheets',
      'Technical Requirements & Drawing Attachment Vault',
      'Cross-functional Engineering Impact Evaluation',
      'Change Assessment & revision comparison',
      'Rigorous Engineering Review & Multi-Discipline Approval',
      'Granular ECR Status Tracking across revision stages',
      'Seamless Approved ECR to Sourcing Transition'
    ],
    metrics: [
      { label: 'Spec Error Reduction', value: '82%', helper: 'Direct drawing & BOM sync' },
      { label: 'ECR Cycle Acceleration', value: '3.4x', helper: 'Automated technical approvals' }
    ],
    highlight: 'Guarantees technical feasibility and approved drawings before procurement begins, preventing costly RFQ rework cycles.'
  },
  {
    id: 'module-03',
    number: '03',
    title: 'Business Case Management',
    shortTitle: 'Business Case',
    badge: 'Financial Validation',
    purpose: 'Evaluate the comprehensive financial viability, multi-year cash flow impact, and strategic business justification of procurement initiatives.',
    icon: 'TrendingUp',
    category: 'finance',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    capabilities: [
      'Comprehensive Business Case Creation with automated financial modeling',
      'Granular Financial Analysis & expenditure breakdowns',
      'Structured Investment Evaluation & sensitivity projections',
      'Multi-Tier Finance Review & capital allocation audits',
      'Integrated Legal and Compliance Review for regulatory risk',
      'Executive Approval with transparent governance gates',
      'Formal Procurement Authorization & funding release'
    ],
    metrics: [
      { label: 'CAPEX & OPEX', value: 'Calculated Live', helper: 'Real-time financial models' },
      { label: 'NPV & IRR', value: 'Multi-Year DCF', helper: 'Automated capital return' },
      { label: 'Payback Period', value: 'Optimized', helper: 'Cash flow timeline tracking' },
      { label: 'Expected Savings', value: 'Benchmarked', helper: 'Historical baseline comparison' }
    ],
    highlight: 'Empowers CFOs and Finance teams with automated CAPEX, OPEX, Expected Savings, ROI, NPV, IRR, and Cash Flow models.'
  },
  {
    id: 'module-04',
    number: '04',
    title: 'Strategic Sourcing & RFQ',
    shortTitle: 'Strategic Sourcing',
    badge: 'Market Competition',
    purpose: 'Digitize and accelerate the sourcing lifecycle with multi-format market engagement, automated quote collection, and competitive auctioning.',
    icon: 'Scale',
    category: 'sourcing',
    badgeColor: 'bg-blue-50 text-primary-blue border-blue-200',
    capabilities: [
      'Multi-Format RFQ Creation with line-item specifications & terms',
      'Targeted RFQ Publication & Broadcast to certified vendor categories',
      'Automated Supplier Invitations with personalized tokenized access',
      'Dedicated RFQ Inbox for centralized quotation management',
      'Supplier Response Tracking with line-item breakdowns',
      'Systematic Quotation Collection & automated compliance auditing',
      'Comprehensive Quotation Comparison matrix with multi-currency support',
      'Real-Time Sourcing Status Tracking & milestone alarms',
      'RFI (Request for Information) for market discovery & supplier screening',
      'RFP (Request for Proposal) for complex technical & service scopes',
      'Dynamic Reverse Bidding / Live Auctions with real-time countdowns',
      'Definitive Supplier Selection & Award workflow'
    ],
    metrics: [
      { label: 'Negotiation Savings', value: '14.2%', helper: 'Average price reduction' },
      { label: 'RFQ Response Time', value: '45% Faster', helper: 'Direct vendor portal response' }
    ],
    highlight: 'Supports traditional RFQs, RFIs, RFPs, and real-time live reverse bidding auctions in a unified sourcing workspace.'
  },
  {
    id: 'module-05',
    number: '05',
    title: 'Supplier Management Ecosystem',
    shortTitle: 'Supplier Portal',
    badge: 'Vendor Collaboration',
    purpose: 'Build a centralized, transparent, and collaborative supplier relationship ecosystem for seamless onboarding, verification, and quotation submission.',
    icon: 'Users',
    category: 'sourcing',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    capabilities: [
      'Self-Service Supplier Registration with digital credential upload',
      'Automated Supplier Onboarding workflows & qualification questionnaires',
      'Rigorous Supplier Verification & compliance document audits',
      'Dedicated Supplier Portal with real-time RFQ & PO visibility',
      'Intuitive Supplier Quotation Submission with attachment validation',
      'Centralized Supplier Master Management with historical data',
      'Objective Supplier Performance tracking & SLA scorecards',
      'Continuous Supplier Reliability Assessment & operational risk scoring'
    ],
    metrics: [
      { label: 'Onboarding Speed', value: '2 Days', helper: 'Down from 3 weeks manual' },
      { label: 'Vendor Adoption', value: '98%', helper: 'Frictionless responsive web UI' }
    ],
    highlight: 'Empowers vendors with dedicated self-service dashboards while giving buyers real-time visibility into supplier reliability and SLA performance.'
  },
  {
    id: 'module-06',
    number: '06',
    title: 'AI-Powered Supplier Recommendation Engine',
    shortTitle: 'AI Intelligence Engine',
    badge: 'Proprietary AI Decision Support',
    purpose: 'Provide rigorous, multi-variable decision support intelligence using an enterprise-weighted scoring algorithm across price, delivery, reliability, and completeness.',
    icon: 'Sparkles',
    category: 'sourcing',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-300 font-semibold',
    capabilities: [
      'Intelligent Multi-Factor Supplier Scoring algorithm',
      'Weighted Supplier Ranking with transparent criteria breakdowns',
      'Normalized Price Comparison across varying currencies & unit costs',
      'Historical Delivery Performance & lead-time reliability analysis',
      'Long-Term Supplier Reliability & quality track record evaluation',
      'Quotation Completeness & compliance checklist validation',
      'Multi-Tier Supplier Risk Assessment (Low, Medium, High)',
      'AI-Powered Purchase Recommendations for human decision-support'
    ],
    metrics: [
      { label: 'Price Criterion Weight', value: '35%', helper: 'Commercial competitiveness' },
      { label: 'Supplier Reliability', value: '30%', helper: 'Historical track record' },
      { label: 'Delivery Performance', value: '25%', helper: 'Committed vs SLA speed' },
      { label: 'Quotation Completeness', value: '10%', helper: 'Compliance & documentation' }
    ],
    highlight: 'Delivers mathematically transparent, audit-ready AI rankings to empower procurement professionals without removing human oversight.'
  },
  {
    id: 'module-07',
    number: '07',
    title: 'Purchase Order Management',
    shortTitle: 'Purchase Orders',
    badge: 'Transactional Control',
    purpose: 'Seamlessly convert sourcing awards into legally binding Purchase Orders with multi-level approval matrices and end-to-end tracking.',
    icon: 'FileText',
    category: 'execution',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    capabilities: [
      'Automated Purchase Order Creation directly from RFQ awards',
      'Dynamic Purchase Order Approval hierarchies based on value thresholds',
      'Real-Time Purchase Order Tracking with status milestone notifications',
      'Collaborative Supplier Order Management & confirmation receipts',
      'Granular Purchase Order Status visibility across the organization',
      'Centralized Procurement Documentation & amendment versioning'
    ],
    metrics: [
      { label: 'PO Creation Time', value: '< 2 mins', helper: 'Instant award conversion' },
      { label: 'Order Accuracy', value: '99.8%', helper: 'Direct line-item binding' }
    ],
    highlight: 'Eliminates manual re-entry errors by auto-populating Purchase Orders directly from evaluated sourcing bids and business cases.'
  },
  {
    id: 'module-08',
    number: '08',
    title: 'Contract Lifecycle Management (CLM)',
    shortTitle: 'Contract Lifecycle (CLM)',
    badge: 'Legal & Risk Governance',
    purpose: 'Manage the complete contract lifecycle from dynamic drafting and clause negotiation to legal reviews, e-signatures, and perpetual repository archiving.',
    icon: 'ShieldCheck',
    category: 'finance',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200 font-semibold',
    capabilities: [
      'Instant Contract Request Creation triggered directly from RFQ Award',
      'Automated Contract Request Routing based on enterprise risk profiles',
      'Template-Driven Contract Drafting with approved clause libraries',
      'Collaborative Multi-Party Contract Review & redlining tools',
      'Dedicated Legal Team Approval workflow with audit trail',
      'Formal Procurement Approval for commercial terms validation',
      'Executive Sign-Off & delegation of authority compliance',
      'Cryptographic E-Signature Integration for buyer and supplier',
      'Centralized Enterprise Contract Repository with searchable index',
      'Contract Status Tracking & upcoming milestone / expiry alerts',
      'Full Contract Lifecycle Visibility across ongoing commitments'
    ],
    metrics: [
      { label: 'Award-to-Drafting', value: 'Zero Lag', helper: 'Automatic contract initiation' },
      { label: 'Execution Speed', value: '65% Faster', helper: 'Integrated dual e-signature' }
    ],
    highlight: 'Directly bridges the gap between RFQ award and contract creation, enforcing legal compliance, clause standards, and auditable digital signing.'
  },
  {
    id: 'module-09',
    number: '09',
    title: 'Purchasing and Receiving',
    shortTitle: 'Purchasing & Receiving',
    badge: 'Fulfillment & Invoicing',
    purpose: 'Complete the procurement loop with warehouse receiving, 3-way matching, Goods Receipt Notes (GRN), and automated payment releases.',
    icon: 'PackageCheck',
    category: 'execution',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    capabilities: [
      'Comprehensive Material Requests & internal warehouse tracking',
      'Purchase Order execution & shipping notification logs',
      'Digital Goods Receipt Notes (GRN) with barcode & inspection logging',
      'Automated Invoice Management with 3-Way Matching (PO, GRN, Invoice)',
      'Structured Payment Workflow & finance disbursement schedules',
      'Full Purchase Tracking from dispatch dock to stock entry'
    ],
    metrics: [
      { label: 'Invoice Match Rate', value: '99.2%', helper: 'Automated 3-way match' },
      { label: 'Dispute Resolution', value: '70% Faster', helper: 'Verified digital receipts' }
    ],
    highlight: 'Connects the dock to the ledger with automated 3-way matching, quality inspections, and audited payment authorization.'
  },
  {
    id: 'module-10',
    number: '10',
    title: 'Procurement Command Center',
    shortTitle: 'Command Center',
    badge: 'Executive Analytics Hub',
    purpose: 'Deliver bird-eye executive transparency, predictive spend forecasting, risk heatmaps, and organizational procurement performance metrics.',
    icon: 'BarChart3',
    category: 'command',
    badgeColor: 'bg-navy text-white border-navy font-semibold',
    capabilities: [
      'Executive KPI Cockpit: Total Spend, Active RFQs, Pending Approvals, Active Suppliers',
      'Vendor Risk Radar: High-Risk Suppliers, SLA degradation alerts',
      'Operational Pipelines: Purchase Orders, Business Cases, Engineering Changes',
      'Multi-Dimensional Procurement Spend Analytics by category & department',
      'Predictive Spend Forecasting powered by historical run-rates',
      'Supplier Leaderboard ranked by cost, SLA, and reliability ratings',
      'Comprehensive Approval Visibility with bottleneck identification',
      'Real-Time Procurement Activity Monitoring & live transaction feed'
    ],
    metrics: [
      { label: 'Total Tracked Spend', value: '$84.5M', helper: 'Enterprise-wide aggregation' },
      { label: 'Active RFQs', value: '128 Live', helper: 'Across 14 global categories' },
      { label: 'Pending Approvals', value: '14 Active', helper: 'Zero department head SLA' },
      { label: 'Registered Suppliers', value: '482 Verified', helper: 'Continuous risk tracking' }
    ],
    highlight: 'Equips C-suite leaders and procurement directors with real-time operational visibility and predictive intelligence across the complete spend portfolio.'
  }
];

