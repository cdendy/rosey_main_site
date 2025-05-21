'use client';

import Image from 'next/image';
import NewTransitionLink from './NewTransitionLink';
// Import heroicons if needed for the menu button

interface HeaderProps {
  onMenuOpen: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuOpen, isMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[70] grid grid-cols-[auto_1fr_auto] items-center p-6 bg-white">
      {/* Column 1: Rose Logo (Left) */}
      <div className="justify-self-start">
        <NewTransitionLink href="/">
          <Image src="/images/rosey_rose.svg" alt="Rosey Logo" width={40} height={40} />
        </NewTransitionLink>
      </div>

      {/* Column 2: Wordmarks (Center) */}
      <div className="justify-self-center">
        <NewTransitionLink href="/">
          {/* Desktop Wordmark */}
          <Image src="/images/rosey_wordmark.svg" alt="Rosey Wordmark" width={120} height={25} className="hidden sm:block" />
          {/* Wordmark hidden on mobile */}
        </NewTransitionLink>
      </div>

      {/* Column 3: Cruip Animated Hamburger/X Button (Right) */}
      <button
        onClick={onMenuOpen}
        className="p-2 justify-self-end group"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <svg className="w-8 h-8 fill-current text-black pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect
            className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${isMenuOpen ? 'translate-x-0 translate-y-0 rotate-[315deg]' : '-translate-y-[5px] translate-x-[7px]'}`}
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
          <rect
            className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${isMenuOpen ? 'rotate-45' : ''}`}
            y="7"
            width="16"
            height="2"
            rx="1"
          ></rect>
          <rect
            className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${isMenuOpen ? 'translate-y-0 rotate-[135deg]' : 'translate-y-[5px] translate-x-[7px]'}`}
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
        </svg>
      </button>
    </header>
  );
};

export default Header;
