'use client';

import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface MenuProps {
  isOpen: boolean;
  onMenuClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onMenuClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white">
      {/* Top row: logo, wordmark, close button */}
      <div className="w-full p-6 grid grid-cols-[auto_1fr_auto] items-center absolute top-0 left-0">
        {/* Rose logo (left) */}
        <div className="justify-self-start">
          <Image src="/images/rosey_rose.svg" alt="Rosey Logo" width={40} height={40} />
        </div>
        {/* Wordmark (center) */}
        <div className="justify-self-center">
          <Image src="/images/wordmark_logo.png" alt="Rosey Wordmark" width={120} height={25} className="hidden sm:block" />
          <Image src="/images/wordmark_logo.png" alt="Rosey Wordmark" width={80} height={32} className="block sm:hidden" />
        </div>

      </div>
      <nav className="flex flex-col items-center space-y-8">
        <a href="#about" onClick={onMenuClose} className="text-6xl font-family font-bold hover:opacity-75 transition-opacity">About</a>
        <a href="#work" onClick={onMenuClose} className="text-6xl font-family font-bold hover:opacity-75 transition-opacity">Work</a>
        <a href="#contact" onClick={onMenuClose} className="text-6xl font-family font-bold hover:opacity-75 transition-opacity">Contact</a>
      </nav>
    </div>
  );
};

export default Menu;
