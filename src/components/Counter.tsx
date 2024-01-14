import { useGearStore } from "../stores/gearStore";

function Counter() {
  const NumberOfPackedItems = useGearStore((state) =>
    state.getNumberOfPackedItems()
  );

  const NumberOfTotalItems = useGearStore((state) =>
    state.getNumberOfTotalItems()
  );
  return (
    <p>
      <b>{NumberOfPackedItems}</b> / {NumberOfTotalItems} items packed
    </p>
  );
}

export default Counter;
