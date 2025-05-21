'use client';

import Image from 'next/image';
import NewTransitionLink from './NewTransitionLink';
// Remove unused import

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
          <NewTransitionLink href="/" onClick={onMenuClose}>
            <Image src="/images/rosey_rose.svg" alt="Rosey Logo" width={40} height={40} />
          </NewTransitionLink>
        </div>
        {/* Wordmark (center) */}
        <div className="justify-self-center">
          <NewTransitionLink href="/" onClick={onMenuClose}>
            {/* Desktop Wordmark */}
            <Image src="/images/wordmark_logo.png" alt="Rosey Wordmark" width={120} height={25} className="hidden sm:block" />
            {/* Mobile Wordmark */}
            <Image src="/images/wordmark_logo.png" alt="Rosey Wordmark" width={80} height={32} className="block sm:hidden" />
          </NewTransitionLink>
        </div>

      </div>
      <nav className="pt-[25vh]">
        <ul className="flex flex-col items-center space-y-8">
          <li>
            <NewTransitionLink href="/about" onClick={onMenuClose} className="text-4xl md:text-5xl lg:text-6xl font-family font-bold relative bg-clip-text text-transparent bg-[linear-gradient(to_right,#D40000_50%,theme(colors.black)_50%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0%_0] transition-all ease-in-out duration-300">About</NewTransitionLink>
          </li>
          <li>
            <NewTransitionLink href="/Work" onClick={onMenuClose} className="text-4xl md:text-5xl lg:text-6xl font-family font-bold relative bg-clip-text text-transparent bg-[linear-gradient(to_right,#D40000_50%,theme(colors.black)_50%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0%_0] transition-all ease-in-out duration-300">Work</NewTransitionLink>
          </li>
          <li>
            <NewTransitionLink href="/contact" onClick={onMenuClose} className="text-4xl md:text-5xl lg:text-6xl font-family font-bold relative bg-clip-text text-transparent bg-[linear-gradient(to_right,#D40000_50%,theme(colors.black)_50%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0%_0] transition-all ease-in-out duration-300">Contact</NewTransitionLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
