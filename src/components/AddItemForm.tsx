import { useState } from "react";
import AddIcon from "../assets/AddIcon";
import Button from "./Button";
import { gearItem, setGearListType } from "../types/types";

function AddItemForm({ setGearList }: { setGearList: setGearListType }) {
  const [text, setText] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newGear: gearItem = {
      id: 4,
      name: text,
      packed: false,
    };

    setGearList((prev) => [...prev, newGear]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        type="text"
        placeholder="batteries"
        value={text}
        onChange={handleChangeInput}
      />
      <Button type="primary">
        <AddIcon />
        Add to list
      </Button>
    </form>
  );
}

export default AddItemForm;
