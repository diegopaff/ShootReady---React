import TrashIcon from "../assets/TrashIcon";
import EmptyView from "../components/EmptyView";
//import Select from "react-select";

import { useMemo } from "react";

import { TIndexedCategories, gearItem } from "../types/types";
import { useGearStore } from "../stores/gearStore";
import CategoryContainer from "../components/CategoryContainer";

/*const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];*/

function ItemList() {
  //const [sortBy, setSortBy] = useState("default");

  const gearList = useGearStore((state) => state.gearList);
  const allCategories = useGearStore((state) => state.getAllCategories());

  const indexedCategories: TIndexedCategories = useMemo(() => {
    return gearList.reduce((result, item) => {
      const { category, ...rest } = item;
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(rest);
      return result;
    }, {});
  }, [gearList]);

  return (
    <div className="item-list">
      {gearList.length === 0 && <EmptyView />}

      {allCategories.map((category) => (
        <CategoryContainer category={category}>
          <h3>{category}</h3>
          {indexedCategories[category].map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </CategoryContainer>
      ))}
    </div>
  );
}

export default ItemList;

// Item component
function Item({ item }: { item: gearItem }) {
  //const { handleDeleteItem, handleToggleItem } = useGearContext();

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
