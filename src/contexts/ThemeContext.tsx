// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  // optional helpful fields if you want to show UI state
  isManualOverrideActive?: boolean;
  manualUntil?: string | null; // ISO string or null
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const KEY_THEME = 'theme';
const KEY_MANUAL_UNTIL = 'themeManualUntil';

const now = () => new Date();

const isBetween = (hour: number, start: number, end: number) =>
  hour >= start && hour < end;

// Define daytime hours: 6:00 (inclusive) - 18:00 (exclusive)
const defaultThemeByTime = (): Theme => {
  const h = now().getHours();
  return isBetween(h, 6, 18) ? 'light' : 'dark';
};

const parseISO = (iso?: string | null) => {
  if (!iso) return null;
  const d = new Date(iso);
  return isNaN(d.getTime()) ? null : d;
};

// Return the next transition Date object (either next noon or next midnight)
const getNextTransition = (from = now()): Date => {
  const nextMidnight = new Date(from);
  nextMidnight.setHours(0, 0, 0, 0);
  if (nextMidnight <= from) nextMidnight.setDate(nextMidnight.getDate() + 1);

  const nextNoon = new Date(from);
  nextNoon.setHours(12, 0, 0, 0);
  if (nextNoon <= from) nextNoon.setDate(nextNoon.getDate() + 1);

  return nextNoon < nextMidnight ? nextNoon : nextMidnight;
};

// Get theme that should apply for a given hour
const getAutoThemeForHour = (hour: number): Theme => (isBetween(hour, 6, 18) ? 'light' : 'dark');

const getInitialState = (): { theme: Theme; manualUntil: Date | null } => {
  try {
    const savedTheme = localStorage.getItem(KEY_THEME);
    const savedManualUntil = localStorage.getItem(KEY_MANUAL_UNTIL);
    const manualUntilDate = parseISO(savedManualUntil);
    const nowDate = now();

    if (manualUntilDate && manualUntilDate > nowDate && (savedTheme === 'light' || savedTheme === 'dark')) {
      // Manual override still active
      return { theme: savedTheme as Theme, manualUntil: manualUntilDate };
    }

    // Otherwise use automatic based on current time
    return { theme: defaultThemeByTime(), manualUntil: null };
  } catch (err) {
    // localStorage not available => fallback to automatic
    void err;
    return { theme: defaultThemeByTime(), manualUntil: null };
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initial = getInitialState();
  const [theme, setTheme] = useState<Theme>(initial.theme);
  const [manualUntil, setManualUntil] = useState<Date | null>(initial.manualUntil);

  // Apply theme class to document and persist theme + manualUntil
  useEffect(() => {
    try {
      localStorage.setItem(KEY_THEME, theme);
      if (manualUntil) localStorage.setItem(KEY_MANUAL_UNTIL, manualUntil.toISOString());
      else localStorage.removeItem(KEY_MANUAL_UNTIL);
    } catch (err) {
      // ignore localStorage errors (SSR or blocked storage)
      void err;
    }

    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme, manualUntil]);

  // Schedule automatic transitions at next noon/midnight.
  // If manualUntil exists and is in future, auto will not override until it expires.
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let mounted = true;

    const scheduleNext = () => {
      const nowDate = now();
      const next = getNextTransition(nowDate);
      const ms = next.getTime() - nowDate.getTime();

      timeoutId = setTimeout(() => {
        if (!mounted) return;

        // If manual override still active, don't apply auto now; just reschedule
        if (manualUntil && manualUntil > now()) {
          scheduleNext();
          return;
        }

        // Apply auto theme based on hour of transition (12 -> light, 0 -> dark)
        const hour = next.getHours(); // 12 or 0
        const autoTheme = getAutoThemeForHour(hour);
        setTheme(autoTheme);

        // Clear manualUntil because auto took over
        setManualUntil(null);
        try {
          localStorage.removeItem(KEY_MANUAL_UNTIL);
        } catch (err) {
          // ignore removal errors
          void err;
        }

        // schedule next one
        scheduleNext();
      }, ms);
    };

    scheduleNext();

    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [manualUntil]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);

    // Set manualUntil to next transition so manual choice persists until then
    const until = getNextTransition();
    setManualUntil(until);
    try {
      localStorage.setItem(KEY_THEME, nextTheme);
      localStorage.setItem(KEY_MANUAL_UNTIL, until.toISOString());
    } catch (err) {
      // ignore
      void err;
    }
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    isManualOverrideActive: !!manualUntil && manualUntil > now(),
    manualUntil: manualUntil ? manualUntil.toISOString() : null,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
