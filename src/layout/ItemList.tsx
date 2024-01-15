import TrashIcon from "../assets/TrashIcon";
import EmptyView from "../components/EmptyView";
//import Select from "react-select";

import { useMemo } from "react";

import { TIndexedCategories, gearItem } from "../types/types";
import { useGearStore } from "../stores/gearStore";
import CategoryContainer from "../components/CategoryContainer";

function ItemList() {
  const gearList = useGearStore((state) => state.gearList);
  const allCategories = useGearStore((state) => state.getAllCategories());

  //convert the array of gearItems to an indexed object based on category
  const indexedCategories: TIndexedCategories = useMemo(() => {
    return gearList.reduce((result, item) => {
      const { category, ...rest } = item;
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push({
        ...rest, // Include the properties of rest
        category: category, // Include category explicitly
      });
      return result;
    }, {} as TIndexedCategories);
  }, [gearList]);

  return (
    <div className="item-list">
      {gearList.length === 0 && <EmptyView />}

      {allCategories.map((category) => (
        <CategoryContainer category={category}>
          {indexedCategories[category].map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </CategoryContainer>
      ))}
    </div>
  );
}

export default ItemList;

function Item({ item }: { item: gearItem }) {
  const handleDeleteItem = useGearStore((state) => state.deleteItem);
  const handleToggleItem = useGearStore((state) => state.toggleItem);
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />{" "}
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)} className="btn-delete">
        <TrashIcon />
      </button>
    </li>
  );
}
