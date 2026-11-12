import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from '../animations/motion-shim';
import { productScreenshots } from '../data/screenshotsData';
import {
  Maximize2,
  CheckCircle2,
  Laptop,
  Layers,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { ScrollReveal } from './common/MotionComponents';

interface ScreenshotsShowcaseProps {
  onRequestDemo?: () => void;
}

export const ScreenshotsShowcase = ({ onRequestDemo }: ScreenshotsShowcaseProps = {}) => {
  const [selectedShotIndex, setSelectedShotIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Focus only on the 6 prompt-specified core features for the primary tabs
  // Any extra screenshots (e.g. security gateway) are available in the lightbox gallery
  const showcaseTabs = productScreenshots.slice(0, 6);
  const activeShot = productScreenshots[selectedShotIndex] || productScreenshots[0];

  const handlePrev = useCallback(() => {
    setSelectedShotIndex((prev) => (prev === 0 ? productScreenshots.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setSelectedShotIndex((prev) => (prev === productScreenshots.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handlePrev, handleNext]);

  const handleExploreAction = () => {
    if (onRequestDemo) {
      onRequestDemo();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="showcase" className="py-20 md:py-28 bg-[#F5F7FB] text-[#0F1B36] relative overflow-hidden">
      {/* Subtle decorative enterprise gradient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#146CE8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E8F3FF] text-[#146CE8] border border-blue-200/70 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Laptop className="w-3.5 h-3.5 text-[#146CE8]" />
            <span>INTERACTIVE PRODUCT EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F1B36]">
            Experience BidSphere in Action
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore the real BidSphere enterprise interface — built for speed, transparency and seamless cross-functional execution.
          </p>
        </ScrollReveal>

        {/* Compact Single-Row Navigation Tabs */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-12">
          <div
            ref={tabsContainerRef}
            className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
          >
            {showcaseTabs.map((shot, idx) => {
              const isSelected = idx === selectedShotIndex;
              const label = shot.tabLabel || shot.title;

              return (
                <button
                  key={shot.id}
                  onClick={() => setSelectedShotIndex(idx)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center space-x-2 shrink-0 ${
                    isSelected
                      ? 'bg-[#146CE8] text-white shadow-md shadow-[#146CE8]/25 border border-[#146CE8]'
                      : 'bg-white text-slate-600 hover:text-[#0F1B36] hover:bg-slate-50 border border-slate-200/90 shadow-2xs'
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                    0{idx + 1}.
                  </span>
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Premium Split Layout: 2 Columns on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Feature Specifications & Controls */}
          <div className="lg:col-span-5 flex flex-col space-y-6 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShot.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                {/* Category Badge & Live Tag */}
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#E8F3FF] text-[#146CE8] border border-blue-200/60 shadow-2xs">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{activeShot.category}</span>
                  </span>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                    <Sparkles className="w-3 h-3 text-[#146CE8]" />
                    <span>{activeShot.badge}</span>
                  </span>
                </div>

                {/* Selected Feature Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1B36] tracking-tight leading-snug">
                  {activeShot.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeShot.description}
                </p>

                {/* Three Key Capabilities */}
                <div className="space-y-2.5 pt-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Capabilities
                  </div>
                  {activeShot.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 bg-white border border-slate-200/80 p-3 rounded-xl shadow-2xs transition-colors hover:border-blue-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#146CE8] flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA & Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleExploreAction}
                className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-[#146CE8] hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-[#146CE8]/20 transition-all hover:scale-[1.01] active:scale-[0.98]"
              >
                <span>Explore Feature</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm transition-colors hover:border-slate-300 shadow-2xs"
              >
                <Maximize2 className="w-4 h-4 text-slate-500" />
                <span>Fullscreen</span>
              </button>
            </div>

            {/* Navigation Controls & Index Indicator */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
              <div className="text-xs font-mono font-bold text-slate-400">
                SCREENSHOT {String(selectedShotIndex + 1).padStart(2, '0')} / {String(productScreenshots.length).padStart(2, '0')}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 hover:text-[#0F1B36] transition-colors shadow-2xs"
                  aria-label="Previous screenshot"
                  title="Previous screenshot"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 hover:text-[#0F1B36] transition-colors shadow-2xs"
                  aria-label="Next screenshot"
                  title="Next screenshot"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Large Application Screenshot in Minimal Browser Frame */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/60 overflow-hidden group transition-all">
              {/* Minimal Browser Frame Toolbar (No fake URLs) */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200/80">
                {/* 3 macOS-style window controls */}
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                </div>

                {/* Subtle platform title */}
                <div className="text-xs font-medium text-slate-500 flex items-center space-x-1.5 select-none">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#146CE8]" />
                  <span>BidSphere Enterprise Platform</span>
                </div>

                {/* Fullscreen Button */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                  title="Expand Fullscreen Lightbox"
                  aria-label="Expand Fullscreen Lightbox"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Screenshot Viewport with object-fit: contain */}
              <div
                className="relative bg-slate-100/70 aspect-[16/10] flex items-center justify-center p-3 sm:p-4 overflow-hidden cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeShot.id}
                    src={activeShot.imageSrc}
                    alt={activeShot.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full object-contain rounded-lg drop-shadow-sm select-none transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </AnimatePresence>

                {/* Hover Enlargement Hint */}
                <div className="absolute bottom-3 right-3 bg-[#0F1B36]/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1.5 shadow-sm pointer-events-none">
                  <Maximize2 className="w-3 h-3" />
                  <span>Click to enlarge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0F1B36]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 overflow-hidden"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Modal Top Bar */}
            <div
              className="w-full max-w-7xl mx-auto flex items-center justify-between pb-3 text-white"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#146CE8]/30 text-blue-300 border border-[#146CE8]/40">
                  {activeShot.category}
                </span>
                <span className="font-bold text-sm sm:text-base text-slate-100 truncate max-w-xs sm:max-w-md">
                  {activeShot.title}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  {selectedShotIndex + 1} of {productScreenshots.length} • Press ESC to close
                </span>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Stage: Large Image with Lateral Prev/Next Arrows */}
            <div
              className="relative w-full max-w-7xl mx-auto flex-1 flex items-center justify-center p-2 min-h-0"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Left Arrow */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-[#0F1B36]/80 hover:bg-[#146CE8] text-white border border-white/20 transition-all hover:scale-105 shadow-xl"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeShot.id}
                  src={activeShot.imageSrc}
                  alt={activeShot.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </AnimatePresence>

              {/* Right Arrow */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-[#0F1B36]/80 hover:bg-[#146CE8] text-white border border-white/20 transition-all hover:scale-105 shadow-xl"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Bottom Bar: Description & Thumbnail Strip */}
            <div
              className="w-full max-w-7xl mx-auto pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-1 max-w-2xl text-center sm:text-left">
                {activeShot.description}
              </p>

              {/* Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full py-1">
                {productScreenshots.map((shot, idx) => (
                  <button
                    key={shot.id}
                    type="button"
                    onClick={() => setSelectedShotIndex(idx)}
                    className={`w-14 h-9 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      idx === selectedShotIndex
                        ? 'border-[#146CE8] scale-105 ring-2 ring-[#146CE8]/50'
                        : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                    title={shot.title}
                  >
                    <img src={shot.imageSrc} alt={shot.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
