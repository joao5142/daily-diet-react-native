import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const MealCreatedContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.WHITE};
`;
