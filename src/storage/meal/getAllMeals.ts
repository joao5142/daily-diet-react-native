import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { MealDTO } from "@utils/types/meal";

function changeFormatData(data: string): string {
  let dataPartials = data.split("/");
  return dataPartials[1] + "-" + dataPartials[0] + "-" + dataPartials[2];
}

function compare(dateA: number, dateB: number) {
  if (dateA - dateB < 0) {
    return -1;
  }
  if (dateA - dateB > 0) {
    return 1;
  }
  return 0;
}

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    meals.sort((a, b) => {
      console.log(a.date, b.date);
      let dateAFormated: string = changeFormatData(a.date);
      let dateBFormated: string = changeFormatData(b.date);
      console.log(dateAFormated, dateBFormated);
      let dateA = new Date(dateAFormated).getTime();
      let dateB = new Date(dateBFormated).getTime();
      console.log(dateA, dateB);
      return compare(dateA, dateB);
    });

    console.log(meals);

    return meals;
  } catch (error) {
    throw error;
  }
}
