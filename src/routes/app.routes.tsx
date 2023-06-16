import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { MealCreated } from "@screens/MealCreated";
import { MealReport } from "@screens/MealReport";
import { CreateNewMeal } from "@screens/CreateMeal";
import { MealViewer } from "@screens/MealViewer";
import { EditMeal } from "@screens/EditMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="mealReport" component={MealReport} />
      <Screen name="createNewMeal" component={CreateNewMeal} />
      <Screen name="mealCreated" component={MealCreated} />
      <Screen name="mealViewer" component={MealViewer} />
      <Screen name="editMeal" component={EditMeal} />
    </Navigator>
  );
}
