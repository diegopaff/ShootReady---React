import AddItemForm from "../components/AddItemForm";
import ButtonGroup from "../components/ButtonGroup";

import { useGearContext } from "../lib/hooks";

function Sidebar() {
  const { handleAddItem } = useGearContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}

export default Sidebar;
