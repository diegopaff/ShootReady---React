import AddItemForm from "../components/AddItemForm";
import ButtonGroup from "../components/ButtonGroup";
import { useGearStore } from "../stores/gearStore";

function Sidebar() {
  //const { handleAddItem } = useGearContext();

  const handleAddItem = useGearStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}

export default Sidebar;
