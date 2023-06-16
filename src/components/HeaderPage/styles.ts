import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const HeaderPageContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ArrowIcon = styled(ArrowLeft).attrs(() => ({
  size: 24,
}))``;
export const HeaderText = styled.Text`
  flex: 1;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
