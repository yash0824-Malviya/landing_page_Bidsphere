import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from '../animations/motion-shim';
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
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ScrollReveal } from './common/MotionComponents';

export const ScreenshotsShowcase = () => {
  const [selectedShotIndex, setSelectedShotIndex] = useState<number>(0);
  const [activeSubViewIndex, setActiveSubViewIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Active shot and derived subview data
  const activeShot = productScreenshots[selectedShotIndex] || productScreenshots[0];
  const hasSubViews = !!(activeShot.subViews && activeShot.subViews.length > 0);
  const currentSubView = hasSubViews ? activeShot.subViews![activeSubViewIndex] : null;

  const currentImageSrc = currentSubView ? currentSubView.imageSrc : activeShot.imageSrc;
  const currentTitle = currentSubView?.title || activeShot.title;
  const currentDescription = currentSubView?.description || activeShot.description;
  const currentHighlights = currentSubView?.highlights || activeShot.highlights;

  // Flattened gallery items for lightbox navigation & thumbnail strip
  const allGalleryItems = useMemo(() => {
    const items: {
      shotIndex: number;
      subViewIndex: number;
      id: string;
      title: string;
      imageSrc: string;
      category: string;
      description: string;
    }[] = [];

    productScreenshots.forEach((shot, sIdx) => {
      if (shot.subViews && shot.subViews.length > 0) {
        shot.subViews.forEach((sub, subIdx) => {
          items.push({
            shotIndex: sIdx,
            subViewIndex: subIdx,
            id: `${shot.id}-${sub.id}`,
            title: sub.title || shot.title,
            imageSrc: sub.imageSrc,
            category: shot.category,
            description: sub.description || shot.description || ''
          });
        });
      } else {
        items.push({
          shotIndex: sIdx,
          subViewIndex: 0,
          id: shot.id,
          title: shot.title,
          imageSrc: shot.imageSrc,
          category: shot.category,
          description: shot.description
        });
      }
    });

    return items;
  }, []);

  const currentGalleryIndex = allGalleryItems.findIndex(
    (item) => item.shotIndex === selectedShotIndex && item.subViewIndex === activeSubViewIndex
  );

  const handlePrev = useCallback(() => {
    const prevIdx = currentGalleryIndex <= 0 ? allGalleryItems.length - 1 : currentGalleryIndex - 1;
    const target = allGalleryItems[prevIdx];
    if (target) {
      setSelectedShotIndex(target.shotIndex);
      setActiveSubViewIndex(target.subViewIndex);
    }
  }, [currentGalleryIndex, allGalleryItems]);

  const handleNext = useCallback(() => {
    const nextIdx = currentGalleryIndex >= allGalleryItems.length - 1 ? 0 : currentGalleryIndex + 1;
    const target = allGalleryItems[nextIdx];
    if (target) {
      setSelectedShotIndex(target.shotIndex);
      setActiveSubViewIndex(target.subViewIndex);
    }
  }, [currentGalleryIndex, allGalleryItems]);

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

  const handleSelectTab = (idx: number) => {
    setSelectedShotIndex(idx);
    setActiveSubViewIndex(0);
  };

  return (
    <section id="showcase" className="py-20 md:py-28 bg-[#0F1B36] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#146CE8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#146CE8]/15 text-blue-300 border border-[#146CE8]/30 text-xs font-semibold uppercase tracking-wider">
            <Laptop className="w-3.5 h-3.5 text-[#146CE8]" />
            <span>Actual Product Interface</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Engineered for High-Velocity Procurement
          </h2>

          <p className="text-base sm:text-lg text-[#B7C5D9] leading-relaxed">
            Experience the real BidSphere enterprise interface — built for speed, transparency, and effortless cross-functional execution.
          </p>
        </ScrollReveal>

        {/* Tab Selector for Screenshots with Animated Spring Pill */}
        <div className="flex flex-wrap sm:flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto no-scrollbar py-1">
          {productScreenshots.map((shot, idx) => {
            const isSelected = idx === selectedShotIndex;

            return (
              <button
                key={shot.id}
                onClick={() => handleSelectTab(idx)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  isSelected
                    ? 'text-white'
                    : 'bg-[#142442] hover:bg-[#1a2e54] text-[#B7C5D9] hover:text-white border border-[#263956]'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="screenshot-tab-indicator"
                    className="absolute inset-0 bg-[#146CE8] rounded-xl shadow-[0_0_20px_rgba(20,108,232,0.35)] -z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{shot.title}</span>
              </button>
            );
          })}
        </div>

        {/* Realistic Laptop Shell Preview with Framer Motion Reveal */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#142442] rounded-2xl p-2 sm:p-3 border border-[#263956] shadow-2xl relative group">
            {/* Top Display Camera Notch & Mock Browser Bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#0F1B36] rounded-t-xl border-b border-[#263956]">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="text-[11px] font-mono text-[#B7C5D9] bg-[#0A1224] px-3 py-0.5 rounded-md border border-[#263956] hidden sm:block">
                bidsphere.netlink.com/app/{activeShot.id}
                {currentSubView ? `/${currentSubView.id}` : ''}
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="text-xs text-[#B7C5D9] hover:text-white flex items-center space-x-1 p-1 rounded hover:bg-[#142442] transition-colors"
                title="Expand Fullscreen Lightbox"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen Lightbox</span>
              </button>
            </div>

            {/* Sub-view switcher for features with multiple workflow screens (e.g. CLM & E-Signature) */}
            {hasSubViews && (
              <div className="flex items-center justify-center gap-2 py-2 px-3 bg-[#0A1224] border-b border-[#263956] flex-wrap">
                <span className="text-[11px] font-mono text-[#B7C5D9] uppercase tracking-wider hidden sm:inline mr-1">
                  Workflow Preview:
                </span>
                {activeShot.subViews!.map((sub, sIdx) => {
                  const isSubSelected = sIdx === activeSubViewIndex;
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSubViewIndex(sIdx);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                        isSubSelected
                          ? 'bg-[#146CE8] text-white shadow-[0_0_12px_rgba(20,108,232,0.4)] border border-[#146CE8]'
                          : 'bg-[#142442] hover:bg-[#1a2e54] text-[#B7C5D9] hover:text-white border border-[#263956]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isSubSelected ? 'bg-white' : 'bg-[#146CE8]'}`} />
                      <span>{sub.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Screenshot Viewport with Smooth Image Fade Transitions */}
            <div className="relative overflow-hidden bg-[#0A1224] rounded-b-xl min-h-[340px] max-h-[560px] flex items-center justify-center p-2 sm:p-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeShot.id}-${activeSubViewIndex}`}
                  src={currentImageSrc}
                  alt={currentTitle}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-auto max-h-[520px] object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.01]"
                  onClick={() => setIsLightboxOpen(true)}
                />
              </AnimatePresence>

              <div className="absolute bottom-4 right-4 bg-[#0F1B36]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#263956] text-xs font-semibold text-white flex items-center space-x-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified BidSphere UI Capture</span>
              </div>
            </div>
          </div>

          {/* Screenshot Explanatory Description & Callout Highlights */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeShot.id}-${activeSubViewIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-8 bg-[#142442]/90 border border-[#263956] rounded-2xl p-6 sm:p-8 backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#263956]">
                <div>
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#146CE8]/20 text-blue-300 border border-[#146CE8]/30">
                    {activeShot.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {currentTitle}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start md:self-auto">
                  {currentSubView?.label || activeShot.badge}
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#B7C5D9] mt-4 leading-relaxed">
                {currentDescription}
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                {currentHighlights.map((high, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#0F1B36]/80 border border-[#263956] flex items-center space-x-2 text-xs text-[#B7C5D9]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#146CE8] flex-shrink-0" />
                    <span>{high}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =========================================================================
          SCREENSHOT GALLERY LIGHTBOX MODAL
          - Keyboard navigation (Left, Right, Escape)
          - Previous / Next buttons
          - Smooth spring modal entrance
          - Maintained aspect ratio
          ========================================================================= */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="w-full flex items-center justify-between pb-3 text-white text-xs sm:text-sm">
                <div className="flex items-center space-x-3 truncate">
                  <span className="font-semibold text-[#B7C5D9] font-mono truncate">
                    {currentTitle} ({currentGalleryIndex + 1} of {allGalleryItems.length})
                  </span>
                  {hasSubViews && (
                    <div className="hidden md:flex items-center gap-1.5 bg-[#142442] p-1 rounded-lg border border-[#263956]">
                      {activeShot.subViews!.map((sub, sIdx) => (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => setActiveSubViewIndex(sIdx)}
                          className={`px-2.5 py-0.5 rounded text-xs font-semibold transition-all ${
                            sIdx === activeSubViewIndex
                              ? 'bg-[#146CE8] text-white'
                              : 'text-[#B7C5D9] hover:text-white'
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-[#B7C5D9] hidden sm:inline">Press ESC to close</span>
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Lightbox Image Viewport */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-[#263956] bg-[#0A1224] flex items-center justify-center max-h-[75vh]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeShot.id}-${activeSubViewIndex}`}
                    src={currentImageSrc}
                    alt={currentTitle}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
                  />
                </AnimatePresence>

                {/* Left Navigation Arrow */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 p-3 rounded-full bg-black/60 hover:bg-[#146CE8] text-white border border-white/20 transition-all hover:scale-105"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 p-3 rounded-full bg-black/60 hover:bg-[#146CE8] text-white border border-white/20 transition-all hover:scale-105"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Thumbnail Strip for Fast Switching */}
              <div className="flex items-center gap-2 mt-4 overflow-x-auto max-w-full py-1">
                {allGalleryItems.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedShotIndex(item.shotIndex);
                      setActiveSubViewIndex(item.subViewIndex);
                    }}
                    className={`w-14 h-9 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                      idx === currentGalleryIndex
                        ? 'border-[#146CE8] scale-105 ring-2 ring-[#146CE8]/40'
                        : 'border-[#263956] opacity-60 hover:opacity-100'
                    }`}
                    title={item.title}
                  >
                    <img src={item.imageSrc} alt={item.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
