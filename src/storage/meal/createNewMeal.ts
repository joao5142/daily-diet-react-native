import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { MealDTO } from "@utils/types/meal";

import { getAllMeals } from "./getAllMeals";

export async function createNewMeal(newMeal: MealDTO) {
  try {
    const collectionStoredName = `${MEAL_COLLECTION}`;

    const storedMeals = await getAllMeals();

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(collectionStoredName, storage);
  } catch (error) {
    throw error;
  }
}
