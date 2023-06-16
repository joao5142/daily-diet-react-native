import { ColorType, FontFamilyType, FontSizeType } from "@theme/index";
import styled, { css } from "styled-components/native";
import { AlignType } from "./index";

interface TextContainerAlignProp {
  align: AlignType;
}
interface TextContainerProps
  extends ColorType,
    FontSizeType,
    FontFamilyType,
    TextContainerAlignProp {}

export const TextContainer = styled.Text<TextContainerProps>`
  ${({ size, color, fontFamily, theme }) => css`
    color: ${theme.COLORS[color!]};
    font-size: ${theme.FONT_SIZE[size!]}px;
    font-family: ${theme.FONT_FAMILY[fontFamily!]};
  `};

  ${({ align }) =>
    align == "center" &&
    css`
      text-align: center;
    `}
`;
