'use client';

import { useTransitionContext } from '@/context/TransitionContext';

const TransitionOverlay = () => {
  const { overlayRef } = useTransitionContext();
  
  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[200] pointer-events-none"
      style={{ transform: 'translateX(-100%)' }}
    >
      <div className="absolute inset-0 bg-[#D40000]"></div>
    </div>
  );
};

export default TransitionOverlay;
