import { useState } from "react";
import { useGearStore } from "../stores/gearStore";

type CategorySelecetProps = {
  onSelect: React.Dispatch<React.SetStateAction<string>>;
};

function CategorySelect({ onSelect }: CategorySelecetProps) {
  const [newCategory, setNewCategory] = useState("");
  const addCategory = useGearStore((state) => state.addCategory);
  const categories = useGearStore((state) => state.categories);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(event.target.value);
  };

  const handleNewCategoryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewCategory(event.target.value);
  };

  const handleAddNewCategory = () => {
    if (newCategory.trim() !== "") {
      addCategory(newCategory);
      onSelect(newCategory);
      setNewCategory("");
    }
  };

  return (
    <div className="category-select-container">
      <label className="title-label">Select category </label>
      <div className="category-select">
        {categories.map((category) => (
          <label key={category}>
            <input
              className="category__input"
              type="radio"
              name="category"
              value={category}
              onChange={handleCategoryChange}
            />
            {category}
          </label>
        ))}
        <label className="new-category">
          <input
            type="text"
            placeholder="Add new category"
            value={newCategory}
            onChange={handleNewCategoryChange}
            className="category-new"
          />
          <button
            className="btn-new-category"
            type="button"
            onClick={handleAddNewCategory}
          >
            +
          </button>
        </label>
      </div>
    </div>
  );
}

export default CategorySelect;
