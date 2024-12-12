'use client';

import React, { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Set default theme to 'dark'
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check localStorage to persist the theme across sessions
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    if (storedTheme) {
      setTheme(storedTheme);  // Set stored theme if available
    } else {
      // Set theme to dark by default if no preference is saved
      setTheme('dark');
      localStorage.setItem('theme', 'dark'); // Save the dark theme to localStorage
    }
    
    // Apply dark class to <html> element if dark theme is selected
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div>
      {children}
    </div>
  );
}
