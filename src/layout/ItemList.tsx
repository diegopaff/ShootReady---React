import { ItemListProps, gearItem } from "../types/types";
import TrashIcon from "../assets/TrashIcon";

function ItemList({ gearList, setGearList }: ItemListProps) {
  return (
    <ul>
      {gearList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ItemList;

function Item({ item }: { item: gearItem }) {
  const handleClickDelete = (): void => {};
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} /> {item.name}
      </label>
      <button onClick={handleClickDelete} className="btn-delete">
        <TrashIcon />
      </button>
    </li>
  );
}
