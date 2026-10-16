import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

gsap.registerPlugin(ScrollTrigger);



export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    return path || '/';
  });
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Initialize buttery Lenis smooth scrolling synced with GSAP
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
      infinite: false,
    });

    (window as any).lenis = lenis;

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string, hash?: string) => {
    const targetUrl = hash ? `${path}${hash}` : path;
    window.history.pushState({}, '', targetUrl);
    setCurrentPath(path);

    if (hash) {
      setTimeout(() => {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(hash, { offset: 0, duration: 1.2 });
        } else {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 60);
    } else {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { duration: 0.8 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Determine navbar variant
  const isWhiteMode = currentPath === '/contact';

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
      case '/index.html':
      case '/home':
        return <HomePage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case '/404':
        return <NotFoundPage onNavigate={handleNavigate} />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="page-wrapper min-h-screen flex flex-col bg-[#efe5d7] text-[#171411] font-cabinet selection:bg-[#7b5d42] selection:text-[#efe5d7]">
      {/* Preloader */}
      {!preloaderComplete && <Preloader onComplete={() => setPreloaderComplete(true)} />}

      {/* Top Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        variant={isWhiteMode ? 'white-mode' : 'base'}
      />

      {/* Main Page Content */}
      <main className="main-wrapper flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Floating WhatsApp and Call Suite */}
      <FloatingWhatsApp phoneNumber="14152925788" displayPhone="(415) 292-5788" />
    </div>
  );
}
