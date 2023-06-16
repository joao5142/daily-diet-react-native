import { Text } from "@components/Text";
import { MealCreatedContainer } from "./styles";

import { Button } from "@components/Button";
import { BoxWrapper } from "@components/BoxWrapper";

import { ContentStayOnDietMealCreated } from "./components/ContentStayOnDietMealCreated";
import { ContentCheatMealCreated } from "./components/ContentCheatMealCreated";

import { useNavigation, useRoute } from "@react-navigation/native";

import { useState } from "react";
import { Loading } from "@components/Loading";

interface RouteParams {
  isCheatMeal: boolean;
}

export function MealCreated() {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();

  const navigation = useNavigation();

  const { isCheatMeal } = route.params as RouteParams;

  function handleNavigateHomePage() {
    navigation.navigate("home");
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <MealCreatedContainer>
        {isCheatMeal ? (
          <ContentCheatMealCreated />
        ) : (
          <ContentStayOnDietMealCreated />
        )}

        <BoxWrapper marginTop={30}>
          <Button onPress={handleNavigateHomePage}>
            <Text
              text="Ir para a página inicial"
              size="SM"
              fontFamily="BOLD"
              color="WHITE"
            />
          </Button>
        </BoxWrapper>
      </MealCreatedContainer>
    </>
  );
}
