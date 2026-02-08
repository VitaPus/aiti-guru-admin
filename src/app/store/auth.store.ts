import { create } from "zustand";

const STORAGE_KEY = "auth_token";

const getInitialToken = () =>
  localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY);

interface AuthState {
  token: string | null;
  isAuth: boolean;
  setToken: (token: string | null, remember?: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: getInitialToken(),
  isAuth: !!getInitialToken(),
  setToken: (token, remember = false) => {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);

    if (token) {
      if (remember) {
        localStorage.setItem(STORAGE_KEY, token);
      } else {
        sessionStorage.setItem(STORAGE_KEY, token);
      }
    }
    set({ token, isAuth: !!token });
  },
  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    set({ token: null, isAuth: false });
  },
}));
