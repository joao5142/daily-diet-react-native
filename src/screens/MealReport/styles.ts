import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

import { ArrowLeft } from "phosphor-react-native";

interface MealReportProps {
  percentage: number;
}
export const MealReportContainer = styled.View<MealReportProps>`
  ${({ theme, percentage }) =>
    percentage >= 50
      ? css`
          background-color: ${theme.COLORS.GREEN_100};
        `
      : css`
          background-color: ${theme.COLORS.RED_100};
        `}

  flex:1;
`;

export const MealReportContent = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
`;

export const CenterView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;

interface CardMealProps {
  color: "GREEN_100" | "RED_100";
}

export const CardMeal = styled.View<CardMealProps>`
  background-color: red;

  display: flex;
  align-items: center;
  flex: 1;

  height: 100%;

  background-color: ${({ theme, color }) => theme.COLORS[color!]};

  padding: 20px;

  border-radius: 6px;

  margin-top: 8px;
`;

export const ArrowIcon = styled(ArrowLeft).attrs<MealReportProps>((props) => ({
  color:
    props.percentage >= 50
      ? props.theme.COLORS.GREEN_600
      : props.theme.COLORS.RED_600,
  size: 25,
}))``;
