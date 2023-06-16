import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const NewMealContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  flex: 1;
`;

export const NewMealContent = styled(SafeAreaView)`
  flex: 1;
`;
