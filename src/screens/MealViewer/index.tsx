import { ContentWrapper } from "@components/ContentWrapper";
import {
  ButtonMealDietStatus,
  MealViewerContainer,
  MealViewerContent,
  Modal,
  ModalContainer,
  ModalContent,
} from "./styles";

import { HeaderPage } from "@components/HeaderPage";
import { MainBoxContent } from "@components/MainBoxContent";
import { BoxWrapper } from "@components/BoxWrapper";
import { Text } from "@components/Text";
import { BallMealDietStatus } from "@components/BallMealDietStatus";
import { Button } from "@components/Button";

import { View } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { PencilSimpleLine, Trash } from "phosphor-react-native";

import { Col, Row } from "@utils/styles";

import { useEffect, useState } from "react";
import { IMeal } from "@utils/types/meal";
import { getMealById } from "@storage/meal/getMealById";
import { removeMealById } from "@storage/meal/removeMealById";

interface RouteParams {
  mealId: string;
}
const getMealStatus = (isCheatMeal: boolean) => {
  return isCheatMeal ? "esta fora da dieta" : "esta dentro da dieta";
};
const getMealFormatedDate = (
  date: string | undefined,
  hour: string | undefined
) => {
  if (date && hour) {
    return `${date} às ${hour}`;
  }
  return "";
};
export function MealViewer() {
  const [isModalRemoveVisible, setIsModalRemoveVisible] = useState(false);
  const [meal, setMeal] = useState<IMeal>();
  const navigation = useNavigation();

  const route = useRoute();

  const { mealId } = route.params as RouteParams;

  function handleBackButtonPress() {
    navigation.goBack();
  }

  function handleEditMeal() {
    navigation.navigate("editMeal", { mealId });
  }
  async function handleRemoveMeal() {
    await removeMealById(mealId);
    navigation.navigate("home");
  }

  async function getMeal() {
    const meal = await getMealById(mealId);

    setMeal(meal);
  }

  useEffect(() => {
    getMeal();
  }, []);

  return (
    <View style={{ flex: 1, height: 1000 }}>
      <MealViewerContainer isCheatMeal={meal?.isCheatMeal || false}>
        <MealViewerContent>
          <ContentWrapper>
            <BoxWrapper marginBottom={40}>
              <HeaderPage
                onBackButtonPress={handleBackButtonPress}
                text="Refeição"
              />
            </BoxWrapper>
          </ContentWrapper>

          <MainBoxContent>
            <View>
              <BoxWrapper marginBottom={20}>
                <BoxWrapper marginBottom={10}>
                  <Text text={meal?.name ?? ""} size="LG" fontFamily="BOLD" />
                </BoxWrapper>
                <Text text={meal?.description ?? ""} />
              </BoxWrapper>
              <BoxWrapper>
                <Text text="Data e hora" fontFamily="BOLD" />
                <BoxWrapper marginTop={5}>
                  <Text
                    text={getMealFormatedDate(meal?.date, meal?.hour)}
                    size="MD"
                  />
                </BoxWrapper>
              </BoxWrapper>
              <BoxWrapper>
                <ButtonMealDietStatus>
                  <BallMealDietStatus
                    isCheatMeal={meal?.isCheatMeal || false}
                  />
                  <Text text={getMealStatus(meal?.isCheatMeal || false)} />
                </ButtonMealDietStatus>
              </BoxWrapper>
            </View>
            <View
              style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}
            >
              <Button onPress={handleEditMeal}>
                <PencilSimpleLine size={24} color="white" />
                <Text text="Editar refeição" fontFamily="BOLD" color="WHITE" />
              </Button>
              <BoxWrapper marginTop={10}>
                <Button onPress={() => setIsModalRemoveVisible(true)} outlined>
                  <Trash size={24} color="black" />
                  <Text text="Excluir refeição" fontFamily="BOLD" />
                </Button>
              </BoxWrapper>
            </View>
          </MainBoxContent>
        </MealViewerContent>
      </MealViewerContainer>

      <Modal isVisible={isModalRemoveVisible}>
        <ModalContainer>
          <ModalContent>
            <BoxWrapper marginBottom={35}>
              <Text
                align="center"
                size="LG"
                fontFamily="BOLD"
                text="Deseja realmente excluir o registro da refeição?"
              />
            </BoxWrapper>
            <Row>
              <Col>
                <Button onPress={() => setIsModalRemoveVisible(false)} outlined>
                  <Text fontFamily="BOLD" size="SM" text="Cancelar" />
                </Button>
              </Col>
              <Col>
                <Button onPress={handleRemoveMeal}>
                  <Text
                    fontFamily="BOLD"
                    size="SM"
                    color="WHITE"
                    text="Sim, exluir"
                  />
                </Button>
              </Col>
            </Row>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
}
