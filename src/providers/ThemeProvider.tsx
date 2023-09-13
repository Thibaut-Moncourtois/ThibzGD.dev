import { useState, useEffect } from 'react';
import { Theme, ThemeProviderProps } from '../types';
import ThemeProviderContext from '../contexts/ThemeContext';

function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      setTheme(systemTheme);
      localStorage.setItem(storageKey, systemTheme);
    } else {
      localStorage.setItem(storageKey, theme);
      root.classList.add(theme);
    }
  }, [theme, storageKey]);

  const value: ThemeProviderState = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export default ThemeProvider;
