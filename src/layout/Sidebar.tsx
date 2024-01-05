import AddItemForm from "../components/AddItemForm";
import ButtonGroup from "../components/ButtonGroup";
import { gearItem } from "../types/types";

type SideBarProps = {
  handleAddItem: (newGear: gearItem) => void;
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsComplete: () => void;
  handleMarkAllAsIncomplete: () => void;
};
function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}: SideBarProps) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      />
    </div>
  );
}

export default Sidebar;
