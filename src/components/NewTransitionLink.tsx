'use client';

import React from 'react';
import Link from 'next/link';
import { useTransitionContext } from '@/context/TransitionContext';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NewTransitionLink: React.FC<TransitionLinkProps> = ({ 
  href, 
  children, 
  className, 
  onClick 
}) => {
  const { startTransition, isTransitioning } = useTransitionContext();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();
    if (isTransitioning) {
      e.preventDefault();
      return;
    }
    
    // Prevent default navigation
    e.preventDefault();
    
    // Start transition animation and handle navigation
    startTransition(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default NewTransitionLink;
