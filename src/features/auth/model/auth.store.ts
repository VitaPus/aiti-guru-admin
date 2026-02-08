import { create } from "zustand";
import { login } from "@/shared/api/auth.api";
import { useAuthStore } from "@/app/store/auth.store";

type LoginValues = {
  username: string;
  password: string;
};

type AuthModelState = {
  loginLoading: boolean;
  loginUser: (values: LoginValues) => Promise<void>;
};

export const useAuthModelStore = create<AuthModelState>((set) => ({
  loginLoading: false,
  loginUser: async (values) => {
    set({ loginLoading: true });
    try {
      const data = await login(values);
      useAuthStore.getState().setToken(data.accessToken);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      set({ loginLoading: false });
    }
  },
}));
