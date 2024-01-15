import { useGearStore } from "../stores/gearStore";

function Counter() {
  const NumberOfPackedItems = useGearStore((state) =>
    state.getNumberOfPackedItems()
  );

  const NumberOfTotalItems = useGearStore((state) =>
    state.getNumberOfTotalItems()
  );

  const completed = useGearStore((state) => state.isCompleted());
  return (
    <p className={`counter ${completed ? "counter__completed" : ""}`}>
      <b>{NumberOfPackedItems}</b> / {NumberOfTotalItems} items packed
    </p>
  );
}

export default Counter;
