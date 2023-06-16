import { ColorType, FontFamilyType, FontSizeType } from "@theme/index";

import { TextContainer } from "./styles";

export type AlignType = "center" | "start";

interface TextProps extends ColorType, FontSizeType, FontFamilyType {
  text: string;
  align?: AlignType;
}

export function Text({
  text,
  color = "GRAY_700",
  size = "MD",
  fontFamily = "REGULAR",
  align = "start",
}: TextProps) {
  return (
    <TextContainer
      align={align}
      color={color}
      size={size}
      fontFamily={fontFamily}
    >
      {text}
    </TextContainer>
  );
}
