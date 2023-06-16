import { Alert } from "react-native";

import { NewMealContent, NewMealContainer } from "./styles";

import { HeaderPage } from "@components/HeaderPage";
import { MainBoxContent } from "@components/MainBoxContent";
import { ContentWrapper } from "@components/ContentWrapper";
import { BoxWrapper } from "@components/BoxWrapper/index";

import { Form } from "@components/Form";

import { useNavigation } from "@react-navigation/native";

import { MealDTO, MealType } from "@utils/types/meal";
import { createNewMeal } from "@storage/meal/createNewMeal";

import uuid from "react-native-uuid";

export function CreateNewMeal() {
  const navigation = useNavigation();

  function handlePressBackButton() {
    navigation.goBack();
  }

  async function handleCreateNewMeal(meal: MealType) {
    try {
      const mealDTO: MealDTO = { ...meal, id: uuid.v4() };

      await createNewMeal(mealDTO);
    } catch (error) {
      Alert.alert("Create Error !", "Houve um problema ao criar sua refeição.");
    }
    navigation.navigate("mealCreated", { isCheatMeal: meal.isCheatMeal });
  }

  return (
    <NewMealContainer>
      <NewMealContent>
        <ContentWrapper>
          <BoxWrapper marginBottom={30}>
            <HeaderPage
              onBackButtonPress={handlePressBackButton}
              text="Nova refeição"
            />
          </BoxWrapper>
        </ContentWrapper>
        <MainBoxContent>
          <Form
            buttonSubmitText="Cadastrar refeição"
            onFormSubmit={handleCreateNewMeal}
          />
        </MainBoxContent>
      </NewMealContent>
    </NewMealContainer>
  );
}
