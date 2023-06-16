import {
  Header,
  MealReportContainer,
  MealReportContent,
  CenterView,
  CardMeal,
  ArrowIcon,
} from "./styles";

import { Text } from "@components/Text";
import { Card } from "@components/Card";

import { TouchableOpacity, View } from "react-native";
import { BoxWrapper } from "@components/BoxWrapper";

import { useNavigation } from "@react-navigation/native";
import { ContentWrapper } from "@components/ContentWrapper";
import { MainBoxContent } from "@components/MainBoxContent";
import { useContext } from "react";
import { MealContext } from "@/contexts/MealContext";

export function MealReport() {
  const navigation = useNavigation();
  const { relatory } = useContext(MealContext);

  function handleNavigatePage() {
    navigation.navigate("home");
  }
  return (
    <MealReportContainer percentage={relatory.percentageMealsWithinDiet}>
      <MealReportContent>
        <ContentWrapper>
          <TouchableOpacity onPress={handleNavigatePage}>
            <ArrowIcon percentage={relatory.percentageMealsWithinDiet} />
          </TouchableOpacity>
        </ContentWrapper>

        <Header>
          <Text
            text={
              relatory.percentageMealsWithinDiet.toFixed(2).replace(".", ",") +
              "%"
            }
            size="XXL"
            fontFamily="BOLD"
          />
          <BoxWrapper marginTop={5}>
            <Text text="das refeições dentro da dieta" />
          </BoxWrapper>
        </Header>

        <MainBoxContent>
          <CenterView>
            <Text
              size="MD"
              text="Estatísticas gerais"
              color="GRAY_700"
              fontFamily="BOLD"
            />
          </CenterView>

          <View>
            <BoxWrapper marginTop={30} marginBottom={8}>
              <Card color="GRAY_200">
                <Text
                  fontFamily="BOLD"
                  text={relatory.bestSequenceMeals.toString() || "0"}
                  size="XL"
                />
                <BoxWrapper marginTop={5}>
                  <Text
                    size="SM"
                    color="GRAY_600"
                    text="melhor sequência de pratos dentro da dieta"
                  />
                </BoxWrapper>
              </Card>
            </BoxWrapper>
            <BoxWrapper marginTop={8} marginBottom={8}>
              <Card color="GRAY_200">
                <Text
                  fontFamily="BOLD"
                  size="XL"
                  text={relatory.totalMeals.toString() || "0"}
                />
                <BoxWrapper marginTop={5}>
                  <Text
                    size="SM"
                    color="GRAY_600"
                    text="refeições registradas"
                  />
                </BoxWrapper>
              </Card>
            </BoxWrapper>
          </View>

          <CenterView>
            <CardMeal color="GREEN_100">
              <Text
                fontFamily="BOLD"
                size="XL"
                text={relatory.mealsWithinDiet.toString() || "0"}
              />
              <BoxWrapper marginTop={10}>
                <Text
                  size="SM"
                  align="center"
                  text="refeições dentro da dieta"
                />
              </BoxWrapper>
            </CardMeal>
            <CardMeal color="RED_100">
              <Text
                fontFamily="BOLD"
                align="center"
                size="XL"
                text={relatory.mealsOutTheDiet.toString() || "0"}
              />
              <BoxWrapper marginTop={10}>
                <Text size="SM" align="center" text="refeições fora da dieta" />
              </BoxWrapper>
            </CardMeal>
          </CenterView>
        </MainBoxContent>
      </MealReportContent>
    </MealReportContainer>
  );
}
