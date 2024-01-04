import { secodaryButtons } from "../lib/constants";
import Button from "./Button";

function ButtonGroup() {
  return (
    <section className="button-group">
      {secodaryButtons.map((item) => (
        <Button key={item} type="secondary">
          {item}
        </Button>
      ))}
    </section>
  );
}

export default ButtonGroup;
