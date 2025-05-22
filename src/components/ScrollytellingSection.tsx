'use client';

import { useEffect, useRef } from 'react';
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

export default function ScrollytellingSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const panelRefs  = useRef<HTMLDivElement[]>([]);

  const addPanel = (el: HTMLDivElement | null) => {
    if (el && !panelRefs.current.includes(el)) panelRefs.current.push(el);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const panels  = panelRefs.current;
    if (!section || panels.length < 2) return;

    const scrollLen = (panels.length - 1) * window.innerHeight;

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
        snap: {
          snapTo: step,
          duration: { min: 0.1, max: 0.3 },
          ease: 'power1.inOut'
        }
      }
    });

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
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="relative h-screen w-full">
        {LINES.map((txt, i) => (
          <div
            key={i}
            ref={addPanel}
            className="absolute inset-0 flex items-center justify-center"
          >
            <p className="px-4 text-center leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {txt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
