import { useState, useEffect, useCallback } from 'react';
import { ThemeContext } from './themeContextDef';

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const htmlTheme = document.documentElement.dataset.theme;
      if (htmlTheme === 'light' || htmlTheme === 'dark') return htmlTheme;
      try {
        const stored = localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark') return stored;
      } catch {}
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });

  const setTheme = useCallback((newTheme) => {
    const target = newTheme === 'light' ? 'light' : 'dark';
    setThemeState(target);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('theme', target);
      } catch {}
      document.documentElement.dataset.theme = target;
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = theme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
