import Button from "./Button";
import { useGearStore } from "../stores/gearStore";

function ButtonGroup() {
  const markAllAsComplete = useGearStore((state) => state.markAllAsComplete);
  const markAllAsInomplete = useGearStore((state) => state.markAllAsIncomplete);
  const resetToInitial = useGearStore((state) => state.resetToInitial);
  const removeAllItems = useGearStore((state) => state.removeAllItems);
  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllAsInomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={resetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={removeAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}

export default ButtonGroup;
