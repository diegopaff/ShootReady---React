export type gearItem = {
  id: number;
  name: string;
  packed: boolean;
  category: string;
};

export type TIndexedCategories = {
  [key: string]: gearItem[];
};

export type setGearListType = React.Dispatch<React.SetStateAction<gearItem[]>>;
// Prop Types

export type ItemListProps = {
  gearList: gearItem[];
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
};

export type handleAddItemType = {
  handleAddItem: (newGear: gearItem) => void;
};

export type GearContextType = {
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
};
