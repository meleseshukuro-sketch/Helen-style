"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface UIContextValue {
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  mobileNavOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  categoryDrawerOpen: boolean;
  openCategoryDrawer: () => void;
  closeCategoryDrawer: () => void;
  recentSearches: string[];
  addRecentSearch: (q: string) => void;
}

const UIContext = createContext<UIContextValue | null>(null);
const RECENT_KEY = "helen-lifestyle-recent-searches";

export function UIProvider({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [categoryDrawerOpen, setCategoryDrawerOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (raw) setRecentSearches(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
  }, []);

  const addRecentSearch = useCallback((q: string) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setRecentSearches((prev) => {
      const next = [trimmed, ...prev.filter((x) => x !== trimmed)].slice(0, 8);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      searchOpen,
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
      mobileNavOpen,
      openMobileNav: () => setMobileNavOpen(true),
      closeMobileNav: () => setMobileNavOpen(false),
      categoryDrawerOpen,
      openCategoryDrawer: () => setCategoryDrawerOpen(true),
      closeCategoryDrawer: () => setCategoryDrawerOpen(false),
      recentSearches,
      addRecentSearch,
    }),
    [searchOpen, mobileNavOpen, categoryDrawerOpen, recentSearches, addRecentSearch]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
