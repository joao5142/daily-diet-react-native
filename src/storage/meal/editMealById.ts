import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { IMeal, MealDTO } from "@utils/types/meal";

export async function editMealById(id: string, meal: IMeal) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    const editedMeals = meals.map((mealItem) => {
      if (mealItem.id === id) {
        return { ...meal };
      } else {
        return { ...mealItem };
      }
    });

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(editedMeals));
  } catch (error) {
    throw error;
  }
}
