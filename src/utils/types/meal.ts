export type MealStatusType = "cheatMeal" | "stayOnDiet";

export interface MealType {
  name: string;
  description: string;
  date: string;
  hour: string;
  isCheatMeal: boolean;
}
export interface MealDTO extends MealType {
  id: string;
}
export interface IMeal extends MealType {
  id: string;
}

export interface IMealSection {
  id: string;
  date: string;
  data: Array<MealDTO>;
}
