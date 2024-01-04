import AddIcon from "../assets/AddIcon";
import Button from "./Button";

function AddItemForm() {
  return (
    <form>
      <h2>Add an item</h2>
      <input type="text" placeholder="batteries"></input>
      <Button type="primary">
        <AddIcon />
        Add to list
      </Button>
    </form>
  );
}

export default AddItemForm;
