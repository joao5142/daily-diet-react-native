import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 0px 24px 24px;
`;
export const Header = styled.View`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Avatar = styled.Image.attrs(({ theme }) => ({
  borderRadius: 50,
  width: 50,
  height: 50,
  borderColor: theme.COLORS.GRAY_700,
  borderWidth: 2,
}))``;

export const CardContainer = styled.View`
  margin: 30px 0px;
`;

export const MealItem = styled.View`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 15px 10px;
`;

export const MealItemSeparator = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const MealItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

interface MealItemStatusProps {
  isCheatMeal: boolean;
}

export const MealItemStatus = styled.View<MealItemStatusProps>`
  height: 14px;
  width: 14px;
  border-radius: 50px;

  ${({ isCheatMeal, theme }) =>
    isCheatMeal
      ? css`
          background-color: ${theme.COLORS.RED_300};
        `
      : css`
          background-color: ${theme.COLORS.GREEN_300};
        `}
`;
