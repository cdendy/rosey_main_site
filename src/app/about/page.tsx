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
        </div>
      </main>
    </div>
  );
}
