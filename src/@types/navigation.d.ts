export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      mealReport: undefined;
      mealViewer: { mealId: string };
      createNewMeal: undefined;
      mealCreated: { isCheatMeal: boolean };
      editMeal: { mealId: string };
    }
  }
}
