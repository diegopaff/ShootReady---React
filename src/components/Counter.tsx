type CounterProps = {
  NumberOfPackedItems: number;
  NumberOfTotalItems: number;
};

function Counter({ NumberOfPackedItems, NumberOfTotalItems }: CounterProps) {
  return (
    <p>
      <b>{NumberOfPackedItems}</b> / {NumberOfTotalItems} items packed
    </p>
  );
}

export default Counter;
