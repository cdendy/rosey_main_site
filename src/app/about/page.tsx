'use client';

import useMenuState from '@/hooks/useMenuState';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import ScrollytellingSection from '@/components/ScrollytellingSection';
import '@/styles/scrollytelling.css';

export default function AboutPage() {
  const [isMenuOpen, handleMenuOpen, handleMenuClose] = useMenuState();

  return (
    <div className="bg-white text-black font-family">
      <Header onMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen} />
      <Menu isOpen={isMenuOpen} onMenuClose={handleMenuClose} />
      <main className="page-content pt-24 sm:pt-32 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-0">
        <div className="max-w-4xl xl:max-w-screen-xl mx-auto">
          <ScrollytellingSection />
          <section id="additional-content" className="mt-16 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              The Future of Agency Work is Here
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl">
              Our founding team brings 23 years of combined experience from BBDO,
              Leo Burnett, and Wieden+Kennedy. We've worked on campaigns that generated
              $50M+ in media value, launched products, repositioned heritage brands,
              and created work that won at Cannes, One Show, and D&AD.
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              How We Work Differently
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl">
              Traditional agencies burn 40% of project budgets on account management
              and project coordination. We've eliminated that waste through AI automation,
              putting more of your investment where it belongs - strategy and creative
              execution.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl">
              Our hybrid human-AI methodology cuts typical project timelines by 40%
              while maintaining the quality standards we learned at the big shops. Same
              creative firepower. Half the bureaucracy.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl">
              Every engagement begins with our Value Conversation framework - not to
              sell you a predetermined package, but to understand exactly what success
              looks like for your business.
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Three Ways to Work With Us
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl">
              <strong>Brand Foundation:</strong> Complete strategic positioning, visual
              identity, and messaging architecture. Fixed scope, value-based pricing.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl">
              <strong>Launch Engine:</strong> Full go-to-market campaign across 3-5
              channels with real-time optimization. Results-driven pricing with
              performance bonuses.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl">
              <strong>Growth Accelerator:</strong> Ongoing brand development and
              campaign management. Quarterly retainers with flexible cancellation terms.
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Why This Matters Now
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl">
              We're building the agency model that will dominate the next decade -
              before everyone else figures it out. No legacy overhead. No outdated
              processes. No 18-month commitments. Just better work, delivered faster,
              for clients who want to move at the speed of business, not bureaucracy.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
