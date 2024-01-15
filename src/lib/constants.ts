import { gearItem } from "../types/types";

export const secodaryButtons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset",
  "Remove all",
];

const categoriesFromLocalStorage = JSON.parse(
  localStorage.getItem("categories") || "[]"
);

export const defaultCategories =
  categoriesFromLocalStorage.length > 0
    ? categoriesFromLocalStorage
    : ["camera", "props", "lights", "lens"];

const gearItemsFromLocalStorage = JSON.parse(
  localStorage.getItem("gearList") || "[]"
);
export const defaultGear: gearItem[] =
  gearItemsFromLocalStorage.length > 0
    ? gearItemsFromLocalStorage
    : [
        {
          id: 1,
          name: "Camera Sony A7s3",
          packed: true,
          category: "camera",
        },
        {
          id: 2,
          name: "Tripod",
          packed: false,
          category: "camera",
        },
        {
          id: 3,
          name: "Red Hat",
          packed: false,
          category: "props",
        },
        {
          id: 4,
          name: "Softbox",
          packed: false,
          category: "lights",
        },
      ];
