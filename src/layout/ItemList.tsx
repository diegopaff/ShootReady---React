import { ItemListProps, gearItem } from "../types/types";
import TrashIcon from "../assets/TrashIcon";
import EmptyView from "../components/EmptyView";
import Select from "react-select";
import { useMemo, useState } from "react";

const sortingOptions = [
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
];

function ItemList({
  gearList,
  handleDeleteItem,
  handleToggleItem,
}: ItemListProps) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      // @ts-expect-error -> typescript thinks that it's possibly getting a undefinden but no.
      [...gearList].sort((a, b) => {
        if (sortBy === "packed") {
          return Number(b.packed) - Number(a.packed);
        }

        if (sortBy === "unpacked") {
          return Number(a.packed) - Number(b.packed);
        }

        return;
      }),
    [gearList, sortBy]
  );

  return (
    <ul className="item-list">
      {gearList.length === 0 && <EmptyView />}

      {gearList.length > 0 && (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            // @ts-expect-error -> no chance to recieve null
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
}

export default ItemList;

// Item component
function Item({
  item,
  handleDeleteItem,
  handleToggleItem,
}: {
  item: gearItem;
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
}) {
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