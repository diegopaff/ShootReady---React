import { useGearStore } from "../stores/gearStore";

function Counter() {
  const NumberOfPackedItems = useGearStore(
    (state) => state.numberOfPackedItems
  );

  const NumberOfTotalItems = useGearStore((state) => state.numberOfTotalItems);
  return (
    <p>
      <b>{NumberOfPackedItems}</b> / {NumberOfTotalItems} items packed
    </p>
  );
}

export default Counter;
