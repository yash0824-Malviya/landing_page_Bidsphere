import React, { useState } from 'react';
import { aiEvaluationDemoData } from '../data/screenshotsData';
import { 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle, 
  Sliders, 
  Info, 
  ArrowRight,
  Calculator,
  Award,
  AlertTriangle
} from 'lucide-react';

export const AiIntelligenceSection: React.FC = () => {
  // Configurable weights matching BidSphere default specification
  const [weights, setWeights] = useState({
    price: 35,
    delivery: 25,
    reliability: 30,
    completeness: 10,
  });

  const [selectedSupplierId, setSelectedSupplierId] = useState<string>('eval-1');

  // Recalculate score based on current weights
  const calculateScore = (price: number, delivery: number, reliability: number, completeness: number) => {
    const totalWeight = weights.price + weights.delivery + weights.reliability + weights.completeness;
    if (totalWeight === 0) return 0;
    const score = (
      (price * weights.price) +
      (delivery * weights.delivery) +
      (reliability * weights.reliability) +
      (completeness * weights.completeness)
    ) / totalWeight;
    return Math.round(score * 10) / 10;
  };

  const dynamicSuppliers = aiEvaluationDemoData.map((sup) => {
    const recalculated = calculateScore(
      sup.priceScore,
      sup.deliveryScore,
      sup.reliabilityScore,
      sup.completenessScore
    );
    return {
      ...sup,
      dynamicScore: recalculated,
    };
  }).sort((a, b) => b.dynamicScore - a.dynamicScore);

  const activeSupplier = dynamicSuppliers.find(s => s.id === selectedSupplierId) || dynamicSuppliers[0];

  const handleResetWeights = () => {
    setWeights({
      price: 35,
      delivery: 25,
      reliability: 30,
      completeness: 10,
    });
  };

  return (
    <section id="ai-intelligence" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Module 06 • Proprietary AI Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            AI-Powered Supplier Recommendation Engine
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate subjective bias and months of manual analysis. BidSphere evaluates incoming supplier bids
            using an explainable, multi-variable scoring model calibrated to your exact commercial and risk priorities.
          </p>
        </div>

        {/* Human-in-the-Loop Governance Notice */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-slate-700 flex items-start sm:items-center space-x-3.5 max-w-4xl mx-auto shadow-subtle">
          <Info className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-navy">Decision-Support Intelligence Principle: </span>
            BidSphere AI does not replace human judgement or execute final procurement decisions autonomously.
            It provides transparent, audited rankings and risk assessments to empower authorized procurement professionals.
          </div>
        </div>

        {/* Criteria Weight Model Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-brand-bg border border-slate-200/90 shadow-subtle text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary-blue" />
            <div className="text-3xl sm:text-4xl font-extrabold text-navy mb-1">{weights.price}%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Commercial Price</div>
            <div className="text-[11px] text-slate-500 mt-1">Normalized rate benchmark & discount schedules</div>
          </div>

          <div className="p-5 rounded-2xl bg-brand-bg border border-slate-200/90 shadow-subtle text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
            <div className="text-3xl sm:text-4xl font-extrabold text-navy mb-1">{weights.reliability}%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Supplier Reliability</div>
            <div className="text-[11px] text-slate-500 mt-1">Historical quality, RMA rate & audit track record</div>
          </div>

          <div className="p-5 rounded-2xl bg-brand-bg border border-slate-200/90 shadow-subtle text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
            <div className="text-3xl sm:text-4xl font-extrabold text-navy mb-1">{weights.delivery}%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Delivery Performance</div>
            <div className="text-[11px] text-slate-500 mt-1">Lead time compliance & on-time dispatch record</div>
          </div>

          <div className="p-5 rounded-2xl bg-brand-bg border border-slate-200/90 shadow-subtle text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
            <div className="text-3xl sm:text-4xl font-extrabold text-navy mb-1">{weights.completeness}%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Quotation Completeness</div>
            <div className="text-[11px] text-slate-500 mt-1">Insurance, certifications & warranty attachments</div>
          </div>
        </div>

        {/* Live Interactive Evaluation Simulator */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-card overflow-hidden">
          {/* Header of the Simulator */}
          <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-base sm:text-lg font-bold">
                  Live Quotation Evaluation Matrix (Demonstration Run)
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Tender Ref: PUR-RFQ-2026-00091 • Target Part: AP001 (Brake Disc Assembly) • 3 Submitted Quotes
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs text-slate-300">Default Baseline:</span>
              <button
                onClick={handleResetWeights}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
              >
                Reset Default Weights (35/25/30/10)
              </button>
            </div>
          </div>

          {/* Interactive Weight Slider Bar */}
          <div className="bg-slate-50 p-4 sm:p-6 border-b border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Sliders className="w-4 h-4 text-primary-blue" />
                <span className="text-xs font-bold text-navy uppercase tracking-wider">
                  Interactive Sourcing Weight Tuner
                </span>
              </div>
              <span className="text-xs text-slate-500">
                Adjust sliders to simulate alternative category procurement strategies:
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Price Weight:</span>
                  <span className="font-mono text-primary-blue">{weights.price}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={weights.price}
                  onChange={(e) => setWeights({ ...weights, price: Number(e.target.value) })}
                  className="w-full accent-primary-blue cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Reliability Weight:</span>
                  <span className="font-mono text-amber-600">{weights.reliability}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={weights.reliability}
                  onChange={(e) => setWeights({ ...weights, reliability: Number(e.target.value) })}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Delivery Weight:</span>
                  <span className="font-mono text-emerald-600">{weights.delivery}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={weights.delivery}
                  onChange={(e) => setWeights({ ...weights, delivery: Number(e.target.value) })}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Completeness Weight:</span>
                  <span className="font-mono text-purple-600">{weights.completeness}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={weights.completeness}
                  onChange={(e) => setWeights({ ...weights, completeness: Number(e.target.value) })}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Supplier Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 text-slate-700 uppercase text-xs font-bold border-b border-slate-200">
                <tr>
                  <th className="px-5 py-3.5">Rank</th>
                  <th className="px-5 py-3.5">Supplier Name & Quotation</th>
                  <th className="px-5 py-3.5">Quoted Rate</th>
                  <th className="px-5 py-3.5">Lead Time</th>
                  <th className="px-5 py-3.5">SLA Reliability</th>
                  <th className="px-5 py-3.5">Risk Tier</th>
                  <th className="px-5 py-3.5">AI Score</th>
                  <th className="px-5 py-3.5">Verdict</th>
                  <th className="px-5 py-3.5 text-right">Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {dynamicSuppliers.map((supplier, idx) => {
                  const isTop = idx === 0;
                  const isSelected = supplier.id === activeSupplier.id;

                  return (
                    <tr
                      key={supplier.id}
                      onClick={() => setSelectedSupplierId(supplier.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-blue-50/70'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <td className="px-5 py-4 font-bold">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs ${
                          isTop ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {idx + 1}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-bold text-navy flex items-center space-x-1.5">
                          <span>{supplier.supplierName}</span>
                          {isTop && <Award className="w-4 h-4 text-emerald-600 inline" />}
                        </div>
                        <div className="text-xs text-slate-500 font-mono mt-0.5">{supplier.quotationRef}</div>
                      </td>
                      <td className="px-5 py-4 font-semibold text-navy">{supplier.quotedAmount}</td>
                      <td className="px-5 py-4 text-slate-700">{supplier.leadTimeDays} Days</td>
                      <td className="px-5 py-4 text-slate-700 font-medium">{supplier.reliabilityRate}</td>
                      <td className="px-5 py-4">
                        <span className={`px-2.5 py-1 rounded text-xs font-bold ${
                          supplier.riskTier === 'Low'
                            ? 'bg-emerald-100 text-emerald-800'
                            : supplier.riskTier === 'Medium'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          {supplier.riskTier} Risk
                        </span>
                      </td>
                      <td className="px-5 py-4 font-mono font-extrabold text-base text-navy">
                        <span className={isTop ? 'text-emerald-600' : ''}>
                          {supplier.dynamicScore.toFixed(1)}
                        </span>
                        <span className="text-slate-400 text-xs font-normal"> / 100</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-bold ${
                          isTop ? 'text-emerald-700' : 'text-slate-700'
                        }`}>
                          {isTop ? 'BEST VALUE' : supplier.verdict}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <span className="text-primary-blue font-semibold text-xs hover:underline">
                          {isSelected ? 'Active View' : 'Select'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Detailed Decision Support Breakdown for Selected Supplier */}
          <div className="p-5 sm:p-6 bg-slate-50/90 border-t border-slate-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Decision Support Diagnostic Dossier
                </span>
                <h4 className="text-base font-bold text-navy flex items-center space-x-2 mt-0.5">
                  <span>{activeSupplier.supplierName}</span>
                  <span className="text-xs font-normal text-slate-500 font-mono">({activeSupplier.quotationRef})</span>
                </h4>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-600 font-medium">Risk Status:</span>
                <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${
                  activeSupplier.riskTier === 'Low'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {activeSupplier.riskTier} Risk
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
              {activeSupplier.summaryNotes}
            </p>

            {/* Criteria Breakdown Progress Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="flex justify-between text-slate-600 font-semibold mb-1">
                  <span>Price Metric</span>
                  <span className="font-mono text-navy font-bold">{activeSupplier.priceScore} / 100</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-primary-blue h-2 rounded-full" style={{ width: `${activeSupplier.priceScore}%` }} />
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="flex justify-between text-slate-600 font-semibold mb-1">
                  <span>Reliability Metric</span>
                  <span className="font-mono text-navy font-bold">{activeSupplier.reliabilityScore} / 100</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${activeSupplier.reliabilityScore}%` }} />
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="flex justify-between text-slate-600 font-semibold mb-1">
                  <span>Delivery Metric</span>
                  <span className="font-mono text-navy font-bold">{activeSupplier.deliveryScore} / 100</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${activeSupplier.deliveryScore}%` }} />
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="flex justify-between text-slate-600 font-semibold mb-1">
                  <span>Completeness Metric</span>
                  <span className="font-mono text-navy font-bold">{activeSupplier.completenessScore} / 100</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${activeSupplier.completenessScore}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

