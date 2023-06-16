import { MealStatusType } from "@utils/types/meal";
import { BallMealDietStatusContainer } from "./styles";

export interface BallMealDietStatus {
  isCheatMeal: Boolean;
}
export function BallMealDietStatus({ isCheatMeal }: BallMealDietStatus) {
  return <BallMealDietStatusContainer isCheatMeal={isCheatMeal} />;
}
