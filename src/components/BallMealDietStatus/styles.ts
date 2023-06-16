import styled, { css } from "styled-components/native";

export const BallMealDietStatusContainer = styled.View<{
  isCheatMeal: boolean;
}>`
  width: 10px;
  height: 10px;
  border-radius: 50px;

  ${({ theme, isCheatMeal }) =>
    isCheatMeal
      ? css`
          background-color: ${theme.COLORS.RED_600};
        `
      : css`
          background-color: ${theme.COLORS.GREEN_600};
        `}
`;
