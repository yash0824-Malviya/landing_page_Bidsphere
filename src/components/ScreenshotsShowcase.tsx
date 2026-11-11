import React, { useState } from 'react';
import { productScreenshots } from '../data/screenshotsData';
import { 
  Maximize2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Laptop, 
  Layers, 
  FileText,
  X
} from 'lucide-react';

export const ScreenshotsShowcase: React.FC = () => {
  const [selectedShotId, setSelectedShotId] = useState<string>('supplier-dashboard');
  const [modalImage, setModalImage] = useState<string | null>(null);

  const activeShot = productScreenshots.find((s) => s.id === selectedShotId) || productScreenshots[0];

  return (
    <section id="showcase" className="py-20 md:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-primary-blue-200 border border-primary-blue/30 text-xs font-semibold uppercase tracking-wider">
            <Laptop className="w-3.5 h-3.5" />
            <span>Actual Product Interface</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Engineered for High-Velocity Procurement
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Experience the real BidSphere enterprise interface — built for speed, transparency, and effortless cross-functional execution.
          </p>
        </div>

        {/* Tab Selector for Screenshots */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {productScreenshots.map((shot) => {
            const isSelected = shot.id === selectedShotId;

            return (
              <button
                key={shot.id}
                onClick={() => setSelectedShotId(shot.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-primary-blue text-white shadow-glow'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/80'
                }`}
              >
                {shot.title}
              </button>
            );
          })}
        </div>

        {/* Realistic Laptop Shell Preview */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-950 rounded-2xl p-2 sm:p-3 border border-slate-700/80 shadow-2xl relative group">
            {/* Top Display Camera Notch */}
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 rounded-t-xl border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-0.5 rounded-md border border-slate-800 hidden sm:block">
                bidsphere.netlink.com/app/{activeShot.id}
              </div>
              <button
                onClick={() => setModalImage(activeShot.imageSrc)}
                className="text-xs text-slate-400 hover:text-white flex items-center space-x-1"
                title="Expand Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>

            {/* Screenshot Viewport */}
            <div className="relative overflow-hidden bg-slate-900 rounded-b-xl max-h-[560px] flex items-center justify-center">
              <img
                src={activeShot.imageSrc}
                alt={activeShot.title}
                className="w-full h-auto object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.01]"
                onClick={() => setModalImage(activeShot.imageSrc)}
              />

              <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 text-xs font-semibold text-white flex items-center space-x-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified BidSphere UI Capture</span>
              </div>
            </div>
          </div>

          {/* Screenshot Explanatory Description & Callout Highlights */}
          <div className="mt-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-primary-blue/20 text-primary-blue-200 border border-primary-blue/30">
                  {activeShot.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeShot.title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start md:self-auto">
                {activeShot.badge}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              {activeShot.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              {activeShot.highlights.map((high, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center space-x-2 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary-blue flex-shrink-0" />
                  <span>{high}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] overflow-auto rounded-2xl border border-slate-700 bg-slate-900 p-2">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={modalImage}
              alt="BidSphere Full View"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

