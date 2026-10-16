import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HomePageProps {
  onNavigate: (path: string, hash?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const breathVideoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Dry Curly Haircut',
    date: '',
    time: 'Morning (10:00 AM – 1:00 PM)',
    notes: '',
  });
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [cardsFanned, setCardsFanned] = useState(false);

  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.play().catch(() => {});
    }
    if (breathVideoRef.current) {
      breathVideoRef.current.play().catch(() => {});
    }
  }, []);

  // GSAP ScrollTrigger & Motion Movement across all 13 sections
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance Animations (Page Load / Preloader exit)
      gsap.fromTo(
        '.hero-char',
        { opacity: 0, y: 40, rotateX: 45 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.04,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      gsap.fromTo(
        '.hero-icon',
        { scale: 0, opacity: 0, rotate: -90 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1.1,
          ease: 'elastic.out(1.2, 0.4)',
          delay: 0.65,
        }
      );

      gsap.fromTo(
        '.hero-subtitle-text',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.8 }
      );

      gsap.fromTo(
        '.hero_bottom',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 1.0 }
      );

      gsap.fromTo(
        '.hero-bg-video-wrapper',
        { scale: 1.08 },
        { scale: 1, duration: 1.6, ease: 'power2.out' }
      );

      // 2. Section 02 (Philosophy): Stacked Cards Scroll Fan-Out
      gsap.fromTo(
        '.philosophy-card-left',
        { x: -10, rotate: -2, y: 20 },
        {
          x: -55,
          rotate: -7,
          y: 0,
          scrollTrigger: {
            trigger: '#philosophy',
            start: 'top 85%',
            end: 'center 40%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        '.philosophy-card-right',
        { x: 10, rotate: 2, y: 20 },
        {
          x: 55,
          rotate: 7,
          y: 0,
          scrollTrigger: {
            trigger: '#philosophy',
            start: 'top 85%',
            end: 'center 40%',
            scrub: 1,
          },
        }
      );

      // 3. Section 03 (The Studio): Image Holder Zoom on Scroll
      gsap.fromTo(
        '.studio-img-holder',
        { scale: 0.92, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: '#studio',
            start: 'top 85%',
            end: 'center center',
            scrub: 1,
          },
        }
      );

      // 4. Section 04 (Signature Services): Staggered Cards Reveal
      gsap.fromTo(
        '.service-card-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#services',
            start: 'top 75%',
          },
        }
      );

      // 5. Section 05 (The Technique): Holder Zoom & Stats Reveal
      gsap.fromTo(
        '.technique-img-holder',
        { scale: 0.92, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: '#technique',
            start: 'top 85%',
            end: 'center center',
            scrub: 1,
          },
        }
      );

      // 6. Section 06 (Full-Bleed Atmosphere Video): Scale-up scroll animation
      gsap.fromTo(
        '.atmosphere-video-box',
        { scale: 0.88 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: '#atmosphere',
            start: 'top 95%',
            end: 'center center',
            scrub: 1,
          },
        }
      );

      // 7. Section 07 (Client Reviews): Staggered Reviews Reveal
      gsap.fromTo(
        '.review-card-item',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#reviews',
            start: 'top 75%',
          },
        }
      );

      // 8. Section 08 (Dimensional Color): Curved Image Holder Zoom
      gsap.fromTo(
        '.color-img-holder',
        { scale: 0.92, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: '#color',
            start: 'top 85%',
            end: 'center center',
            scrub: 1,
          },
        }
      );

      // 9. Section 09 (Perms & Straightening): Staggered Transformation Cards
      gsap.fromTo(
        '.perm-card-item',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#transformations',
            start: 'top 75%',
          },
        }
      );

      // 10. Section 10 (Botanical Spa): Basin Image Holder Zoom
      gsap.fromTo(
        '.botanical-img-holder',
        { scale: 0.92, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: '#botanicals',
            start: 'top 85%',
            end: 'center center',
            scrub: 1,
          },
        }
      );

      // 11. Section 11 (Booking Sanctuary): Luxury Form Reveal
      gsap.fromTo(
        '.booking-form-box',
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#booking',
            start: 'top 75%',
          },
        }
      );

      // 12. Section 12 (Location & Hours): Verified Map & Details Reveal
      gsap.fromTo(
        '.location-map-box',
        { opacity: 0, x: -35 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#location',
            start: 'top 75%',
          },
        }
      );

      // 13. Section 13 (Footer): Editorial Reveal
      gsap.fromTo(
        '.footer-item-reveal',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#footer-section',
            start: 'top 92%',
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('submitting');
    setTimeout(() => {
      setBookingStatus('success');
    }, 600);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(hash, { offset: 0, duration: 1.2 });
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={rootRef} className="snip2curl-site bg-[#efe5d7] text-[#171411]">
      {/* =========================================================================
          SECTION 01: HERO — THE SANCTUARY (100vh)
          ========================================================================= */}
      <section id="hero" className="section_hero relative min-h-screen h-screen flex flex-col justify-between overflow-hidden">
        <div className="padding-global relative z-10 my-auto">
          <div className="container-large">
            <div className="hero-component">
              <div className="hero_content">
                <div className="hero_content-top">
                  {/* Subtle Curl Star Emblem with Spring Motion */}
                  <div className="hero-icon mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#efe5d7]" viewBox="0 0 30 30" fill="none">
                      <path d="M15 0L17.4578 11.4454C17.5758 11.995 18.005 12.4242 18.5546 12.5422L30 15L18.5546 17.4578C18.005 17.5758 17.5758 18.005 17.4578 18.5546L15 30L12.5422 18.5546C12.4242 18.005 11.995 17.5758 11.4454 17.4578L0 15L11.4454 12.5422C11.995 12.4242 12.4242 11.995 12.5422 11.4454L15 0Z" fill="currentColor"/>
                    </svg>
                  </div>

                  {/* Character-by-character Split Text Entrance */}
                  <h1 className="heading-style-h1 font-zodiak select-none tracking-tight flex flex-wrap justify-center overflow-hidden">
                    {'Snip 2 Curl'.split('').map((char, index) => (
                      <span key={index} className="hero-char inline-block will-change-transform">
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </h1>
                </div>

                <div className="hero-subtitle">
                  <p className="hero-subtitle-text text-sm md:text-base lg:text-lg">
                    San Francisco’s friendly curly hair salon on Polk Street. We cut your hair dry so your natural curls look great and feel easy to style every single day.
                  </p>
                </div>
              </div>

              {/* Bottom Discover Action & Direct Call with Rolling Text */}
              <div className="hero-actions-wrapper flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-2">
                <a
                  href="#philosophy"
                  onClick={(e) => handleSmoothScroll(e, '#philosophy')}
                  className="hero_bottom w-inline-block group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="button-text">
                      <div className="button_text text-size-regular">See Our Salon</div>
                      <div className="button-text-animation">
                        <div className="button_text text-size-regular">See Our Salon</div>
                      </div>
                    </div>
                    <span className="text-xs transition-transform duration-300 group-hover:translate-y-1">
                      ↓
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+14152925788"
                  aria-label="Call Snip 2 Curl"
                  className="button is-nav font-bold bg-[#efe5d7] hover:bg-white text-[#171411] border border-[#171411]/25 shadow-xl font-cabinet inline-flex items-center gap-2 cursor-pointer"
                  title="Call Snip 2 Curl"
                >
                  <div className="button-text">
                    <div className="button_text">Call Us</div>
                    <div className="button-text-animation">
                      <div className="button_text">Call Us</div>
                    </div>
                  </div>
                  <svg className="button-image is-nav w-3.5 h-3.5 text-[#171411] fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Framed Cinematic Background Video with Parallax Scale */}
        <div className="hero-background">
          <div className="hero-bg-video-wrapper background-video w-background-video w-background-video-atom">
            <video
              ref={heroVideoRef}
              autoPlay
              loop
              muted
              playsInline
              style={{ backgroundImage: "url('/images/salon_interior.jpg')" }}
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
              <source
                src="/videos/hero.mp4"
                type="video/mp4"
              />
            </video>
            <div className="video-overlay light"></div>
          </div>
          <div className="video-placeholder pointer-events-none">
            <img
              src="/images/salon_interior.jpg"
              loading="lazy"
              alt="Snip 2 Curl Salon Interior"
              className="image is-radius w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: PHILOSOPHY — TEXTURE FIRST (100vh)
          ========================================================================= */}
      <section id="philosophy" className="min-h-screen lg:h-screen py-16 sm:py-20 lg:py-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 border-b border-[#171411]/10">
        <div className="container-large max-w-6xl mx-auto w-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Reference Signature Stacked Photo Cards Fan-Out Interaction */}
            <div
              className="relative h-[280px] sm:h-[360px] md:h-[480px] lg:h-[62vh] flex items-center justify-center cursor-pointer select-none"
              onMouseEnter={() => setCardsFanned(true)}
              onMouseLeave={() => setCardsFanned(false)}
              onClick={() => setCardsFanned(!cardsFanned)}
            >
              {/* Card 1: Left Rotated Card with Scroll Fan-Out */}
              <div
                className={`philosophy-card-left absolute w-[75%] h-[82%] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border border-[#171411]/20 p-2 md:p-3 bg-[#e8ddcc] shadow-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  cardsFanned
                    ? '-translate-x-10 sm:-translate-x-16 md:-translate-x-20 -rotate-10 scale-95 z-10'
                    : '-translate-x-2 sm:-translate-x-3 -rotate-2 z-10'
                }`}
              >
                <div className="w-full h-full rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                  <img
                    src="/images/curl_natural_shape.jpg"
                    loading="lazy"
                    decoding="async"
                    alt="Snip 2 Curl Philosophy - Natural Curl Shape and Volume"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-[#171411]/85 backdrop-blur-md text-[#efe5d7] text-[10px] md:text-xs px-2.5 py-1 rounded-full font-mono">
                    01 · Natural Shape
                  </div>
                </div>
              </div>

              {/* Card 3: Right Rotated Card with Scroll Fan-Out */}
              <div
                className={`philosophy-card-right absolute w-[75%] h-[82%] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border border-[#171411]/20 p-2 md:p-3 bg-[#e8ddcc] shadow-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  cardsFanned
                    ? 'translate-x-10 sm:translate-x-16 md:translate-x-20 rotate-10 scale-95 z-20'
                    : 'translate-x-2 sm:translate-x-3 rotate-2 z-20'
                }`}
              >
                <div className="w-full h-full rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                  <img
                    src="/images/curl_soft_bounce.jpg"
                    loading="lazy"
                    decoding="async"
                    alt="Snip 2 Curl Philosophy - Defined Curls and Soft Bounce"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-[#171411]/85 backdrop-blur-md text-[#efe5d7] text-[10px] md:text-xs px-2.5 py-1 rounded-full font-mono">
                    03 · Soft Bounce
                  </div>
                </div>
              </div>

              {/* Card 2: Centerpiece Card */}
              <div
                className={`absolute w-[78%] h-[86%] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border border-[#171411]/25 p-2 md:p-3 bg-[#efe5d7] shadow-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-30 ${
                  cardsFanned ? '-translate-y-2 sm:-translate-y-3 scale-105' : 'translate-y-0'
                }`}
              >
                <div className="w-full h-full rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                  <img
                    src="/images/curl_dry_cut.jpg"
                    loading="lazy"
                    decoding="async"
                    alt="Snip 2 Curl Philosophy - Artisan Dry Haircut Craftsmanship"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#171411]/85 backdrop-blur-md text-[#efe5d7] text-[10px] md:text-xs px-2.5 py-1 rounded-full font-mono">
                    02 · Dry Haircuts
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-[#7b5d42] text-[#efe5d7] text-[9px] sm:text-[10px] uppercase tracking-widest font-mono px-2.5 py-1 rounded-full">
                    {cardsFanned ? 'Tap to close' : 'Tap to fan'}
                  </div>
                </div>
              </div>
            </div>

            {/* High-Contrast Editorial Content */}
            <div className="flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2 sm:mb-3">
                How We Cut Hair
              </div>
              <h2 className="font-zodiak text-2xl sm:text-3xl md:text-5xl font-normal leading-tight text-[#171411] mb-4 sm:mb-6">
                Every curl has its own shape, and we love them all.
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-[#171411]/85 leading-relaxed font-cabinet">
                <p>
                  We never fight your hair's natural pattern—we work with it. In our Polk Street salon, we look at your curls while they are dry and relaxed.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#171411]/70">
                  Whether you have loose waves or tight coils, we cut curl by curl so your hair falls into place naturally every day without any fuss.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, '#services')}
                  className="button inline-flex"
                >
                  <div className="button-text">
                    <div className="button_text">See Haircuts &amp; Prices</div>
                    <div className="button-text-animation">
                      <div className="button_text">See Haircuts &amp; Prices</div>
                    </div>
                  </div>
                  <img src="/images/curl-mark-light.svg" alt="Curl Icon" className="button-image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: THE STUDIO — 1419 POLK STREET (100vh)
          ========================================================================= */}
      <section id="studio" className="min-h-screen lg:h-screen py-16 sm:py-20 lg:py-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 bg-[#e8ddcc]/30 border-b border-[#171411]/10">
        <div className="container-large max-w-6xl mx-auto w-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Left text */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2 sm:mb-3">
                Our Neighborhood
              </div>
              <h2 className="font-zodiak text-2xl sm:text-3xl md:text-5xl font-normal leading-tight text-[#171411] mb-4 sm:mb-6">
                A warm, welcoming salon on Polk Street.
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#171411]/85 leading-relaxed mb-4">
                Snip 2 Curl is located right between California and Pine Street in San Francisco. Our space is bright, comfortable, and friendly. We make you feel relaxed and at home from the moment you walk through the door.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4 pt-4 border-t border-[#171411]/15 text-xs text-[#171411]/75 font-mono">
                <div>
                  <div className="font-semibold text-[#171411]">LOCATION</div>
                  <div>1419 Polk St, SF</div>
                </div>
                <div>
                  <div className="font-semibold text-[#171411]">OPEN DAILY</div>
                  <div>10:00 AM – 7:00 PM</div>
                </div>
              </div>
            </div>

            {/* Right: Bordered Curved Long Holder with GSAP Scroll Zoom */}
            <div className="studio-img-holder bordered-curved-holder relative rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border border-[#171411]/20 p-2 md:p-3 bg-[#e8ddcc]/50 shadow-xl overflow-hidden h-[240px] sm:h-[320px] md:h-[420px] lg:h-[65vh] order-1 lg:order-2">
              <div className="w-full h-full rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                <img
                  src="/images/salon_interior.jpg"
                  loading="lazy"
                  decoding="async"
                  alt="Snip 2 Curl Salon Interior in Polk Gulch"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#171411]/85 backdrop-blur-md text-[#efe5d7] text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full font-mono tracking-wider">
                  Our San Francisco Salon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: SIGNATURE SERVICES — THE MENU (100vh)
          ========================================================================= */}
      <section id="services" className="min-h-screen lg:h-screen py-16 sm:py-20 lg:py-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 border-b border-[#171411]/10">
        <div className="container-large max-w-6xl mx-auto w-full flex flex-col justify-center">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2">
              What We Offer
            </div>
            <h2 className="font-zodiak text-2xl sm:text-3xl md:text-5xl text-[#171411] font-normal">
              Our Hair Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-6">
            {/* Service 1 */}
            <div className="service-card-item bg-[#e8ddcc]/60 border border-[#171411]/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:border-[#171411]/30 transition-all duration-300">
              <div>
                <span className="text-xs font-mono text-[#7b5d42] block mb-2 sm:mb-3">01 / HAIRCUTS</span>
                <h3 className="font-zodiak text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-[#171411]">Dry Curly Haircut</h3>
                <p className="text-xs sm:text-sm text-[#171411]/75 leading-relaxed">
                  Cut dry, curl by curl, so you get the exact shape and bounce you want. Includes a relaxing shampoo and wash.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#171411]/10 text-[11px] sm:text-xs font-medium text-[#7b5d42]">
                For All Waves &amp; Curls (2A to 4C)
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card-item bg-[#e8ddcc]/60 border border-[#171411]/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:border-[#171411]/30 transition-all duration-300">
              <div>
                <span className="text-xs font-mono text-[#7b5d42] block mb-2 sm:mb-3">02 / PERMS</span>
                <h3 className="font-zodiak text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-[#171411]">Soft Wave Perms</h3>
                <p className="text-xs sm:text-sm text-[#171411]/75 leading-relaxed">
                  Gentle Japanese perms that give you soft, natural waves. No crunch, no frizz, and no strong chemical smells.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#171411]/10 text-[11px] sm:text-xs font-medium text-[#7b5d42]">
                Soft Waves &amp; Natural Volume
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card-item bg-[#e8ddcc]/60 border border-[#171411]/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:border-[#171411]/30 transition-all duration-300">
              <div>
                <span className="text-xs font-mono text-[#7b5d42] block mb-2 sm:mb-3">03 / STRAIGHTENING</span>
                <h3 className="font-zodiak text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-[#171411]">Japanese Straightening</h3>
                <p className="text-xs sm:text-sm text-[#171411]/75 leading-relaxed">
                  A permanent treatment that turns thick, frizzy, or unruly hair into smooth, silky, shiny straight hair.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#171411]/10 text-[11px] sm:text-xs font-medium text-[#7b5d42]">
                Permanent Smooth Shine
              </div>
            </div>

            {/* Service 4 */}
            <div className="service-card-item bg-[#e8ddcc]/60 border border-[#171411]/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:border-[#171411]/30 transition-all duration-300">
              <div>
                <span className="text-xs font-mono text-[#7b5d42] block mb-2 sm:mb-3">04 / COLOR</span>
                <h3 className="font-zodiak text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-[#171411]">Highlights &amp; Balayage</h3>
                <p className="text-xs sm:text-sm text-[#171411]/75 leading-relaxed">
                  Soft, natural-looking highlights painted by hand. We use gentle color to keep your curls healthy, soft, and bouncy.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#171411]/10 text-[11px] sm:text-xs font-medium text-[#7b5d42]">
                Natural Sunlit Highlights
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <a
              href="#booking"
              onClick={(e) => handleSmoothScroll(e, '#booking')}
              className="button inline-flex"
            >
              <div className="button-text">
                <div className="button_text">Book an Appointment</div>
                <div className="button-text-animation">
                  <div className="button_text">Book an Appointment</div>
                </div>
              </div>
              <img src="/images/curl-mark-light.svg" alt="Curl Mark" className="button-image" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: THE TECHNIQUE — DRY SCULPTING (100vh)
          ========================================================================= */}
      <section id="technique" className="min-h-screen lg:h-screen py-16 sm:py-20 lg:py-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 bg-[#e8ddcc]/20 border-b border-[#171411]/10">
        <div className="container-large max-w-6xl mx-auto w-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Left: Bordered Curved Long Holder */}
            <div className="technique-img-holder bordered-curved-holder relative rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border border-[#171411]/20 p-2 md:p-3 bg-[#e8ddcc]/50 shadow-xl overflow-hidden h-[240px] sm:h-[320px] md:h-[420px] lg:h-[65vh]">
              <div className="w-full h-full rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                <img
                  src="/images/curl_sculpting_hands.jpg"
                  loading="lazy"
                  decoding="async"
                  alt="Precision dry cutting curl technique"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#171411]/85 backdrop-blur-md text-[#efe5d7] text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full font-mono tracking-wider">
                  Dry Curl Cutting
                </div>
              </div>
            </div>

            {/* Right: Technique Breakdown */}
            <div className="flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2 sm:mb-3">
                Our Cutting Method
              </div>
              <h2 className="font-zodiak text-2xl sm:text-3xl md:text-5xl font-normal leading-tight text-[#171411] mb-4 sm:mb-6">
                Why we cut curly hair while it's dry.
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-[#171411]/85 leading-relaxed font-cabinet">
                <p>
                  When hair is wet, curls stretch out and look totally different. Once dry, each curl shrinks up differently. That's why wet haircuts often turn out shorter or more uneven than you wanted.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#171411]/70">
                  At Snip 2 Curl, Sunny cuts your hair dry, curl by curl, in its normal everyday shape. You see the real shape as we cut it, so you leave happy with zero surprises.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex items-center gap-5 sm:gap-6">
                <div>
                  <div className="font-zodiak text-2xl sm:text-3xl font-normal text-[#171411]">100%</div>
                  <div className="text-[11px] sm:text-xs text-[#171411]/60 uppercase tracking-wider">Dry Cut Accuracy</div>
                </div>
                <div className="w-[1px] h-8 sm:h-10 bg-[#171411]/20"></div>
                <div>
                  <div className="font-zodiak text-2xl sm:text-3xl font-normal text-[#171411]">0%</div>
                  <div className="text-[11px] sm:text-xs text-[#171411]/60 uppercase tracking-wider">Haircut Surprises</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: FULL-BLEED MOOD & MOTION — TEXTURE (100vh)
          ========================================================================= */}
      <section id="atmosphere" className="section_cta relative min-h-screen lg:h-screen py-12 sm:py-16 lg:py-0 flex flex-col justify-center items-center overflow-hidden p-3 sm:p-6 md:p-8 border-b border-[#171411]/10">
        <div className="atmosphere-video-box cta-video_background relative w-full h-[420px] sm:h-[520px] md:h-[650px] lg:h-[85vh] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col justify-center items-center shadow-2xl bg-[#171411]">
          {/* Subtle dark backdrop overlay to ensure contrast */}
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
          
          <div className="cta_content relative z-20 text-center px-5 sm:px-10 py-6 sm:py-10 md:py-12 flex flex-col items-center max-w-2xl mx-auto rounded-2xl sm:rounded-3xl bg-[#171411]/70 backdrop-blur-md border border-[#efe5d7]/20 shadow-2xl">
            <div className="text-xs uppercase tracking-widest text-[#efe5d7]/80 font-mono mb-2 sm:mb-3">
              Snip 2 Curl · San Francisco
            </div>
            <h3 className="text-style-allcaps font-zodiak text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight mb-3 sm:mb-4 drop-shadow-xl">
              REAL CURLS
            </h3>
            <p className="text-[#efe5d7]/90 max-w-lg mx-auto text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-cabinet drop-shadow-md">
              Soft, healthy curls that look great and feel easy to manage every single day.
            </p>
            <a
              href="#booking"
              onClick={(e) => handleSmoothScroll(e, '#booking')}
              className="button bg-[#efe5d7] text-[#171411] hover:bg-white inline-flex items-center gap-2"
            >
              <div className="button-text">
                <div className="button_text">Book an Appointment</div>
                <div className="button-text-animation">
                  <div className="button_text">Book an Appointment</div>
                </div>
              </div>
              <img src="/images/curl-mark-dark.svg" alt="Emblem" className="button-image w-3.5 h-3.5" />
            </a>
          </div>

          <video
            ref={breathVideoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/salon_treatment_spa.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/breath.mp4" type="video/mp4" />
            <source
              src="/videos/breath.mp4"
              type="video/mp4"
            />
          </video>
          <div className="video-overlay absolute inset-0 bg-black/55 pointer-events-none"></div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: CLIENT REVIEWS — IN THEIR WORDS (100vh)
          ========================================================================= */}
      <section id="reviews" className="min-h-screen lg:h-screen py-16 sm:py-20 lg:py-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 border-b border-[#171411]/10">
        <div className="container-large max-w-6xl mx-auto w-full flex flex-col justify-center">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2">
              Happy Clients
            </div>
            <h2 className="font-zodiak text-2xl sm:text-3xl md:text-5xl text-[#171411] font-normal">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Review 1 */}
            <div className="review-card-item bg-[#e8ddcc]/70 border border-[#171411]/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex gap-1 text-[#7b5d42]">★★★★★</div>
                <p className="font-zodiak text-base sm:text-lg md:text-xl text-[#171411] italic leading-snug">
                  &ldquo;Sunny understood my curly hair right away. After years of bad triangle haircuts at other places, my curls finally have great shape and bounce again.&rdquo;
                </p>
              </div>
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#171411]/10 flex items-center justify-between text-xs font-mono text-[#171411]/70">
                <span>Elena R. · Nob Hill</span>
                <span>Verified Client</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="review-card-item bg-[#e8ddcc]/70 border border-[#171411]/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex gap-1 text-[#7b5d42]">★★★★★</div>
                <p className="font-zodiak text-base sm:text-lg md:text-xl text-[#171411] italic leading-snug">
                  &ldquo;The best Japanese straightening and perms in San Francisco. Sunny gives honest advice, fair prices, and takes wonderful care of your hair.&rdquo;
                </p>
              </div>
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#171411]/10 flex items-center justify-between text-xs font-mono text-[#171411]/70">
                <span>Marcus T. · Pacific Heights</span>
                <span>Verified Client</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="review-card-item bg-[#e8ddcc]/70 border border-[#171411]/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex gap-1 text-[#7b5d42]">★★★★★</div>
                <p className="font-zodiak text-base sm:text-lg md:text-xl text-[#171411] italic leading-snug">
                  &ldquo;Sunny fixed a haircut that another salon messed up. The salon is relaxed, friendly, and really knows how to treat curly hair.&rdquo;
                </p>
              </div>
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#171411]/10 flex items-center justify-between text-xs font-mono text-[#171411]/70">
                <span>Aria K. · Russian Hill</span>
                <span>Verified Client</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://maps.google.com/?cid=10608357230256150317&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold hover:underline"
            >
              Read all verified reviews on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: DIMENSIONAL COLOR & ILLUMINATION (100vh)
          ========================================================================= */}
      <section id="color" className="min-h-screen lg:h-screen py-16 sm:py-20 lg:py-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 bg-[#e8ddcc]/30 border-b border-[#171411]/10">
        <div className="container-large max-w-6xl mx-auto w-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Left text */}
            <div className="flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2 sm:mb-3">
                Hair Color Care
              </div>
              <h2 className="font-zodiak text-2xl sm:text-3xl md:text-5xl font-normal leading-tight text-[#171411] mb-4 sm:mb-6">
                Hair color that keeps your curls healthy.
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-[#171411]/85 leading-relaxed font-cabinet">
                <p>
                  Strong bleach can dry out curly hair and make curls lose their natural bounce. We use gentle hair color and deep conditioning treatments to protect your curls while adding rich, shiny color.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#171411]/70">
                  Your curls stay soft, springy, and healthy from root to tip, with gorgeous natural shine.
                </p>
              </div>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 text-xs font-mono text-[#171411]/80">
                <span className="px-2.5 sm:px-3 py-1 bg-[#efe5d7] rounded-md border border-[#171411]/10">Balayage</span>
                <span className="px-2.5 sm:px-3 py-1 bg-[#efe5d7] rounded-md border border-[#171411]/10">Natural Highlights</span>
                <span className="px-2.5 sm:px-3 py-1 bg-[#efe5d7] rounded-md border border-[#171411]/10">Gloss Shine</span>
                <span className="px-2.5 sm:px-3 py-1 bg-[#efe5d7] rounded-md border border-[#171411]/10">Grey Coverage</span>
              </div>
            </div>

            {/* Right: Bordered Curved Long Holder with GSAP Scroll Zoom */}
            <div className="color-img-holder bordered-curved-holder relative rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border border-[#171411]/20 p-2 md:p-3 bg-[#e8ddcc]/50 shadow-xl overflow-hidden h-[240px] sm:h-[320px] md:h-[420px] lg:h-[65vh]">
              <div className="w-full h-full rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                <img
                  src="/images/curl_hair_editorial.jpg"
                  loading="lazy"
                  decoding="async"
                  alt="Multi-tonal curly highlights"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#171411]/85 backdrop-blur-md text-[#efe5d7] text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full font-mono tracking-wider">
                  Shiny, Healthy Curls
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: TEXTURE TRANSFORMATIONS — IONIC PERMS & STRAIGHTENING (100vh)
          ========================================================================= */}
      <section id="transformations" className="min-h-screen lg:h-screen py-16 sm:py-20 lg:py-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 border-b border-[#171411]/10">
        <div className="container-large max-w-6xl mx-auto w-full flex flex-col justify-center">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2">
              Perms &amp; Straightening
            </div>
            <h2 className="font-zodiak text-2xl sm:text-3xl md:text-5xl text-[#171411] font-normal">
              Perms &amp; Japanese Straightening
            </h2>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-[#171411]/75 mt-2 sm:mt-3">
              Whether you want soft, easy-to-manage waves or super smooth straight hair, our gentle treatments protect your hair from heat and dryness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto w-full">
            <div className="perm-card-item bg-[#e8ddcc]/50 border border-[#171411]/15 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div>
                <h3 className="font-zodiak text-xl sm:text-2xl text-[#171411] mb-2">Soft Wave Perm</h3>
                <p className="text-xs sm:text-sm text-[#171411]/80 leading-relaxed mb-4">
                  Gives you soft, natural waves that dry easily on their own with no styling effort. Perfect if your hair is straight or limp and you want more body.
                </p>
                <ul className="text-xs font-mono text-[#171411]/70 space-y-1.5 sm:space-y-2">
                  <li>✔ No harsh chemical smell or frizz</li>
                  <li>✔ Lasts 6 to 9 months</li>
                  <li>✔ Choose loose waves or tighter curls</li>
                </ul>
              </div>
              <a
                href="#booking"
                onClick={(e) => handleSmoothScroll(e, '#booking')}
                className="button mt-5 sm:mt-6 inline-flex self-start"
              >
                <div className="button-text">
                  <div className="button_text">Ask About Perms</div>
                  <div className="button-text-animation">
                    <div className="button_text">Ask About Perms</div>
                  </div>
                </div>
                <img src="/images/curl-mark-light.svg" alt="Curl Mark" className="button-image w-3.5 h-3.5" />
              </a>
            </div>

            <div className="perm-card-item bg-[#e8ddcc]/50 border border-[#171411]/15 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div>
                <h3 className="font-zodiak text-xl sm:text-2xl text-[#171411] mb-2">Japanese Straightening</h3>
                <p className="text-xs sm:text-sm text-[#171411]/80 leading-relaxed mb-4">
                  Permanently straightens thick, coarse, or frizzy hair into silky, smooth hair that stays straight even in San Francisco fog.
                </p>
                <ul className="text-xs font-mono text-[#171411]/70 space-y-1.5 sm:space-y-2">
                  <li>✔ Permanent results on treated hair</li>
                  <li>✔ Wash and go with no flat iron needed</li>
                  <li>✔ Leaves hair soft, shiny, and smooth</li>
                </ul>
              </div>
              <a
                href="#booking"
                onClick={(e) => handleSmoothScroll(e, '#booking')}
                className="button mt-5 sm:mt-6 inline-flex self-start"
              >
                <div className="button-text">
                  <div className="button_text">Ask About Straightening</div>
                  <div className="button-text-animation">
                    <div className="button_text">Ask About Straightening</div>
                  </div>
                </div>
                <img src="/images/curl-mark-light.svg" alt="Curl Mark" className="button-image w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: BOTANICAL RITUAL — DEEP MOISTURE SPA (100vh)
          ========================================================================= */}
      <section id="botanicals" className="min-h-screen lg:h-screen py-16 sm:py-20 lg:py-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 bg-[#e8ddcc]/30 border-b border-[#171411]/10">
        <div className="container-large max-w-6xl mx-auto w-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Left: Bordered Curved Long Holder with GSAP Scroll Zoom */}
            <div className="botanical-img-holder bordered-curved-holder relative rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border border-[#171411]/20 p-2 md:p-3 bg-[#e8ddcc]/50 shadow-xl overflow-hidden h-[240px] sm:h-[320px] md:h-[420px] lg:h-[65vh]">
              <div className="w-full h-full rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                <img
                  src="/images/salon_treatment_spa.jpg"
                  loading="lazy"
                  decoding="async"
                  alt="Deep moisture hair treatment"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#171411]/85 backdrop-blur-md text-[#efe5d7] text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full font-mono tracking-wider">
                  Warm Scalp Treatment
                </div>
              </div>
            </div>

            {/* Right: Ritual Details */}
            <div className="flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2 sm:mb-3">
                Hair &amp; Scalp Care
              </div>
              <h2 className="font-zodiak text-2xl sm:text-3xl md:text-5xl font-normal leading-tight text-[#171411] mb-4 sm:mb-6">
                Good moisture means healthy, frizz-free curls.
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-[#171411]/85 leading-relaxed font-cabinet">
                <p>
                  City tap water and dry weather can make curls feel dry or rough. Our deep moisture scalp treatment cleans your scalp gently, then uses warm steam and rich natural oils to deeply condition your hair.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#171411]/70">
                  Sit back and relax in our comfy wash chairs while warm eucalyptus towels soothe your neck and scalp.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <a
                  href="#booking"
                  onClick={(e) => handleSmoothScroll(e, '#booking')}
                  className="button inline-flex items-center gap-2"
                >
                  <div className="button-text">
                    <div className="button_text">Book Scalp Treatment</div>
                    <div className="button-text-animation">
                      <div className="button_text">Book Scalp Treatment</div>
                    </div>
                  </div>
                  <img src="/images/curl-mark-light.svg" alt="Curl Mark" className="button-image w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] sm:text-xs text-[#171411]/60 font-mono">
                  Includes relaxing neck and scalp massage
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: RESERVATIONS — BOOK YOUR VISIT (100vh)
          ========================================================================= */}
      <section id="booking" className="min-h-screen lg:h-screen py-16 sm:py-20 lg:py-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 border-b border-[#171411]/10">
        <div className="container-large max-w-4xl mx-auto w-full flex flex-col justify-center">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2">
              Easy Booking
            </div>
            <h2 className="font-zodiak text-2xl sm:text-3xl md:text-5xl text-[#171411] font-normal">
              Book Your Appointment
            </h2>
            <p className="text-xs sm:text-sm text-[#171411]/75 mt-1 sm:mt-2">
              1419 Polk St, San Francisco · Or call us directly at (415) 292-5788
            </p>
          </div>

          <div className="booking-form-box bg-[#e8ddcc]/60 border border-[#171411]/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-14 shadow-xl">
            {bookingStatus === 'success' ? (
              <div className="text-center py-8 sm:py-10 md:py-14 animate-fadeIn">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#171411] text-[#efe5d7] flex items-center justify-center mx-auto mb-4 sm:mb-5 text-xl sm:text-2xl">
                  ✓
                </div>
                <h3 className="font-zodiak text-2xl sm:text-3xl md:text-4xl text-[#171411] mb-2 sm:mb-3">
                  Thank You, {bookingForm.name || 'Friend'}!
                </h3>
                <p className="text-sm sm:text-base text-[#171411]/80 max-w-md mx-auto mb-6 sm:mb-8">
                  Your appointment request for <strong>{bookingForm.service}</strong> has been received. Sunny or our team at 1419 Polk St will text or call you shortly to confirm your time.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingStatus('idle')}
                  className="button inline-flex mx-auto px-6 sm:px-8 py-3 sm:py-3.5"
                >
                  <div className="button-text">
                    <div className="button_text">Book Another Visit</div>
                    <div className="button-text-animation">
                      <div className="button_text">Book Another Visit</div>
                    </div>
                  </div>
                  <img src="/images/curl-mark-light.svg" alt="Curl Mark" className="button-image w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label className="block text-[11px] sm:text-xs uppercase font-mono tracking-wider font-semibold text-[#171411]/75">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Miller"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label className="block text-[11px] sm:text-xs uppercase font-mono tracking-wider font-semibold text-[#171411]/75">
                    Phone Number (For text confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(415) 292-5788"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label className="block text-[11px] sm:text-xs uppercase font-mono tracking-wider font-semibold text-[#171411]/75">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label className="block text-[11px] sm:text-xs uppercase font-mono tracking-wider font-semibold text-[#171411]/75">
                    Service You Want *
                  </label>
                  <select
                    value={bookingForm.service}
                    onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                    className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all cursor-pointer"
                  >
                    <option>Dry Curly Haircut</option>
                    <option>Soft Wave Perm</option>
                    <option>Japanese Straightening</option>
                    <option>Highlights &amp; Balayage</option>
                    <option>Deep Scalp &amp; Moisture Treatment</option>
                    <option>Haircut Fix / Consultation</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label className="block text-[11px] sm:text-xs uppercase font-mono tracking-wider font-semibold text-[#171411]/75">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label className="block text-[11px] sm:text-xs uppercase font-mono tracking-wider font-semibold text-[#171411]/75">
                    Best Time of Day
                  </label>
                  <select
                    value={bookingForm.time}
                    onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                    className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all cursor-pointer"
                  >
                    <option>Morning (10:00 AM – 1:00 PM)</option>
                    <option>Afternoon (1:00 PM – 4:00 PM)</option>
                    <option>Evening (4:00 PM – 7:00 PM)</option>
                  </select>
                </div>

                <div className="md:col-span-2 flex flex-col gap-1 sm:gap-1.5">
                  <label className="block text-[11px] sm:text-xs uppercase font-mono tracking-wider font-semibold text-[#171411]/75">
                    Tell Us About Your Hair (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. loose waves, tight curls, dry ends, or looking for a fresh shape..."
                    value={bookingForm.notes}
                    onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                    className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl p-3.5 sm:p-5 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all min-h-[100px] sm:min-h-[140px]"
                  />
                </div>

                <div className="md:col-span-2 flex justify-center mt-2 sm:mt-3">
                  <button
                    type="submit"
                    disabled={bookingStatus === 'submitting'}
                    className="button w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 cursor-pointer text-sm sm:text-base md:text-lg font-bold"
                  >
                    <div className="button-text">
                      <div className="button_text">
                        {bookingStatus === 'submitting' ? 'Confirming...' : 'Confirm Appointment Request'}
                      </div>
                      <div className="button-text-animation">
                        <div className="button_text">Confirm Appointment Request</div>
                      </div>
                    </div>
                    <img src="/images/curl-mark-light.svg" alt="Emblem" className="button-image w-4 h-4 ml-2" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: LOCATION & HOURS — 1419 POLK STREET (100vh)
          ========================================================================= */}
      <section id="location" className="min-h-screen lg:h-screen py-16 sm:py-20 lg:py-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 bg-[#e8ddcc]/30 border-b border-[#171411]/10">
        <div className="container-large max-w-6xl mx-auto w-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Map / Directions Card with GSAP Scroll Trigger */}
            <div className="location-map-box bg-[#171411] text-[#efe5d7] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] p-5 sm:p-8 md:p-12 shadow-2xl flex flex-col justify-between h-auto min-h-[340px] sm:min-h-[420px] lg:h-[65vh]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#efe5d7]/60 mb-3 sm:mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#7b5d42]"></span>
                  <span>Find Us on Google Maps</span>
                </div>
                <h3 className="font-zodiak text-2xl sm:text-3xl md:text-5xl mb-3 sm:mb-4 font-normal">
                  Snip 2 Curl
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#efe5d7]/80 leading-relaxed font-cabinet mb-4 sm:mb-6">
                  1419 Polk St<br />
                  San Francisco, CA 94109<br />
                  United States
                </p>
                <div className="space-y-1 text-xs sm:text-sm font-mono text-[#efe5d7]/70">
                  <div>Telephone: (415) 292-5788</div>
                  <div>Hours: Mon – Sun · 10:00 AM – 7:00 PM</div>
                  <div>Transit: Muni 19 Polk, 1 California, Cable Car</div>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-[#efe5d7]/20 flex flex-wrap gap-3 sm:gap-4 items-center mt-4 sm:mt-0">
                <a
                  href="https://maps.google.com/?cid=10608357230256150317&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button bg-[#efe5d7] text-[#171411] hover:bg-white inline-flex items-center gap-2"
                >
                  <div className="button-text">
                    <div className="button_text">Open in Google Maps</div>
                    <div className="button-text-animation">
                      <div className="button_text">Open in Google Maps</div>
                    </div>
                  </div>
                  <img src="/images/curl-mark-dark.svg" alt="Curl Mark" className="button-image w-3.5 h-3.5" />
                </a>

                <a
                  href="tel:+14152925788"
                  aria-label="Call Snip 2 Curl"
                  className="button bg-[#efe5d7] hover:bg-white text-[#171411] inline-flex items-center gap-2 cursor-pointer font-bold border border-black/10 shadow-sm"
                  title="Call Snip 2 Curl"
                >
                  <div className="button-text">
                    <div className="button_text">Call Us</div>
                    <div className="button-text-animation">
                      <div className="button_text">Call Us</div>
                    </div>
                  </div>
                  <svg className="button-image w-3.5 h-3.5 text-[#171411] fill-[#171411] shrink-0" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Neighborhood & Arrival Information */}
            <div className="flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2 sm:mb-3">
                Our Neighborhood
              </div>
              <h2 className="font-zodiak text-2xl sm:text-3xl md:text-5xl font-normal leading-tight text-[#171411] mb-4 sm:mb-6">
                Visiting Snip 2 Curl.
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-[#171411]/85 leading-relaxed font-cabinet">
                <p>
                  We are located on Polk Street, a wonderful neighborhood filled with friendly coffee shops and bakeries. Feel free to grab a coffee nearby before your visit.
                </p>
                <p>
                  For curly haircuts, please come with your hair dry and in its normal daily style so Sunny can see how your curls naturally fall.
                </p>
              </div>

              <div className="mt-8 p-4 bg-[#efe5d7] rounded-xl border border-[#171411]/15 text-xs text-[#171411]/80 font-mono">
                💡 Walk-ins welcome when open · Appointments recommended so you don't have to wait
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: THE GRAND MARK & HIGH-DESIGN FOOTER (Reduced to fit content)
          ========================================================================= */}
      <section id="footer-section" className="w-full flex flex-col justify-between py-10 md:py-14 px-4 md:px-8 bg-[#171411] text-[#efe5d7] border-t border-[#efe5d7]/15">
        <div className="container-large max-w-6xl mx-auto w-full flex flex-col justify-center">
          <div className="footer-item-reveal grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2">
                Snip 2 Curl · San Francisco
              </div>
              <h3 className="font-zodiak text-2xl md:text-4xl font-normal text-[#efe5d7] leading-tight mb-5">
                All curl types, waves, and hair textures are welcome here.
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#booking"
                  onClick={(e) => handleSmoothScroll(e, '#booking')}
                  className="button bg-[#efe5d7] text-[#171411] hover:bg-white inline-flex"
                >
                  <div className="button-text">
                    <div className="button_text">Book an Appointment</div>
                    <div className="button-text-animation">
                      <div className="button_text">Book an Appointment</div>
                    </div>
                  </div>
                  <img src="/images/curl-mark-dark.svg" alt="Curl Mark" className="button-image w-3.5 h-3.5" />
                </a>

                <a
                  href="tel:+14152925788"
                  aria-label="Call Snip 2 Curl"
                  className="button font-bold bg-[#efe5d7] hover:bg-white text-[#171411] inline-flex items-center gap-2 cursor-pointer border border-black/10 shadow-sm"
                  title="Call Snip 2 Curl directly"
                >
                  <div className="button-text">
                    <div className="button_text">Call Us</div>
                    <div className="button-text-animation">
                      <div className="button_text">Call Us</div>
                    </div>
                  </div>
                  <svg className="button-image w-3.5 h-3.5 text-[#171411] fill-[#171411] shrink-0" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </a>
              </div>

            </div>

            <div className="flex flex-col gap-4 md:items-end text-left md:text-right font-cabinet">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#efe5d7]/50 font-mono mb-1">
                  STUDIO ADDRESS
                </div>
                <div className="text-base text-[#efe5d7]">
                  1419 Polk St, San Francisco, CA 94109
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-[#efe5d7]/50 font-mono mb-1">
                  DIRECT PHONE
                </div>
                <a href="tel:+14152925788" className="text-base text-[#efe5d7] hover:underline">
                  +1 (415) 292-5788
                </a>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-[#efe5d7]/50 font-mono mb-1">
                  HOURS
                </div>
                <div className="text-sm text-[#efe5d7]/80">
                  Monday – Sunday: 10:00 AM – 7:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Monumental Footer Wordmark */}
          <div className="footer-item-reveal border-t border-[#efe5d7]/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-zodiak text-4xl md:text-7xl tracking-tighter text-[#efe5d7] uppercase select-none">
              Snip 2 Curl
            </div>
            <button
              onClick={() => {
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(0, { duration: 1.2 });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="group flex items-center gap-2 text-xs uppercase tracking-wider text-[#efe5d7]/60 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
            </button>
          </div>
        </div>

        {/* Quiet Bottom Strip */}
        <div className="container-large max-w-6xl mx-auto w-full pt-5 mt-6 border-t border-[#efe5d7]/10 flex flex-wrap items-center justify-between text-xs text-[#efe5d7]/50 font-mono">
          <div>© {new Date().getFullYear()} Snip 2 Curl. All rights reserved.</div>
          <div>Crafted with precision on Polk St, San Francisco.</div>
        </div>
      </section>
    </div>
  );
};
