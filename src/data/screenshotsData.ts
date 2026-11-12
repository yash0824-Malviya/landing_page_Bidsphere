import { ProductScreenshot, SupplierEvaluationDemo } from '../types';

export const productScreenshots: ProductScreenshot[] = [
  {
    id: 'supplier-dashboard',
    title: 'BidSphere Supplier Collaboration Portal',
    category: 'Supplier Ecosystem',
    description: 'Empowers certified vendors with real-time tender invitations, structured quotation forms, and live order tracking without email ping-pong.',
    imageSrc: '/supplier-dashboard-desktop.png',
    highlights: [
      'Self-service RFQ access & tokenized authentication',
      'Instant tender response status & milestone alerts',
      'Real-time quotation revision logging'
    ],
    badge: 'Live Portal View'
  },
  {
    id: 'attention-grid',
    title: 'Procurement Attention Grid & Command Console',
    category: 'Procurement Governance',
    description: 'Centralized cockpit highlighting critical actions: urgent RFQ deadlines, pending cross-functional approvals, and supplier compliance warnings.',
    imageSrc: '/supplier-attention-grid-desktop.png',
    highlights: [
      'Zero Department Head approval routing indicator',
      'Bottleneck detection across active tenders',
      'Granular line-item audit trail'
    ],
    badge: 'Operations Hub'
  },
  {
    id: 'contract-lifecycle',
    title: 'Contract Lifecycle Management & E-Signature',
    category: 'CLM & Legal',
    description: 'Seamlessly links awarded RFQs to legally binding agreements with dual cryptographic e-signatures and clause audit trails.',
    imageSrc: '/supplier-contract-acceptance-ready.png',
    highlights: [
      'Direct RFQ-to-Contract clause generation',
      'Dual-party non-repudiation e-signing',
      'Perpetual contract repository archiving'
    ],
    badge: 'CLM & E-Sign',
    subViews: [
      {
        id: 'contract-acceptance',
        label: '01 – Contract Acceptance',
        title: 'Review & Accept Contract (CON-2026-000001)',
        imageSrc: '/supplier-contract-acceptance-ready.png',
        description: 'Seamlessly links awarded RFQs to legally binding agreements with dual cryptographic e-signatures and clause audit trails.',
        highlights: [
          'Direct RFQ-to-Contract clause generation',
          'Dual-party non-repudiation e-signing',
          'Perpetual contract repository archiving'
        ]
      },
      {
        id: 'document-verification',
        label: '02 – Supplier Document Verification',
        title: 'Supplier Document Verification & SHA-256 Integrity (PUR-SQTN-2026-00353)',
        imageSrc: '/supplier-document-verification.jpg',
        description: 'Verify supplier Terms & Conditions, Compliance Warranties, and Insurance Certificates with SHA-256 cryptographic document integrity and embedded PDF viewing.',
        highlights: [
          'SHA-256 cryptographic document integrity verification',
          'Automated 3/3 compliance verification check (T&Cs, Warranty, Insurance)',
          'Embedded interactive PDF viewer with one-click signing workflow'
        ]
      }
    ]
  },
  {
    id: 'enterprise-contract-pdf',
    title: 'Multi-Page Enterprise Contract Viewer',
    category: 'Legal Review',
    description: 'Integrated document viewer with formal formatting, standardized clause library references, and financial schedule bindings.',
    imageSrc: '/contract-enterprise-preview-con2026-00010.png',
    highlights: [
      'Dynamic PDF rendering directly in-browser',
      'Legal & finance handoff review tracking',
      'Multi-currency commercial terms binding'
    ],
    badge: 'Document Intelligence'
  },
  {
    id: 'po-contract-link',
    title: 'PO & Contract Relationship Verification',
    category: 'Execution & Purchasing',
    description: 'Tight integration between transactional Purchase Orders and Master Services Agreements, ensuring full commercial compliance.',
    imageSrc: '/contract-details-apex-fasteners.jpg',
    highlights: [
      '3-way match ready line-item binding',
      'Automated price ceiling validation against contract',
      'Delivery schedule milestone tracking'
    ],
    badge: 'PO Integrity'
  },
  {
    id: 'secure-authentication',
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

