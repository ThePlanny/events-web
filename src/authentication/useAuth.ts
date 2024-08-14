import { create } from "zustand";

// Types
import type { User } from "./user";

type AuthState = {
  userAuthenticated: User | null | boolean;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuth = create<AuthState>((set) => ({
  userAuthenticated: null,
  login: (user) => set({ userAuthenticated: user }),
  logout: () => set({ userAuthenticated: null }),
}));
