import { create } from "zustand";

// Types
import type { User } from "./user";

type AuthState = {
  userAuthenticated: User | null;
  login: () => void;
  logout: () => void;
};

export const useAuth = create<AuthState>((set) => ({
  userAuthenticated: null,
  login: () => set({ userAuthenticated: null }),
  logout: () => set({ userAuthenticated: null }),
}));
