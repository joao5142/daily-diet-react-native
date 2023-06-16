import styled, { css } from "styled-components/native";
import { ButtonProps } from "./index";

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  ${({ theme }) => css`
    height: 50px;
    padding: 0px 20px;

    background-color: ${theme.COLORS.GRAY_600};

    border-radius: 6px;

    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;

    color: ${theme.COLORS.WHITE};

    font-size: ${theme.FONT_SIZE.LG}px;
  `};

  ${({ outlined, theme }) =>
    outlined &&
    css`
      background-color: none;
      border: 1px solid ${theme.COLORS.GRAY_700};
      color: ${theme.COLORS.GRAY_700};
    `}
`;
