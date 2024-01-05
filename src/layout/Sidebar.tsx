import AddItemForm from "../components/AddItemForm";
import ButtonGroup from "../components/ButtonGroup";
import { setGearListType } from "../types/types";

function Sidebar({ setGearList }: { setGearList: setGearListType }) {
  return (
    <div className="sidebar">
      <AddItemForm setGearList={setGearList} />
      <ButtonGroup />
    </div>
  );
}

export default Sidebar;
