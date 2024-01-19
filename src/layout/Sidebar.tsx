import AddItemForm from "../components/AddItemForm";
import ButtonGroup from "../components/ButtonGroup";
import { useGearStore } from "../stores/gearStore";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  //const { handleAddItem } = useGearContext();

  const handleAddItem = useGearStore((state) => state.addItem);
  return (
    <div className={`sidebar ${sidebarOpen && "sidebar-open"}`}>
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
      <button className="btn-close" onClick={() => setSidebarOpen(false)}>
        X
      </button>
    </div>
  );
}

export default Sidebar;
