import { create } from 'zustand'

interface State {
    IsSideMenuOpen: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
}

export const useUIStore = create<State>() ((set) => ({
    IsSideMenuOpen: false,
    openSideMenu: ()  => set({ IsSideMenuOpen: true}),
    closeSideMenu: ()  => set({ IsSideMenuOpen: false}),



}))