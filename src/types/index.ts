export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  badge: string;
  purpose: string;
  icon: string;
  category: 'intake' | 'sourcing' | 'finance' | 'execution' | 'command';
  capabilities: string[];
  metrics?: { label: string; value: string; helper?: string }[];
  highlight?: string;
  badgeColor?: string;
}

export interface LifecycleStep {
  step: number;
  id: string;
  title: string;
  subtitle: string;
  owner: string;
  ownerBadge: string;
  description: string;
  inputs: string[];
  outputs: string[];
  sla: string;
  isCLMConnected?: boolean;
  isZeroDepartmentHead?: boolean;
}

export interface StakeholderRole {
  id: string;
  title: string;
  shortName: string;
  badge: string;
  icon: string;
  summary: string;
  dashboardFeatures: string[];
  approvalsHandled: string[];
  keyActions: string[];
  collaborationWith: string[];
  color: string;
}

export interface ProductScreenshot {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  highlights: string[];
  badge: string;
  subViews?: {
    id: string;
    label: string;
    imageSrc: string;
    title?: string;
    description?: string;
    highlights?: string[];
  }[];
}

export interface SupplierEvaluationDemo {
  id: string;
  supplierName: string;
  quotationRef: string;
  priceScore: number;
  deliveryScore: number;
  reliabilityScore: number;
  completenessScore: number;
  calculatedOverall: number;
  rank: number;
  riskTier: 'Low' | 'Medium' | 'High';
  verdict: 'BEST VALUE' | 'GOOD OPTION' | 'HIGH RISK';
  quotedAmount: string;
  leadTimeDays: number;
  reliabilityRate: string;
  summaryNotes: string;
}

