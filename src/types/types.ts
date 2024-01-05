export type gearItem = {
  id: number;
  name: string;
  packed: boolean;
};

export type setGearListType = React.Dispatch<React.SetStateAction<gearItem[]>>;
// Prop Types

export type ItemListProps = {
  gearList: gearItem[];
  setGearList: setGearListType;
};
