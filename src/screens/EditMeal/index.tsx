import { NewMealContent, NewMealContainer } from "./styles";

import { HeaderPage } from "@components/HeaderPage";
import { MainBoxContent } from "@components/MainBoxContent";
import { ContentWrapper } from "@components/ContentWrapper";
import { BoxWrapper } from "@components/BoxWrapper/index";

import { Form } from "@components/Form";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { IMeal } from "@utils/types/meal";
import { getMealById } from "@storage/meal/getMealById";
import { editMealById } from "@storage/meal/editMealById";

import { Alert } from "react-native";

interface RouteParams {
  mealId: string;
}
export function EditMeal() {
  const [meal, setMeal] = useState<IMeal>();

  const route = useRoute();

  const { mealId } = route.params as RouteParams;

  const navigation = useNavigation();

  function handlePressBackButton() {
    navigation.goBack();
  }

  async function handleEditMeal(data: IMeal) {
    try {
      await editMealById(mealId, { ...data, id: mealId });
      navigation.navigate("home");
    } catch (error) {
      Alert.alert(
        "Error ao editar refeição",
        "Ocorreu um error ao editar sua refeição. Tente novamente mais tarde. "
      );
    }

    // navigation.navigate("home");
  }
  async function getMeal() {
    const meal = await getMealById(mealId);
    setMeal(meal);
  }

  useEffect(() => {
    getMeal();
  }, []);

  return (
    <NewMealContainer>
      <NewMealContent>
        <ContentWrapper>
          <BoxWrapper marginBottom={30}>
            <HeaderPage
              onBackButtonPress={handlePressBackButton}
              text="Editar refeição"
            />
          </BoxWrapper>
        </ContentWrapper>
        <MainBoxContent>
          <Form
            meal={meal}
            buttonSubmitText="Salvar Alterações"
            onFormSubmit={handleEditMeal}
          />
        </MainBoxContent>
      </NewMealContent>
    </NewMealContainer>
  );
}
