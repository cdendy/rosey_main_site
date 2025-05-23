'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LINES: string[] = [
  "We're Rosey. And yeah, we make ads that work.",
  "But we're also just people—curious, candid, and maybe a little too obsessed with craft.",
  "We've done the rounds at big shops and led the charge on big-name brands.",
  "But we're scrappy by nature, nimble on purpose, and wired to help our clients outthink, not outspend.",
  "We believe in clarity over jargon.",
  'In bold moves over safe bets.',
  'In saying the hard thing—nicely.',
  "Ideas are our favourite part. But execution? That's our happy place.",
  'Fusing human firepower with bleeding-edge AI to build faster, smarter, sharper campaigns without the baggage of legacy agencies.',
  "We're built to get things made, beautifully and quickly. No hand-offs. No fluff.",
  'Edmonton-born. Blue collar, never blue blood.',
  'And like our hometown, we take the work – your work – seriously.',
  'Ourselves, not so much.',
  'So yeah, we make ads. And build Brands.',
  'Good ones.',
  'Even Great ones.',
  "Now let's make yours."
];

export default function ScrollytellingSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const panelRefs  = useRef<HTMLDivElement[]>([]);
  const tlRef      = useRef<gsap.core.Timeline | null>(null);
  const [currentPanel, setCurrentPanel] = useState(0);

  const addPanel = (el: HTMLDivElement | null) => {
    if (el && !panelRefs.current.includes(el)) panelRefs.current.push(el);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const panels  = panelRefs.current;
    if (!section || panels.length < 2) return;

    // Calculate scroll length based on number of panels (including the content panel)
    const scrollLen = panels.length * window.innerHeight;

    // Hide all panels except the first one
    panels.forEach((p, i) => i && gsap.set(p, { autoAlpha: 0 }));

    const step = 1 / (panels.length - 1);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: scrollLen,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Track which panel is currently visible
          const progress = self.progress;
          const panelIndex = Math.round(progress * (panels.length - 1));
          setCurrentPanel(panelIndex);
        },
        snap: {
          snapTo: step,
          duration: { min: 0.05, max: 0.1 },
          ease: 'power1.inOut'
        }
      }
    });
    tlRef.current = tl;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Animate panel transitions
    panels.slice(1).forEach((panel, idx) => {
      const base = idx * step;
      tl.to(panels[idx], { autoAlpha: 0, duration: step / 2 }, base);
      tl.fromTo(
        panel,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: step / 2, ease: 'power2.out' },
        base + step / 2
      );
    });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleSkip = () => {
    const tl = tlRef.current;
    const st = tl?.scrollTrigger;
    
    if (!st) return;
    
    // If we're on the last panel (content panel) and scrolling back, go to the first panel
    if (currentPanel === panelRefs.current.length - 1) {
      st.scroll(st.start);
    } else {
      // Otherwise, skip to the last panel (content)
      st.scroll(st.end - 1);
    }
  };

  return (
    <section ref={sectionRef} className="relative">
      <div className="relative h-screen w-full">
        {/* Container with 12-column grid layout */}
        <div className="absolute inset-0 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-0">
          <div className="max-w-4xl xl:max-w-screen-xl mx-auto h-full grid grid-cols-12 gap-5">
            {/* Scrollytelling text panels */}
            {LINES.map((txt, i) => (
              <div
                key={i}
                ref={addPanel}
                className="absolute inset-0 flex items-start justify-center pt-32 sm:pt-40 md:items-center md:pt-0 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-0"
              >
                <div className="max-w-4xl xl:max-w-screen-xl mx-auto grid grid-cols-12 gap-5 w-full">
                  <div className="col-span-12 sm:col-span-10 sm:col-start-2 xl:col-span-8 xl:col-start-3 flex items-center justify-center">
                    <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl !leading-tight text-center">
                      {txt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Final panel with the main content */}
            <div ref={addPanel} className="absolute inset-0 overflow-y-auto px-6 sm:px-12 md:px-24 lg:px-36 xl:px-0">
              <div className="max-w-4xl xl:max-w-screen-xl mx-auto grid grid-cols-12 gap-5 min-h-full">
                <div className="col-span-12 sm:col-span-10 sm:col-start-2 xl:col-span-8 xl:col-start-3">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="fixed bottom-4 right-4 text-sm text-black/60 hover:text-black transition-colors z-50"
        >
          {currentPanel === panelRefs.current.length - 1 ? 'Back to top' : 'Skip'}
        </button>
      </div>
    </section>
  );
}
