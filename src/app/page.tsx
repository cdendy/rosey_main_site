'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Menu from '@/components/Menu';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-black font-family">
      <Header onMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen} />
      <Menu isOpen={isMenuOpen} onMenuClose={handleMenuClose} />
      <main className="page-content pt-24 sm:pt-32 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-0">
        <div className="max-w-4xl xl:max-w-screen-xl mx-auto space-y-12 sm:space-y-16 xl:grid xl:grid-cols-12 xl:gap-x-8">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-tight xl:col-span-12">
            If you want to <span className="font-bold">look like everyone else</span>, you’ve got a lot of options.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-tight xl:col-span-12">
            In fact, you should <span className="font-bold">probably stay where you are.</span>
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-tight xl:col-span-12">
            But if you want a <span className="font-bold">brand people remember</span>, created by people who <span className="font-bold">care, you’re in the right place.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-tight xl:col-span-12">
            Here lies Marketing as usual. <span className="font-bold">Long live Rosey.</span>
          </p>
        </div>
      </main>
    </div>
  );
}

