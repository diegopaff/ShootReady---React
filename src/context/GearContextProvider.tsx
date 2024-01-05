import { useEffect, useState } from "react";
import { gearItem } from "../types/types";
import { defaultGear } from "../lib/constants";

function GearContextProvider() {
  const gearListFromLocalStorage: gearItem[] = JSON.parse(
    localStorage.getItem("gearList") || ""
  );

  const [gearList, setGearList] = useState(
    gearListFromLocalStorage || defaultGear
  );

  useEffect(() => {
    localStorage.setItem("gearList", JSON.stringify(gearList));
  }, [gearList]);

  const handleAddItem = (newGear: gearItem) => {
    const newItem = [...gearList, newGear];
    setGearList(newItem);
  };

  const handleDeleteItem = (id: number) => {
    const newItems = gearList.filter((item: gearItem) => item.id !== id);
    setGearList(newItems);
  };

  const handleToggleItem = (id: number) => {
    const newItems = gearList.map((item: gearItem) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });
    setGearList(newItems);
  };

  const handleRemoveAllItems = () => {
    setGearList([]);
  };

  const handleResetToInitial = () => {
    setGearList(defaultGear);
  };

  const handleMarkAllAsComplete = () => {
    const allMarked = gearList.map((item: gearItem) => {
      return { ...item, packed: true };
    });
    setGearList(allMarked);
  };

  const handleMarkAllAsIncomplete = () => {
    const allMarked = gearList.map((item: gearItem) => {
      return { ...item, packed: false };
    });
    setGearList(allMarked);
  };

  const NumberOfPackedItems = gearList.filter(
    (item: gearItem) => item.packed
  ).length;
  return <div>GearContextProvider</div>;
}

export default GearContextProvider;
