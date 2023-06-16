import { Loading } from "@components/Loading";

import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { Routes } from "./src/routes";

import defaultTheme from "./src/theme";
import { MealProvider } from "@/contexts/MealContext";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={defaultTheme}>
      <MealProvider>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </MealProvider>
    </ThemeProvider>
  );
}
