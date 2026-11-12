import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from '../animations/motion-shim';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Workflow, 
  LayoutDashboard, 
  ArrowRight
} from 'lucide-react';
import { MagneticButton } from './common/MotionComponents';

interface NavbarProps {
  onRequestDemo: () => void;
}

export const Navbar = ({ onRequestDemo }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (dropdownName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleNavLinkClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection((prev) => (prev === section ? null : section));
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: 8, 
      scale: 0.98,
      transition: { duration: 0.15 } 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring' as const, 
        stiffness: 400, 
        damping: 28 
      } 
    },
    exit: { 
      opacity: 0, 
      y: 6, 
      scale: 0.98,
      transition: { duration: 0.12 } 
    }
  };

  return (
    <header
      ref={navContainerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_14px_rgba(15,27,54,0.06)] border-b border-slate-200/90'
          : 'bg-white border-b border-slate-200/70 shadow-[0_1px_3px_rgba(15,27,54,0.03)]'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[78px] flex items-center justify-between">
        {/* =========================================================================
            1. BRANDING AREA
            - Netlink logo on the left
            - BidSphere in clean, bold typography
            - "BY NETLINK SOFTWARE" underneath the product name
            - Removed unnecessary ENTERPRISE badge
            - Balanced spacing with spring hover
            ========================================================================= */}
        <motion.a 
          href="#" 
          className="flex items-center gap-3.5 group select-none flex-shrink-0"
          aria-label="BidSphere by Netlink Software Home"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src="/netlink-logo.png"
            alt="Netlink Software Logo"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="h-7 w-px bg-slate-200 hidden sm:block" aria-hidden="true" />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-xl sm:text-[22px] leading-tight tracking-tight text-[#0F1B36] font-sans">
              Bid<span className="text-[#146CE8]">Sphere</span>
            </span>
            <span className="text-[9px] font-semibold tracking-[0.14em] text-slate-500 uppercase leading-none mt-0.5">
              BY NETLINK SOFTWARE
            </span>
          </div>
        </motion.a>

        {/* =========================================================================
            2. DESKTOP NAVIGATION
            Single-line structure on standard desktop screens:
            - Platform
            - Solutions (Dropdown: Modules & Role-based workspaces)
            - Procurement Lifecycle
            - AI Intelligence
            - Resources (Dropdown: UI Showcase, Security, Workflow)
            - About
            - Contact
            ========================================================================= */}
        <nav 
          className="hidden lg:flex items-center gap-1 xl:gap-2 whitespace-nowrap"
          aria-label="Main Navigation"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {/* Item 1: Platform */}
          <a
            href="#platform"
            onClick={handleNavLinkClick}
            onMouseEnter={() => setHoveredLink('platform')}
            className="relative px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-medium text-[#0F1B36] hover:text-[#146CE8] rounded-md transition-colors"
          >
            {hoveredLink === 'platform' && (
              <motion.span
                layoutId="navbar-hover"
                className="absolute inset-0 bg-slate-100/80 rounded-md -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <span>Platform</span>
          </a>

          {/* Item 2: Solutions (Dropdown) */}
          <div 
            className="relative"
            onMouseEnter={() => {
              setHoveredLink('solutions');
              handleMouseEnter('solutions');
            }}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => handleDropdownToggle('solutions')}
              aria-expanded={activeDropdown === 'solutions'}
              aria-haspopup="true"
              className={`relative inline-flex items-center gap-1 px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-medium rounded-md transition-colors ${
                activeDropdown === 'solutions'
                  ? 'text-[#146CE8] bg-blue-50/60'
                  : 'text-[#0F1B36] hover:text-[#146CE8]'
              }`}
            >
              {hoveredLink === 'solutions' && activeDropdown !== 'solutions' && (
                <motion.span
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-slate-100/80 rounded-md -z-10"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                />
              )}
              <span>Solutions</span>
              <ChevronDown 
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'solutions' ? 'rotate-180 text-[#146CE8]' : 'text-slate-400'
                }`} 
              />
            </button>

            {/* Solutions Dropdown Menu */}
            <AnimatePresence>
              {activeDropdown === 'solutions' && (
                <motion.div 
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[560px] z-50 pointer-events-auto"
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-xl shadow-[0_16px_40px_-6px_rgba(15,27,54,0.14)] border border-slate-100 p-5">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Left Column: Core Modules */}
                      <div>
                        <div className="flex items-center gap-1.5 pb-2.5 mb-2 border-b border-slate-100">
                          <Layers className="w-3.5 h-3.5 text-[#146CE8]" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Procurement Modules
                          </span>
                        </div>
                        <div className="space-y-1">
                          <a
                            href="#modules"
                            onClick={handleNavLinkClick}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-xs font-semibold text-[#0F1B36] group-hover:text-[#146CE8] transition-colors">
                              E-Procurement & PR Management
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              Indent creation, zero-head approval paths & catalogs
                            </div>
                          </a>
                          <a
                            href="#modules"
                            onClick={handleNavLinkClick}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-xs font-semibold text-[#0F1B36] group-hover:text-[#146CE8] transition-colors">
                              Sealed RFQ & Tendering
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              Tamper-proof encrypted bid submission & opening
                            </div>
                          </a>
                          <a
                            href="#modules"
                            onClick={handleNavLinkClick}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-xs font-semibold text-[#0F1B36] group-hover:text-[#146CE8] transition-colors">
                              Dynamic Reverse Auctions
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              Real-time supplier pricing showdowns with overtime
                            </div>
                          </a>
                          <a
                            href="#modules"
                            onClick={handleNavLinkClick}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-xs font-semibold text-[#0F1B36] group-hover:text-[#146CE8] transition-colors">
                              Contract Lifecycle (CLM) & E-Sign
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              Dual cryptographic digital sign & clause management
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Right Column: Roles & Workspaces */}
                      <div>
                        <div className="flex items-center gap-1.5 pb-2.5 mb-2 border-b border-slate-100">
                          <Users className="w-3.5 h-3.5 text-[#146CE8]" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Role Workspaces
                          </span>
                        </div>
                        <div className="space-y-1">
                          <a
                            href="#roles"
                            onClick={handleNavLinkClick}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-xs font-semibold text-[#0F1B36] group-hover:text-[#146CE8] transition-colors">
                              Sourcing & Procurement Leads
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              Commercial evaluations, live auctions & PO creation
                            </div>
                          </a>
                          <a
                            href="#roles"
                            onClick={handleNavLinkClick}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-xs font-semibold text-[#0F1B36] group-hover:text-[#146CE8] transition-colors">
                              Department Requisitioners
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              Simple indent creation & budget validation
                            </div>
                          </a>
                          <a
                            href="#roles"
                            onClick={handleNavLinkClick}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-xs font-semibold text-[#0F1B36] group-hover:text-[#146CE8] transition-colors">
                              Finance & Audit Controllers
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              3-way PO-GRN-Invoice matching & audit logs
                            </div>
                          </a>
                          <a
                            href="#roles"
                            onClick={handleNavLinkClick}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-xs font-semibold text-[#0F1B36] group-hover:text-[#146CE8] transition-colors">
                              External Vendors & Suppliers
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              Tokenized quotation portal, reverse bids & e-sign
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Dropdown Footer Link */}
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500">
                        Explore all 10 unified enterprise modules
                      </span>
                      <a
                        href="#modules"
                        onClick={handleNavLinkClick}
                        className="inline-flex items-center gap-1 font-semibold text-[#146CE8] hover:text-[#0D56C0] transition-colors"
                      >
                        <span>View All Modules</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Item 3: Procurement Lifecycle */}
          <a
            href="#lifecycle"
            onClick={handleNavLinkClick}
            onMouseEnter={() => setHoveredLink('lifecycle')}
            className="relative px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-medium text-[#0F1B36] hover:text-[#146CE8] rounded-md transition-colors"
          >
            {hoveredLink === 'lifecycle' && (
              <motion.span
                layoutId="navbar-hover"
                className="absolute inset-0 bg-slate-100/80 rounded-md -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <span>Procurement Lifecycle</span>
          </a>

          {/* Item 4: AI Intelligence */}
          <a
            href="#ai-intelligence"
            onClick={handleNavLinkClick}
            onMouseEnter={() => setHoveredLink('ai-intelligence')}
            className="relative inline-flex items-center gap-1 px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-medium text-[#0F1B36] hover:text-[#146CE8] rounded-md transition-colors group"
          >
            {hoveredLink === 'ai-intelligence' && (
              <motion.span
                layoutId="navbar-hover"
                className="absolute inset-0 bg-slate-100/80 rounded-md -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <span>AI Intelligence</span>
            <Sparkles className="w-3 h-3 text-[#146CE8] opacity-75 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Item 5: Resources (Dropdown) */}
          <div 
            className="relative"
            onMouseEnter={() => {
              setHoveredLink('resources');
              handleMouseEnter('resources');
            }}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => handleDropdownToggle('resources')}
              aria-expanded={activeDropdown === 'resources'}
              aria-haspopup="true"
              className={`relative inline-flex items-center gap-1 px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-medium rounded-md transition-colors ${
                activeDropdown === 'resources'
                  ? 'text-[#146CE8] bg-blue-50/60'
                  : 'text-[#0F1B36] hover:text-[#146CE8]'
              }`}
            >
              {hoveredLink === 'resources' && activeDropdown !== 'resources' && (
                <motion.span
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-slate-100/80 rounded-md -z-10"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                />
              )}
              <span>Resources</span>
              <ChevronDown 
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'resources' ? 'rotate-180 text-[#146CE8]' : 'text-slate-400'
                }`} 
              />
            </button>

            {/* Resources Dropdown Menu */}
            <AnimatePresence>
              {activeDropdown === 'resources' && (
                <motion.div 
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[320px] z-50 pointer-events-auto"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-xl shadow-[0_16px_40px_-6px_rgba(15,27,54,0.14)] border border-slate-100 p-3 space-y-1">
                    <a
                      href="#showcase"
                      onClick={handleNavLinkClick}
                      className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#146CE8] mt-0.5">
                        <LayoutDashboard className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#0F1B36] group-hover:text-[#146CE8] transition-colors">
                          Product UI Tour
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Live screenshots of supplier & admin portals
                        </div>
                      </div>
                    </a>

                    <a
                      href="#lifecycle"
                      onClick={handleNavLinkClick}
                      className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#146CE8] mt-0.5">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#0F1B36] group-hover:text-[#146CE8] transition-colors">
                          17-Step Lifecycle Diagram
                        </div>
                        <div className="text-[11px] text-slate-500">
                          End-to-end zero-head procurement journey
                        </div>
                      </div>
                    </a>

                    <a
                      href="#platform"
                      onClick={handleNavLinkClick}
                      className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#146CE8] mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#0F1B36] group-hover:text-[#146CE8] transition-colors">
                          Security & Governance
                        </div>
                        <div className="text-[11px] text-slate-500">
                          AES-256 encryption, SOC-2 & SHA-256 audit logs
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Item 6: About */}
          <a
            href="#about-netlink"
            onClick={handleNavLinkClick}
            onMouseEnter={() => setHoveredLink('about')}
            className="relative px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-medium text-[#0F1B36] hover:text-[#146CE8] rounded-md transition-colors"
          >
            {hoveredLink === 'about' && (
              <motion.span
                layoutId="navbar-hover"
                className="absolute inset-0 bg-slate-100/80 rounded-md -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <span>About</span>
          </a>

          {/* Item 7: Contact */}
          <a
            href="#contact"
            onClick={handleNavLinkClick}
            onMouseEnter={() => setHoveredLink('contact')}
            className="relative px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-medium text-[#0F1B36] hover:text-[#146CE8] rounded-md transition-colors"
          >
            {hoveredLink === 'contact' && (
              <motion.span
                layoutId="navbar-hover"
                className="absolute inset-0 bg-slate-100/80 rounded-md -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <span>Contact</span>
          </a>
        </nav>

        {/* =========================================================================
            3. PRIMARY CTA BUTTON (DESKTOP)
            - Magnetic CTA response to pointer on desktop
            - Corporate blue #146CE8
            - Medium-sized button
            - Consistent height with navigation (h-10)
            - Subtle hover animation
            ========================================================================= */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <MagneticButton
            onClick={onRequestDemo}
            className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold text-white bg-[#146CE8] hover:bg-[#0D56C0] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#146CE8]/40 focus:ring-offset-2"
          >
            Request a Demo
          </MagneticButton>
        </div>

        {/* =========================================================================
            TABLET & MOBILE CONTROLS
            - Visible on screens < lg
            - Direct CTA for fast conversion
            - Animated hamburger menu button
            ========================================================================= */}
        <div className="flex items-center lg:hidden gap-2.5">
          <motion.button
            type="button"
            onClick={onRequestDemo}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center h-9 px-3.5 text-xs font-semibold text-white bg-[#146CE8] hover:bg-[#0D56C0] rounded-md shadow-sm transition-all whitespace-nowrap"
          >
            Request a Demo
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.92 }}
            className="inline-flex items-center justify-center p-2 rounded-md text-[#0F1B36] hover:text-[#146CE8] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#146CE8]/40"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* =========================================================================
          MOBILE / TABLET DRAWER MENU
          - Clean slide-down accordion drawer with Framer Motion AnimatePresence
          ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="lg:hidden border-t border-slate-200/80 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-1">
              {/* Mobile Item 1: Platform */}
              <a
                href="#platform"
                onClick={handleNavLinkClick}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0F1B36] hover:bg-blue-50 hover:text-[#146CE8] transition-colors"
              >
                Platform
              </a>

              {/* Mobile Item 2: Solutions (Accordion) */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('solutions')}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0F1B36] hover:bg-blue-50 hover:text-[#146CE8] transition-colors"
                >
                  <span>Solutions</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                      mobileExpandedSection === 'solutions' ? 'rotate-180 text-[#146CE8]' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {mobileExpandedSection === 'solutions' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg my-1 overflow-hidden"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 pt-1.5">
                        Core Modules
                      </div>
                      <a
                        href="#modules"
                        onClick={handleNavLinkClick}
                        className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#146CE8] transition-colors"
                      >
                        E-Procurement & PR Management
                      </a>
                      <a
                        href="#modules"
                        onClick={handleNavLinkClick}
                        className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#146CE8] transition-colors"
                      >
                        Sealed RFQ & Tendering
                      </a>
                      <a
                        href="#modules"
                        onClick={handleNavLinkClick}
                        className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#146CE8] transition-colors"
                      >
                        Dynamic Reverse Auctions
                      </a>
                      <a
                        href="#modules"
                        onClick={handleNavLinkClick}
                        className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#146CE8] transition-colors"
                      >
                        Contract Lifecycle (CLM) & E-Sign
                      </a>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 pt-2">
                        Role Workspaces
                      </div>
                      <a
                        href="#roles"
                        onClick={handleNavLinkClick}
                        className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#146CE8] transition-colors"
                      >
                        Sourcing & Procurement Leads
                      </a>
                      <a
                        href="#roles"
                        onClick={handleNavLinkClick}
                        className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#146CE8] transition-colors"
                      >
                        Department Requisitioners
                      </a>
                      <a
                        href="#roles"
                        onClick={handleNavLinkClick}
                        className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#146CE8] transition-colors"
                      >
                        Finance & Audit Controllers
                      </a>
                      <a
                        href="#roles"
                        onClick={handleNavLinkClick}
                        className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#146CE8] transition-colors"
                      >
                        External Vendors & Suppliers
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Item 3: Procurement Lifecycle */}
              <a
                href="#lifecycle"
                onClick={handleNavLinkClick}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0F1B36] hover:bg-blue-50 hover:text-[#146CE8] transition-colors"
              >
                Procurement Lifecycle
              </a>

              {/* Mobile Item 4: AI Intelligence */}
              <a
                href="#ai-intelligence"
                onClick={handleNavLinkClick}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0F1B36] hover:bg-blue-50 hover:text-[#146CE8] transition-colors"
              >
                <span>AI Intelligence</span>
                <Sparkles className="w-3.5 h-3.5 text-[#146CE8]" />
              </a>

              {/* Mobile Item 5: Resources (Accordion) */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('resources')}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0F1B36] hover:bg-blue-50 hover:text-[#146CE8] transition-colors"
                >
                  <span>Resources</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                      mobileExpandedSection === 'resources' ? 'rotate-180 text-[#146CE8]' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {mobileExpandedSection === 'resources' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg my-1 overflow-hidden"
                    >
                      <a
                        href="#showcase"
                        onClick={handleNavLinkClick}
                        className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#146CE8] transition-colors"
                      >
                        Product UI Tour & Screenshots
                      </a>
                      <a
                        href="#lifecycle"
                        onClick={handleNavLinkClick}
                        className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#146CE8] transition-colors"
                      >
                        17-Step Procurement Journey
                      </a>
                      <a
                        href="#platform"
                        onClick={handleNavLinkClick}
                        className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#146CE8] transition-colors"
                      >
                        Security, Encryption & Compliance
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Item 6: About */}
              <a
                href="#about-netlink"
                onClick={handleNavLinkClick}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0F1B36] hover:bg-blue-50 hover:text-[#146CE8] transition-colors"
              >
                About Netlink
              </a>

              {/* Mobile Item 7: Contact */}
              <a
                href="#contact"
                onClick={handleNavLinkClick}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0F1B36] hover:bg-blue-50 hover:text-[#146CE8] transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Primary CTA in Mobile Drawer */}
            <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2">
              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo();
                }}
                className="w-full h-11 rounded-lg text-sm font-semibold text-white bg-[#146CE8] hover:bg-[#0D56C0] shadow-sm transition-all flex items-center justify-center"
              >
                Request a Demo
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
