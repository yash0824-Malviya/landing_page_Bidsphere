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
      {/* Sticky Enterprise Navigation */}
      <Navbar onRequestDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main>
        {/* Section 2: Hero Section */}
        <Hero onRequestDemo={handleOpenDemo} />

        {/* Section 3: Platform Overview */}
        <PlatformOverview />

        {/* Section 4: Complete BidSphere Modules (All 10 Modules) */}
        <ModulesSection />

        {/* Section 4.6: Dedicated AI-Powered Recommendation Engine Deep Dive */}
        <AiIntelligenceSection />

        {/* Section 5: Complete Procurement Lifecycle (17-Step Zero Dept Head Journey) */}
        <LifecycleSection />

        {/* Section 6: Role-Based Workflow and Collaboration */}
        <RolesSection />

        {/* Section 7 / 8: Actual Product Screenshots Showcase */}
        <ScreenshotsShowcase />

        {/* Module 10: Procurement Command Center & Analytics Showcase */}
        <CommandCenterPreview />

        {/* Enterprise Security, Compliance & Governance */}
        <SecurityCompliance />

        {/* About Netlink Software Private Limited */}
        <AboutNetlink />

        {/* Contact & Consultation Scheduling */}
        <ContactSection onRequestDemo={handleOpenDemo} />
      </main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Interactive Request a Demo Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
