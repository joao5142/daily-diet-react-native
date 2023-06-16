import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";
import { MealStatusType } from "@utils/types/meal";
import { ContentContainer } from "@components/ContentWrapper/styles";

interface MealViewContainerProps {
  isCheatMeal: boolean;
}
export const MealViewerContainer = styled.View<MealViewContainerProps>`
  ${({ isCheatMeal, theme }) =>
    isCheatMeal
      ? css`
          background-color: ${theme.COLORS.RED_300};
        `
      : css`
          background-color: ${theme.COLORS.GREEN_300};
        `}
  flex: 1;
`;

export const MealViewerContent = styled(SafeAreaView)`
  flex: 1;
`;

export const ButtonMealDietStatus = styled.View`
  margin-top: 15px;
  padding: 8px 20px;
  min-width: 150px;
  max-width: 190px;

  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 20px;
`;

export const Modal = styled(ContentContainer)<{ isVisible: boolean }>`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;

  flex: 1;

  height: 100%;

  background-color: rgba(0, 0, 0, 0.25);
  ${({ isVisible }) =>
    !isVisible &&
    css`
      display: none;
    `}
`;
export const ModalContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  width: 100%;

  padding: 40px 20px 20px 20px;
`;
