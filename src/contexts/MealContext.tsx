import { IRelatory, useRelatory } from "@/hooks/useRelatory";

import { getAllMeals } from "@storage/meal/getAllMeals";
import { IMeal } from "@utils/types/meal";
import { ReactNode, createContext, useEffect, useState } from "react";

interface IMealContext {
  meals: IMeal[];
  getMeals: () => void;
  relatory: IRelatory;
}
export const MealContext = createContext({} as IMealContext);

interface MealProviderProps {
  children: ReactNode;
}
export function MealProvider({ children }: MealProviderProps) {
  const [meals, setMeals] = useState<IMeal[]>([]);

  const relatory = useRelatory(meals);

  async function getMeals() {
    const meals = await getAllMeals();

    setMeals(meals);
  }
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <MealContext.Provider value={{ meals, relatory, getMeals }}>
      {children}
    </MealContext.Provider>
  );
}
