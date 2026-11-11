import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onRequestDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Modules', href: '#modules' },
    { label: 'Lifecycle', href: '#lifecycle' },
    { label: 'AI Intelligence', href: '#ai-intelligence' },
    { label: 'Roles & Collaboration', href: '#roles' },
    { label: 'Product Showcase', href: '#showcase' },
    { label: 'About Netlink', href: '#about-netlink' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Netlink Logo & BidSphere Product Branding */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="flex items-center">
              <img
                src="/netlink-logo.png"
                alt="Netlink Software Logo"
                className="h-8 md:h-9 w-auto object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="h-6 w-px bg-slate-300 mx-3 hidden sm:block"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl md:text-2xl tracking-tight text-navy">
                  Bid<span className="text-primary-blue">Sphere</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-blue-50 text-primary-blue border border-blue-200 uppercase">
                  Enterprise
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-slate-500 font-medium -mt-1 hidden sm:block">
                BY NETLINK SOFTWARE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-700 hover:text-primary-blue hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#platform"
              className="px-3.5 py-2 text-xs lg:text-sm font-semibold text-slate-700 hover:text-navy transition-colors rounded-lg hover:bg-slate-100"
            >
              Explore Platform
            </a>
            <button
              onClick={onRequestDemo}
              className="inline-flex items-center justify-center px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-primary-blue hover:bg-primary-blue-600 active:scale-[0.98] rounded-lg shadow-sm hover:shadow transition-all group"
            >
              <span>Request a Demo</span>
              <ChevronRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={onRequestDemo}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-primary-blue rounded-md"
            >
              Demo
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-navy hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-primary-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
            <a
              href="#platform"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200"
            >
              Explore Platform
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestDemo();
              }}
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-primary-blue hover:bg-primary-blue-600 shadow-sm flex items-center justify-center space-x-1"
            >
              <span>Request a Demo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

