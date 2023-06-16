import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { MealDTO } from "@utils/types/meal";

export async function getMealById(id: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    let meal = meals.find((meal) => meal.id === id);

    return meal;
  } catch (error) {
    throw error;
  }
}
