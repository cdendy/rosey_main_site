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
      <main className="page-content">
        <ScrollytellingSection>
          <div className="pt-24 sm:pt-32 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-0">
            <div className="max-w-4xl xl:max-w-screen-xl mx-auto">
              <section id="additional-content" className="space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  The Future of Agency Work is Here
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl">
                  Our founding team brings 23 years of combined experience from BBDO,
                  Leo Burnett, and Wieden+Kennedy. We&apos;ve worked on campaigns that generated
                  $50M+ in media value, launched products, repositioned heritage brands,
                  and created work that won at Cannes, One Show, and D&AD.
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  How We Work Differently
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl">
                  Traditional agencies burn 40% of project budgets on account management
                  and project coordination. We&apos;ve eliminated that waste through AI automation,
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
                  <strong>Project-Based:</strong> Need a campaign, rebrand, or launch?
                  We&apos;ll scope it, price it transparently, and deliver on time.
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl">
                  <strong>Retainer:</strong> For brands that need ongoing creative muscle.
                  All the benefits of an in-house team, none of the overhead.
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl">
                  <strong>Embedded Teams:</strong> We&apos;ll place our people inside your
                  organization. They&apos;ll wear your badge but bring our methods.
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Ready to Make Something Great?
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl">
                  Let&apos;s talk about your brand, your challenges, and how we can help
                  you win. No pitch decks. No BS. Just a real conversation about real results.
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl pb-16">
                  <a href="mailto:hello@rosey.ca" className="underline hover:no-underline">
                    hello@rosey.ca
                  </a>
                </p>
              </section>
            </div>
          </div>
        </ScrollytellingSection>
      </main>
    </div>
  );
}
