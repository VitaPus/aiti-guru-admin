import { create } from "zustand";
import { getProducts } from "@/features/products/api/products.api";

type SortOrder = "ascend" | "descend";

type SortState = {
  field?: string;
  order?: SortOrder;
};

export type Product = {
  id: number;
  title: string;
  category: string;
  brand?: string;
  sku?: string;
  price: number;
  rating: number;
  stock: number;
  availabilityStatus: string;
  meta?: { updatedAt?: string };
  thumbnail?: string;
};

type ProductsTableState = {
  data: Product[];
  loading: boolean;
  progress: number;
  refreshTick: number;
  isAddOpen: boolean;
  searchQuery: string;
  sortState: SortState;
  setSortState: (next: SortState) => void;
  setSearchQuery: (value: string) => void;
  loadProducts: () => Promise<void>;
  refresh: () => void;
  openAdd: () => void;
  closeAdd: () => void;
};

const SORT_STORAGE_KEY = "products_table_sort";
let progressTimer: number | undefined;
let searchTimer: number | undefined;

const loadSortState = (): SortState => {
  const stored = localStorage.getItem(SORT_STORAGE_KEY);
  if (!stored) return {};
  try {
    const parsed = JSON.parse(stored) as SortState;
    if (parsed?.field && parsed?.order) {
      return parsed;
    }
    return {};
  } catch {
    localStorage.removeItem(SORT_STORAGE_KEY);
    return {};
  }
};

export const useProductsTableStore = create<ProductsTableState>((set, get) => ({
  data: [],
  loading: false,
  progress: 0,
  refreshTick: 0,
  isAddOpen: false,
  searchQuery: "",
  sortState: loadSortState(),
  setSortState: (next) => {
    if (next.field && next.order) {
      localStorage.setItem(SORT_STORAGE_KEY, JSON.stringify(next));
    } else {
      localStorage.removeItem(SORT_STORAGE_KEY);
    }
    set({ sortState: next });
  },
  setSearchQuery: (value) => {
    set({ searchQuery: value });
    if (searchTimer !== undefined) {
      clearTimeout(searchTimer);
      searchTimer = undefined;
    }
    searchTimer = window.setTimeout(() => {
      get().loadProducts();
    }, 500);
  },
  loadProducts: async () => {
    if (progressTimer !== undefined) {
      clearInterval(progressTimer);
      progressTimer = undefined;
    }
    set({ loading: true, progress: 20 });

    progressTimer = window.setInterval(() => {
      set((state) => ({
        progress: state.progress < 90 ? state.progress + 10 : state.progress,
      }));
    }, 200);

    try {
      const query = get().searchQuery.trim();
      const res = await getProducts(query.length > 0 ? query : undefined);
      const list = res.products ?? res;
      set({ data: list, progress: 100 });
    } finally {
      setTimeout(() => {
        if (progressTimer !== undefined) {
          clearInterval(progressTimer);
          progressTimer = undefined;
        }
        set({ loading: false, progress: 0 });
      }, 200);
    }
  },
  refresh: () => set((state) => ({ refreshTick: state.refreshTick + 1 })),
  openAdd: () => set({ isAddOpen: true }),
  closeAdd: () => set({ isAddOpen: false }),
}));
