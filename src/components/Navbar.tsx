import React, { useEffect, useState } from 'react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string, hash?: string) => void;
  variant?: 'base' | 'white-mode';
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, variant = 'base' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href.startsWith('#')) {
      if (currentPath !== '/') {
        onNavigate('/', href);
      } else {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(href, { offset: 0, duration: 1.2 });
        } else {
          const el = document.querySelector(href);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    } else {
      onNavigate(href);
    }
  };

  const navItems = [
    { number: '01', label: 'Our Salon', href: '#philosophy' },
    { number: '02', label: 'Services & Prices', href: '#services' },
    { number: '03', label: 'Dry Haircuts', href: '#technique' },
    { number: '04', label: 'Reviews', href: '#reviews' },
    { number: '05', label: 'Book Appointment', href: '#booking' },
  ];

  const isTransparentHero = currentPath === '/' && !isScrolled;

  return (
    <>
      <header
        data-wf--navbar--variant={variant}
        role="banner"
        className={`nav_component transition-all duration-300 w-full ${
          isTransparentHero
            ? 'absolute top-0 left-0 right-0 text-[#efe5d7] pt-6 md:pt-8 bg-transparent'
            : 'fixed top-0 left-0 right-0 bg-[#efe5d7]/95 backdrop-blur-md shadow-sm border-b border-[#171411]/10 text-[#171411] py-3.5 md:py-4'
        }`}
        style={{ zIndex: 9990 }}
      >
        <div className="padding-global">
          <div className="container-large max-w-7xl mx-auto flex items-center justify-between">
            {/* Brand Logo & Studio Location Badge */}
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              aria-current={currentPath === '/' ? 'page' : undefined}
              className="nav_brand flex items-center gap-3 text-inherit group cursor-pointer select-none"
            >
              <span className="font-zodiak text-2xl md:text-3xl font-normal tracking-tight text-current">
                Snip 2 Curl
              </span>
            </a>

            {/* Right Controls: Call Button + Book Button + Hamburger Menu */}
            <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4">
              {/* Direct Phone Call Button - Styled identical to Book a Visit */}
              <a
                href="tel:+14152925788"
                aria-label="Call Snip 2 Curl"
                className={`button is-nav font-bold cursor-pointer shrink-0 ${
                  isTransparentHero
                    ? 'bg-[#efe5d7] text-[#171411] hover:bg-white shadow-md'
                    : 'bg-[#efe5d7] text-[#171411] hover:bg-white border border-[#171411]/25'
                }`}
                title="Call Snip 2 Curl"
              >
                <div className="button-text">
                  <div className="button_text">Call Us</div>
                  <div className="button-text-animation">
                    <div className="button_text">Call Us</div>
                  </div>
                </div>
                <svg
                  className="button-image is-nav w-3.5 h-3.5 text-[#171411] fill-[#171411] transition-transform duration-300 group-hover:scale-110 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </a>

              {/* Quick Book CTA Button with Webflow Rolling Animation */}
              <a
                href="#booking"
                onClick={(e) => handleNavClick(e, '#booking')}
                className={`button is-nav font-bold cursor-pointer shrink-0 ${
                  isTransparentHero
                    ? 'bg-[#efe5d7] text-[#171411] hover:bg-white shadow-md'
                    : 'bg-[#171411] text-[#efe5d7] hover:bg-[#25201c]'
                }`}
              >
                <div className="button-text">
                  <div className="button_text">
                    <span className="sm:hidden">Book</span>
                    <span className="hidden sm:inline">Book a Visit</span>
                  </div>
                  <div className="button-text-animation">
                    <div className="button_text">
                      <span className="sm:hidden">Book</span>
                      <span className="hidden sm:inline">Book a Visit</span>
                    </div>
                  </div>
                </div>
                <img
                  src={isTransparentHero ? '/images/curl-mark-dark.svg' : '/images/curl-mark-light.svg'}
                  loading="lazy"
                  decoding="async"
                  alt="Curl Emblem"
                  className="button-image is-nav w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-90"
                />
              </a>

              {/* Universal Hamburger Toggle (Active & Visible on ALL screen sizes: mobile, tablet, and desktop) */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`flex items-center gap-2.5 py-2 px-3.5 rounded-full border transition-all cursor-pointer select-none ${
                  isTransparentHero
                    ? 'border-[#efe5d7]/40 text-[#efe5d7] hover:bg-[#efe5d7]/10'
                    : 'border-[#171411]/20 text-[#171411] hover:bg-[#171411]/5'
                }`}
                aria-label="Toggle Studio Navigation Menu"
              >
                <span className="text-xs uppercase tracking-wider font-mono font-medium">
                  {menuOpen ? 'Close' : 'Menu'}
                </span>
                <div className="w-5 h-4 flex flex-col justify-between items-center py-0.5">
                  <span
                    className={`block h-0.5 w-5 bg-current transition-transform duration-300 origin-center ${
                      menuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                      menuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-current transition-transform duration-300 origin-center ${
                      menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Luxury Menu Overlay on ALL Screen Sizes */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-[#171411] text-[#efe5d7] flex flex-col justify-between overflow-y-auto animate-fadeIn"
          style={{ animationDuration: '0.3s' }}
        >
          {/* Top Bar inside Menu */}
          <div className="padding-global pt-6 md:pt-8 pb-4 border-b border-[#efe5d7]/15">
            <div className="container-large max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-zodiak text-2xl md:text-3xl tracking-tight text-[#efe5d7]">
                  Snip 2 Curl
                </span>
                <span className="text-xs uppercase font-mono tracking-widest text-[#7b5d42]">
                  Directory
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-2 px-4 rounded-full border border-[#efe5d7]/30 text-[#efe5d7] hover:bg-[#efe5d7]/10 transition-colors cursor-pointer text-xs uppercase font-mono tracking-wider"
              >
                <span>Close</span>
                <span className="text-sm font-mono">✕</span>
              </button>
            </div>
          </div>

          {/* Main Menu: 5 Essential Links with High-End Hover Effects */}
          <div className="padding-global py-10 md:py-16 my-auto">
            <div className="container-large max-w-4xl mx-auto">
              <nav className="flex flex-col gap-2 md:gap-3 group/nav">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="group/item flex items-center justify-between py-4 sm:py-5 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl border-b border-[#efe5d7]/10 hover:border-[#c4a482]/40 hover:bg-[#efe5d7]/5 transition-all duration-300 ease-out group-hover/nav:opacity-35 hover:!opacity-100 cursor-pointer"
                  >
                    <div className="flex items-center gap-5 sm:gap-8 transition-transform duration-300 ease-out group-hover/item:translate-x-3 sm:group-hover/item:translate-x-4">
                      <span className="text-xs sm:text-sm font-mono text-[#7b5d42] group-hover/item:text-[#c4a482] transition-colors duration-300">
                        {item.number}
                      </span>
                      <span className="font-zodiak text-2xl sm:text-3xl md:text-5xl font-normal text-[#efe5d7] group-hover/item:text-white transition-colors duration-300 tracking-tight">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center transition-transform duration-300 ease-out group-hover/item:translate-x-1">
                      <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border border-[#efe5d7]/20 text-[#efe5d7]/50 group-hover/item:border-[#c4a482] group-hover/item:text-white group-hover/item:bg-[#c4a482]/20 transition-all duration-300 shadow-sm">
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/item:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Footer Details inside Menu */}
          <div className="padding-global py-6 border-t border-[#efe5d7]/15 bg-[#171411]">
            <div className="container-large max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#efe5d7]/70">
              <div className="text-center md:text-left">
                <span className="text-[#efe5d7] font-semibold">1419 Polk St, San Francisco, CA 94109</span> · Nob Hill / Polk Gulch
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <a
                  href="tel:+14152925788"
                  aria-label="Call Snip 2 Curl"
                  className="button is-nav font-bold cursor-pointer bg-[#efe5d7] hover:bg-white text-[#171411] border border-black/20 shadow-sm inline-flex items-center"
                >
                  <div className="button-text">
                    <div className="button_text">Call Us</div>
                    <div className="button-text-animation">
                      <div className="button_text">Call Us</div>
                    </div>
                  </div>
                  <svg
                    className="button-image is-nav w-3.5 h-3.5 text-[#171411] fill-[#171411] transition-transform duration-300 group-hover:scale-110 shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </a>
                <span>Mon–Sun 10am–7pm</span>
                <a
                  href="https://maps.google.com/?cid=10608357230256150317&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
