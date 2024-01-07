export type gearItem = {
  id: number;
  name: string;
  packed: boolean;
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
  handleAddItem: (newGear: gearItem) => void;
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsComplete: () => void;
  handleMarkAllAsIncomplete: () => void;
  NumberOfPackedItems: number;
  NumberOfTotalItems: number;
};
