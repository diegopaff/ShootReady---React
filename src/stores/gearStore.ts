import { create } from "zustand";
import { defaultGear } from "../lib/constants";
import { gearItem } from "../types/types";

interface IGearStore {
  gearList: gearItem[];
  addItem: (newGear: gearItem) => void;
  deleteItem: (id: number) => void;
  toggleItem: (id: number) => void;
  removeAllItems: () => void;
  resetToInitial: () => void;
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
  numberOfPackedItems: () => void;
  numberOfTotalItems: () => void;
}

export const useGearStore = create<IGearStore>((set) => ({
  gearList: defaultGear,
  removeAllItems: () => {
    set(() => ({ gearList: [] }));
  },
  resetToInitial: () => {
    set(() => ({ gearList: defaultGear }));
  },
  markAllAsComplete: () => {
    set((state) => {
      const allMarked = state.gearList.map((item) => {
        return { ...item, packed: true };
      });
      return { items: allMarked };
    });
  },
  markAllAsIncomplete: () => {
    set((state) => {
      const allUnmarked = state.gearList.map((item) => {
        return { ...item, packed: false };
      });
      return { items: allUnmarked };
    });
  },
  addItem: (newGear) => {
    set((state) => {
      const newItem = [...state.gearList, newGear];
      return { gearList: newItem };
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
  numberOfPackedItems: () => {
    set((state) => {
      return state.gearList.filter((item: gearItem) => item.packed).length;
    });
  },
  numberOfTotalItems: () => {
    set((state) => {
      return state.gearList.length;
    });
  },
}));
