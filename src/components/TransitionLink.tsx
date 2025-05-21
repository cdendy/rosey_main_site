'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useTransitionContext } from '@/context/TransitionContext';
import { usePathname } from 'next/navigation';

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ href, children, className, onClick }) => {
  const { playWipeIn, isTransitioning } = useTransitionContext();
  const currentPathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();
    
    // Don't do anything if we're already transitioning
    if (isTransitioning) {
      e.preventDefault();
      return;
    }
    
    // Don't prevent default if we're already on the same page
    if (href === currentPathname) {
      return;
    }
    
    // For different pages, prevent default and use our transition
    e.preventDefault();
    console.log('TransitionLink clicked:', href);
    playWipeIn(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default TransitionLink;
