import { create } from "zustand";

interface AppState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const useStore = create<AppState>((set) => ({
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
