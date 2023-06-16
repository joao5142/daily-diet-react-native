import { IMeal } from "@/utils/types/meal";

export interface IRelatory {
  totalMeals: number;
  mealsOutTheDiet: number;
  mealsWithinDiet: number;
  bestSequenceMeals: number;
  percentageMealsWithinDiet: number;
}

export function useRelatory(meals: IMeal[]) {
  let bestSequenceMeals = 0;
  let bestSequenceMealsAux = 0;

  const relatory = meals.reduce(
    (acc, meal) => {
      let totalMeals = acc.totalMeals;
      let mealsOutTheDiet = acc.mealsOutTheDiet;
      let mealsWithinDiet = acc.mealsWithinDiet;

      if (meal.isCheatMeal) {
        mealsOutTheDiet += 1;

        bestSequenceMealsAux = 0;
      } else {
        mealsWithinDiet += 1;

        bestSequenceMealsAux += 1;
      }

      if (bestSequenceMealsAux > bestSequenceMeals) {
        bestSequenceMeals = bestSequenceMealsAux;
      }

      totalMeals += 1;

      return {
        totalMeals,
        mealsOutTheDiet,
        mealsWithinDiet,
        bestSequenceMeals,
      };
    },
    {
      totalMeals: 0,
      mealsOutTheDiet: 0,
      mealsWithinDiet: 0,
      bestSequenceMeals: 0,
    }
  );

  const percentageMealsWithinDiet =
    (relatory.mealsWithinDiet / relatory.totalMeals) * 100;

  const relatoryObj = { ...relatory, percentageMealsWithinDiet };

  return relatoryObj;
}
