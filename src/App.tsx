import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlatformOverview } from './components/PlatformOverview';
import { ModulesSection } from './components/ModulesSection';
import { AiIntelligenceSection } from './components/AiIntelligenceSection';
import { LifecycleSection } from './components/LifecycleSection';
import { RolesSection } from './components/RolesSection';
import { ScreenshotsShowcase } from './components/ScreenshotsShowcase';
import { CommandCenterPreview } from './components/CommandCenterPreview';
import { SecurityCompliance } from './components/SecurityCompliance';
import { AboutNetlink } from './components/AboutNetlink';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ScrollProgressBar, BackToTopButton } from './components/common/MotionComponents';
import { ErrorBoundary } from './components/common/ErrorBoundary';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-navy-800 font-sans selection:bg-primary-blue selection:text-white">
      {/* Top Reading/Scroll Progress Indicator */}
      <ErrorBoundary componentName="ScrollProgressBar">
        <ScrollProgressBar />
      </ErrorBoundary>

      {/* Sticky Enterprise Navigation */}
      <ErrorBoundary componentName="Navbar">
        <Navbar onRequestDemo={handleOpenDemo} />
      </ErrorBoundary>

      {/* Main Content Sections */}
      <main>
        {/* Section 2: Hero Section */}
        <ErrorBoundary componentName="Hero">
          <Hero onRequestDemo={handleOpenDemo} />
        </ErrorBoundary>

        {/* Section 3: Platform Overview */}
        <ErrorBoundary componentName="PlatformOverview">
          <PlatformOverview />
        </ErrorBoundary>

        {/* Section 4: Complete BidSphere Modules (All 10 Modules) */}
        <ErrorBoundary componentName="ModulesSection">
          <ModulesSection />
        </ErrorBoundary>

        {/* Section 4.6: Dedicated AI-Powered Recommendation Engine Deep Dive */}
        <ErrorBoundary componentName="AiIntelligenceSection">
          <AiIntelligenceSection />
        </ErrorBoundary>

        {/* Section 5: Complete Procurement Lifecycle (17-Step Zero Dept Head Journey) */}
        <ErrorBoundary componentName="LifecycleSection">
          <LifecycleSection />
        </ErrorBoundary>

        {/* Section 6: Role-Based Workflow and Collaboration */}
        <ErrorBoundary componentName="RolesSection">
          <RolesSection />
        </ErrorBoundary>

        {/* Section 7 / 8: Actual Product Screenshots Showcase */}
        <ErrorBoundary componentName="ScreenshotsShowcase">
          <ScreenshotsShowcase />
        </ErrorBoundary>

        {/* Module 10: Procurement Command Center & Analytics Showcase */}
        <ErrorBoundary componentName="CommandCenterPreview">
          <CommandCenterPreview />
        </ErrorBoundary>

        {/* Enterprise Security, Compliance & Governance */}
        <ErrorBoundary componentName="SecurityCompliance">
          <SecurityCompliance />
        </ErrorBoundary>

        {/* About Netlink Software Private Limited */}
        <ErrorBoundary componentName="AboutNetlink">
          <AboutNetlink />
        </ErrorBoundary>

        {/* Contact & Consultation Scheduling */}
        <ErrorBoundary componentName="ContactSection">
          <ContactSection onRequestDemo={handleOpenDemo} />
        </ErrorBoundary>
      </main>

      {/* Enterprise Footer */}
      <ErrorBoundary componentName="Footer">
        <Footer />
      </ErrorBoundary>

      {/* Interactive Request a Demo Modal */}
      <ErrorBoundary componentName="DemoModal">
        <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
      </ErrorBoundary>

      {/* Floating Back to Top Button */}
      <ErrorBoundary componentName="BackToTopButton">
        <BackToTopButton />
      </ErrorBoundary>
    </div>
  );
}
