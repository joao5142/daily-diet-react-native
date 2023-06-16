import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
