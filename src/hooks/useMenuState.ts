'use client';

import { useState, useCallback } from 'react';

export default function useMenuState(): [boolean, () => void, () => void] {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return [isMenuOpen, handleMenuOpen, handleMenuClose];
}
