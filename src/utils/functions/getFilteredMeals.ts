import { IMealSection, MealDTO } from "../types/meal";
import uuid from "react-native-uuid";

export function groupMealsByDate(meals: MealDTO[]): IMealSection[] {
  const groupObject = {};

  for (let i = 0; i < meals.length; i++) {
    const mealObject = meals[i];
    const date: string = mealObject.date;
    // @ts-ignore:next-line
    if (!groupObject[date]) {
      // @ts-ignore:next-line
      groupObject[date] = {
        id: uuid.v4(),
        date: date,
        data: [],
      };
    }
    // @ts-ignore:next-line
    groupObject[date].data.push(mealObject);
  }

  return Object.values(groupObject);
}
