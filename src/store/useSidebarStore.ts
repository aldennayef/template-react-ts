import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

const LG_BREAKPOINT = 1024;

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: typeof window !== 'undefined' ? window.innerWidth >= LG_BREAKPOINT : true,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
