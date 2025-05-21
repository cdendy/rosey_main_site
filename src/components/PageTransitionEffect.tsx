'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTransitionContext } from '@/context/TransitionContext';

/**
 * This component is no longer needed to render the overlay div
 * as that's now handled by the TransitionOverlay component.
 * This component now only serves as a debug logger for transitions.
 */
const PageTransitionEffect = () => {
  const { isTransitioning } = useTransitionContext();
  const pathname = usePathname();
  
  // Debug logging for transitions
  useEffect(() => {
    console.log(`Page transition debug - Path: ${pathname}, Transitioning: ${isTransitioning}`);
  }, [pathname, isTransitioning]);

  // No visible UI - just logging
  return null;
};

export default PageTransitionEffect;

