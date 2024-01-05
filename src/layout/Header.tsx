import Counter from "../components/Counter";
import Logo from "../components/Logo";
type HeaderProps = {
  NumberOfPackedItems: number;
  NumberOfTotalItems: number;
};
function Header({ NumberOfPackedItems, NumberOfTotalItems }: HeaderProps) {
  return (
    <header>
      <Logo />
      <Counter
        NumberOfPackedItems={NumberOfPackedItems}
        NumberOfTotalItems={NumberOfTotalItems}
      />
    </header>
  );
}

export default Header;
