import { ProductScreenshot, SupplierEvaluationDemo } from '../types';

export const productScreenshots: ProductScreenshot[] = [
  {
    id: 'supplier-dashboard',
    tabLabel: 'Supplier Portal',
    title: 'BidSphere Supplier Collaboration Portal',
    category: 'Supplier Ecosystem',
    description: 'Enable suppliers to manage RFQs, submit quotations, track orders and collaborate with procurement teams.',
    imageSrc: '/supplier-dashboard-desktop.png',
    highlights: [
      'Self-service RFQ access & tokenized authentication',
      'Instant tender response status & milestone alerts',
      'Real-time quotation revision logging'
    ],
    badge: 'Vendor Portal'
  },
  {
    id: 'attention-grid',
    tabLabel: 'Command Center',
    title: 'Procurement Attention Grid & Command Console',
    category: 'Procurement Governance',
    description: 'Gain centralized visibility into procurement activities, pending actions, approvals and sourcing performance.',
    imageSrc: '/supplier-attention-grid-desktop.png',
    highlights: [
      'Zero Department Head approval routing indicator',
      'Bottleneck detection across active tenders',
      'Granular line-item audit trail'
    ],
    badge: 'Operations Hub'
  },
  {
    id: 'ai-evaluator',
    tabLabel: 'AI Evaluator',
    title: 'Intelligent Supplier & Quotation Evaluation Engine',
    category: 'Intelligent Sourcing',
    description: 'Evaluate supplier quotations using weighted scoring, risk assessment and intelligent supplier recommendations.',
    imageSrc: '/supplier-hierarchy-desktop.png',
    highlights: [
      'Multi-criteria weighted scoring across price & SLAs',
      'Automated supplier risk tiering and outlier detection',
      'Instant quotation comparison matrix & recommendation'
    ],
    badge: 'AI Intelligence'
  },
  {
    id: 'contract-lifecycle',
    tabLabel: 'CLM & E-Sign',
    title: 'Contract Lifecycle Management & E-Signature',
    category: 'CLM & Legal',
    description: 'Manage contract acceptance, reviews, approval stages and electronic signature workflows.',
    imageSrc: '/supplier-contract-acceptance-ready.png',
    highlights: [
      'Direct RFQ-to-Contract clause generation',
      'Dual-party non-repudiation e-signing',
      'Perpetual contract repository archiving'
    ],
    badge: 'CLM & E-Sign'
  },
  {
    id: 'enterprise-contract-pdf',
    tabLabel: 'Contract Viewer',
    title: 'Multi-Page Enterprise Contract Viewer',
    category: 'Legal Review',
    description: 'Review approved contract documents through an integrated multi-page document viewing experience.',
    imageSrc: '/contract-enterprise-preview-desktop.png',
    highlights: [
      'Dynamic PDF rendering directly in-browser',
      'Legal & finance handoff review tracking',
      'Multi-currency commercial terms binding'
    ],
    badge: 'Document Intelligence'
  },
  {
    id: 'po-contract-link',
    tabLabel: 'PO Verification',
    title: 'PO & Contract Relationship Verification',
    category: 'Execution & Purchasing',
    description: 'Improve visibility into purchase order and contract relationships with structured verification.',
    imageSrc: '/po28-linked-contract-supplier.png',
    highlights: [
      '3-way match ready line-item binding',
      'Automated price ceiling validation against contract',
      'Delivery schedule milestone tracking'
    ],
    badge: 'PO Integrity'
  },
  {
    id: 'secure-authentication',
    tabLabel: 'Security Gateway',
    title: 'Enterprise Single Sign-On & Security Gateway',
    category: 'Security & Access',
    description: 'Role-based access control with MFA enforcement, ensuring complete data segregation between internal teams and external suppliers.',
    imageSrc: '/bidsphere-login-bg.png',
    highlights: [
      'Enterprise SSO & SAML 2.0 integration',
      'Role-governed data isolation',
      'Full session audit trail and access telemetry'
    ],
    badge: 'Enterprise Security'
  }
];

export const aiEvaluationDemoData: SupplierEvaluationDemo[] = [
  {
    id: 'eval-1',
    supplierName: 'FEMSA Industrial Supply',
    quotationRef: 'PUR-SQTN-2026-00256',
    priceScore: 100,
    deliveryScore: 100,
    reliabilityScore: 100,
    completenessScore: 100,
    calculatedOverall: 100,
    rank: 1,
    riskTier: 'Low',
    verdict: 'BEST VALUE',
    quotedAmount: '$15.00 / unit',
    leadTimeDays: 7,
    reliabilityRate: '99.4%',
    summaryNotes: 'Optimal commercial terms, flawless SLA history, complete insurance & warranty attachments. Recommended for immediate award.'
  },
  {
    id: 'eval-2',
    supplierName: 'Titan Industrial Products LLC',
    quotationRef: 'PUR-SQTN-2026-00253',
    priceScore: 100,
    deliveryScore: 92,
    reliabilityScore: 98,
    completenessScore: 100,
    calculatedOverall: 97.4,
    rank: 2,
    riskTier: 'Low',
    verdict: 'GOOD OPTION',
    quotedAmount: '$15.00 / unit',
    leadTimeDays: 9,
    reliabilityRate: '98.1%',
    summaryNotes: 'Identical unit pricing with slight variance in committed dispatch window. Fully verified credentials and strong past performance.'
  },
  {
    id: 'eval-3',
    supplierName: 'Eagle Peak Technologies Inc.',
    quotationRef: 'PUR-SQTN-2026-00257',
    priceScore: 84,
    deliveryScore: 78,
    reliabilityScore: 88,
    completenessScore: 90,
    calculatedOverall: 84.3,
    rank: 3,
    riskTier: 'Medium',
    verdict: 'GOOD OPTION',
    quotedAmount: '$17.20 / unit',
    leadTimeDays: 14,
    reliabilityRate: '92.3%',
    summaryNotes: 'Commercial quote 14.6% above benchmark. Lead time longer than target requirement. Medium risk tier suggests secondary backup status.'
  }
];

