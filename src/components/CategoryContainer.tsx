import { useGearStore } from "../stores/gearStore";

type CategoryContainerProps = {
  children: React.ReactNode;
  category: string;
};

function CategoryContainer({ children, category }: CategoryContainerProps) {
  const getCategoryCompleted = useGearStore(
    (state) => state.getCategoryCompleted
  );

  const completed = getCategoryCompleted(category);
  return (
    <ul className={`category ${completed ? "category-completed" : ""}`}>
      {children}
    </ul>
  );
}

export default CategoryContainer;
