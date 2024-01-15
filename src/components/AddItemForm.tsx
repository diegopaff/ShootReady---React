import { useRef, useState } from "react";
import AddIcon from "../assets/AddIcon";
import Button from "./Button";
import { gearItem } from "../types/types";
import CategorySelect from "./CategorySelect";

type onAddItem = {
  onAddItem: (newGear: gearItem) => void;
};

function AddItemForm({ onAddItem }: onAddItem) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // basic validation
    if (!text) {
      alert("Insert a Gear name");
      inputRef.current?.focus();
      return;
    }

    if (!category) {
      alert("Please select a category");
      return;
    }

    const newGear: gearItem = {
      id: new Date().getTime(),
      name: text,
      packed: false,
      category: category,
    };

    onAddItem(newGear);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="batteries"
        value={text}
        onChange={handleChangeInput}
        autoFocus={true}
      />
      <CategorySelect onSelect={setCategory} />

      <Button buttonType="primary">
        <AddIcon />
        Add to list
      </Button>
    </form>
  );
}

export default AddItemForm;
