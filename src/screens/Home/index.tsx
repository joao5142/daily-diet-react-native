import { Image, TouchableOpacity, View } from "react-native";
import {
  Avatar,
  CardContainer,
  Container,
  Header,
  MealItem,
  MealItemContainer,
  MealItemSeparator,
  MealItemStatus,
} from "./styles";

import { Card } from "@components/Card";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { BoxWrapper } from "@components/BoxWrapper";

import { Plus } from "phosphor-react-native";

import { SectionList } from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { useCallback, useContext, useEffect, useState } from "react";

// import { getMealsFilteredByDate } from "@storage/meal/getMealsFilteredByDate";

import { IMealSection } from "@utils/types/meal";

import { Alert } from "react-native";

import logo from "@assets/logo.png";
import { removeAllMeals } from "@storage/meal/removeAllMeals";
import { MealContext } from "@/contexts/MealContext";
import { groupMealsByDate } from "@/utils/functions/getFilteredMeals";

export function Home() {
  const { meals, relatory, getMeals } = useContext(MealContext);

  const [groupedMeals, setGroupedMeals] = useState<IMealSection[]>([]);

  const navigation = useNavigation();

  function handleNavigateMealReportPage() {
    navigation.navigate("mealReport");
  }
  function handleNavigateNewMealPage() {
    navigation.navigate("createNewMeal");
  }
  function handleMealItemClick(id: string) {
    navigation.navigate("mealViewer", { mealId: id });
  }

  async function fetchMeals() {
    try {
      getMeals();
    } catch (error) {
      Alert.alert("Fetch Meals Error", "Error Fetching Meals.");
    }
  }
  async function removeMeals() {
    await removeAllMeals();
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
      // removeMeals();
    }, [])
  );

  useEffect(() => {
    const groupedMeals: IMealSection[] = groupMealsByDate(meals);

    setGroupedMeals(groupedMeals);
  }, [meals]);

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <Avatar
          source={{
            uri: "https://images.unsplash.com/photo-1576800774081-68c65e87becc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=711&q=80",
          }}
        />
      </Header>

      <TouchableOpacity onPress={handleNavigateMealReportPage}>
        <CardContainer>
          <Card
            color={
              relatory.percentageMealsWithinDiet >= 50 ? "GREEN_100" : "RED_100"
            }
          >
            <Text
              fontFamily="BOLD"
              size="XXL"
              text={
                relatory.percentageMealsWithinDiet
                  .toFixed(2)
                  .replace(".", ",") + "%"
              }
            />
            <Text
              size="SM"
              color="GRAY_600"
              text="das refeições dentro da dieta"
            />
          </Card>
        </CardContainer>
      </TouchableOpacity>
      <View>
        <Text size="MD" color="GRAY_700" text=" Refeições" />

        <BoxWrapper marginTop={10} marginBottom={30}>
          <Button onPress={handleNavigateNewMealPage}>
            <Plus size={20} color="white" />
            <Text color="WHITE" fontFamily="BOLD" text="Nova refeição" />
          </Button>
        </BoxWrapper>
      </View>

      <SectionList
        showsVerticalScrollIndicator={false}
        sections={groupedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMealItemClick(item.id)}>
            <MealItem>
              <MealItemContainer>
                <Text
                  fontFamily="BOLD"
                  color="GRAY_700"
                  text={item.hour}
                  size="XS"
                />
                <MealItemSeparator />
                <Text color="GRAY_600" text={item.name} />
              </MealItemContainer>
              <MealItemStatus isCheatMeal={item.isCheatMeal} />
            </MealItem>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { date } }) => (
          <BoxWrapper marginTop={10} marginBottom={10}>
            <Text fontFamily="BOLD" text={date} size="LG" />
          </BoxWrapper>
        )}
      />
    </Container>
  );
}
