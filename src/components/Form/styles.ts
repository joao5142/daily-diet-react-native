import { MealStatusType } from "@utils/types/meal";

import styled, { css } from "styled-components/native";

interface ButtonDietStatusProps {
  status: MealStatusType;
  isActive: boolean;
}

function dietColorByStatus(
  status: MealStatusType,
  isActive: boolean,
  theme: any
) {
  if (isActive) {
    return status === "stayOnDiet"
      ? css`
          border: 1px solid ${theme.COLORS.GREEN_600};
          background-color: ${theme.COLORS.GREEN_100};
        `
      : css`
          border: 1px solid ${theme.COLORS.RED_600};
          background-color: ${theme.COLORS.RED_100};
        `;
  }
}
export const ButtonDietStatus = styled.TouchableOpacity<ButtonDietStatusProps>`
  ${({ theme }) => css`
    border-radius: 6px;

    background-color: ${theme.COLORS.GRAY_200};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid transparent;
    padding: 20px 0px;
  `}
  ${({ theme, status, isActive }) => {
    return dietColorByStatus(status, isActive, theme);
  }}
`;
