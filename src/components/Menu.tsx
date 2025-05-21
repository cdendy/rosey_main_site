'use client';

import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface MenuProps {
  isOpen: boolean;
  onMenuClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onMenuClose }) => {
  return (
    <div
      className={`
        fixed inset-0 z-[60] flex flex-col items-center justify-start bg-white/95
        transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
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
      <nav className="flex flex-col items-center space-y-8 pt-[25vh]">
        <a href="#about" onClick={onMenuClose} className="text-6xl font-family font-bold relative bg-clip-text text-transparent bg-[linear-gradient(to_right,#D40000_50%,theme(colors.black)_50%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0%_0] transition-all ease-in-out duration-300">About</a>
        <a href="#work" onClick={onMenuClose} className="text-6xl font-family font-bold relative bg-clip-text text-transparent bg-[linear-gradient(to_right,#D40000_50%,theme(colors.black)_50%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0%_0] transition-all ease-in-out duration-300">Work</a>
        <a href="#contact" onClick={onMenuClose} className="text-6xl font-family font-bold relative bg-clip-text text-transparent bg-[linear-gradient(to_right,#D40000_50%,theme(colors.black)_50%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0%_0] transition-all ease-in-out duration-300">Contact</a>
      </nav>
    </div>
  );
};

export default Menu;
