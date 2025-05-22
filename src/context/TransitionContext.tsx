'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';

interface TransitionContextType {
  isTransitioning: boolean;
  startTransition: (href: string) => void;
  overlayRef: React.RefObject<HTMLDivElement | null>;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const useTransitionContext = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransitionContext must be used within a TransitionProvider');
  }
  return context;
};

interface TransitionProviderProps {
  children: ReactNode;
}

export const TransitionProvider: React.FC<TransitionProviderProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [nextPath, setNextPath] = useState<string | null>(null);

  // Initialize the overlay position
  useEffect(() => {
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { x: '-100%' });
    }
  }, []);

  const startTransition = useCallback((href: string) => {
    if (isTransitioning || href === pathname) return;
    
    setIsTransitioning(true);
    setNextPath(href);
    document.body.classList.add('transitioning'); // Prevent scrolling
    document.body.style.pointerEvents = 'none'; // Disable interactions during transition
    
    // First animation - cover the screen
    const tl = gsap.timeline({
      onComplete: () => {
        // Only navigate after the screen is covered
        router.push(href);
      }
    });
    
    tl.to(overlayRef.current, {
      x: '0%',
      duration: 0.5,
      ease: 'power2.inOut'
    });
  }, [isTransitioning, pathname, router]);
  
  // Listen for pathname changes to trigger the exit animation
  useEffect(() => {
    if (nextPath && nextPath === pathname && isTransitioning) {
      // Second animation - reveal the new page
      const tl = gsap.timeline({
        onComplete: () => {
          setIsTransitioning(false);
          setNextPath(null);
          document.body.classList.remove('transitioning'); // Re-enable scrolling
          document.body.style.pointerEvents = 'auto'; // Re-enable interactions
        }
      });
      
      tl.to(overlayRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power2.inOut',
        delay: 0.1 // Small delay to ensure new content is ready
      });
    }
  }, [pathname, nextPath, isTransitioning]);

  return (
    <TransitionContext.Provider value={{ 
      isTransitioning, 
      startTransition, 
      overlayRef
    }}>
      {children}
    </TransitionContext.Provider>
  );
};
