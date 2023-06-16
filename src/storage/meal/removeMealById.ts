import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { MealDTO } from "@utils/types/meal";

export async function removeMealById(id: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    let mealsFiltered = meals.filter((meal) => meal.id !== id);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsFiltered));
  } catch (error) {
    throw error;
  }
}
