import { useContext } from "react";
import { GearContext } from "../context/GearContextProvider";
import { GearContextType } from "../types/types";

export function useGearContext() {
  const context = useContext(GearContext) as GearContextType;

  if (!context) {
    throw new Error(
      "useGearContext mus be used within an ItemsContextProvider"
    );
  }

  return context;
}
