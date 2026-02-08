import { api } from "@/shared/api/api";

export interface LoginDto {
  username: string;
  password: string;
}

export const login = async (payload: LoginDto) => {
  const response = await api.post("/auth/login", {
    ...payload,
    expiresInMins: 30,
  });
  return response.data;
};
