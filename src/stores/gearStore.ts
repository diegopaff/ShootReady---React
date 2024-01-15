import { create } from "zustand";
import { defaultGear, defaultCategories } from "../lib/constants";
import { gearItem } from "../types/types";

interface IGearStore {
  gearList: gearItem[];
  categories: string[];
  addItem: (newGear: gearItem) => void;
  deleteItem: (id: number) => void;
  toggleItem: (id: number) => void;
  addCategory: (category: string) => void;
  removeAllItems: () => void;
  resetToInitial: () => void;
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
  getNumberOfPackedItems: () => number;
  getNumberOfTotalItems: () => number;
  isCompleted: () => boolean;
  getAllCategories: () => string[];
  getCategoryCompleted: (category: string) => boolean;
}

export const useGearStore = create<IGearStore>((set, get) => ({
  gearList: defaultGear,
  categories: defaultCategories,

  removeAllItems: () => {
    set(() => ({ gearList: [] }));
  },
  resetToInitial: () => {
    localStorage.removeItem("gearList");
    set(() => ({ gearList: defaultGear }));
  },
  markAllAsComplete: () => {
    set((state) => {
      const allMarked = state.gearList.map((item) => {
        return { ...item, packed: true };
      });
      return { gearList: allMarked };
    });
  },
  markAllAsIncomplete: () => {
    set((state) => {
      const allUnmarked = state.gearList.map((item) => {
        return { ...item, packed: false };
      });

      return { gearList: allUnmarked };
    });
  },
  addItem: (newGear) => {
    set((state) => {
      const newItem = [...state.gearList, newGear];
      localStorage.setItem("gearList", JSON.stringify(newItem));
      return { gearList: newItem };
    });
  },
  addCategory: (category) => {
    set((state) => {
      const newCategory = [...state.categories, category];
      localStorage.setItem("categories", JSON.stringify(newCategory));
      return { categories: newCategory };
    });
  },
  deleteItem: (id: number) => {
    set((state) => {
      const newItems = state.gearList.filter(
        (item: gearItem) => item.id !== id
      );
      return { gearList: newItems };
    });
  },
  toggleItem: (id: number) => {
    set((state) => {
      const newItems = state.gearList.map((item: gearItem) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }

        return item;
      });

      return { gearList: newItems };
    });
  },
  getNumberOfPackedItems: () => {
    const state = get();
    return state.gearList.filter((item: gearItem) => item.packed).length;
  },
  getNumberOfTotalItems: () => {
    const state = get();
    return state.gearList.length;
  },
  isCompleted: () => {
    const state = get();
    return state.getNumberOfPackedItems() === state.getNumberOfTotalItems();
  },
  getAllCategories: () => {
    const state = get();
    const allCategories: string[] = [];
    state.gearList.forEach((item) => {
      allCategories.push(item.category);
    });

    return [...new Set(allCategories)];
  },
  getCategoryCompleted: (category: string) => {
    const state = get();
    const itemsWithCategory = state.gearList.filter(
      (item) => item.category === category
    );
    return itemsWithCategory.every((item) => item.packed === true);
  },
}));
