import { useGearContext } from "../lib/hooks";

function Counter() {
  const { NumberOfTotalItems, NumberOfPackedItems } = useGearContext();
  return (
    <p>
      <b>{NumberOfPackedItems}</b> / {NumberOfTotalItems} items packed
    </p>
  );
}

export default Counter;
