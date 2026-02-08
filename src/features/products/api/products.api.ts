import { api } from "@shared/api/api";

export const getProducts = async (query?: string) => {
  const endpoint = query ? `/products/search?q=${encodeURIComponent(query)}` : "/products";
  const response = await api.get(endpoint);
  return response.data;
};
