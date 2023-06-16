// import AsyncStorage from "@react-native-async-storage/async-storage";

// import { MEAL_COLLECTION } from "@storage/storageConfig";

// import { IMealSection, MealDTO, MealType } from "@utils/types/meal";

// import uuid from "react-native-uuid";

// export async function getMealsFilteredByDate() {
//   try {
//     const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

//     const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

//     const mealsFiltered: IMealSection[] = groupMealsByDate(meals);

//     return mealsFiltered;
//   } catch (error) {
//     throw error;
//   }
// }

// function groupMealsByDate(meals: MealDTO[]): IMealSection[] {
//   const groupObject = {};

//   for (let i = 0; i < meals.length; i++) {
//     const mealObject = meals[i];
//     const date: string = mealObject.date;
//     // @ts-ignore:next-line
//     if (!groupObject[date]) {
//       // @ts-ignore:next-line
//       groupObject[date] = {
//         id: uuid.v4(),
//         date: date,
//         data: [],
//       };
//     }
//     // @ts-ignore:next-line
//     groupObject[date].data.push(mealObject);
//   }

//   return Object.values(groupObject);
// }
