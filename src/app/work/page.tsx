'use client';

import useMenuState from '@/hooks/useMenuState';
import Header from '@/components/Header';
import Menu from '@/components/Menu';

export default function WorkPage() {
  const [isMenuOpen, handleMenuOpen, handleMenuClose] = useMenuState();

  return (
    <div className="min-h-screen bg-white text-black font-family">
      <Header onMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen} />
      <Menu isOpen={isMenuOpen} onMenuClose={handleMenuClose} />
      <main className="page-content pt-24 sm:pt-32 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-0">
        <div className="max-w-4xl xl:max-w-screen-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Work</h1>
        </div>
      </main>
    </div>
  );
}
