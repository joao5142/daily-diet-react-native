import styled from "styled-components/native";
import { ColorType } from "@theme/index";

export const CardContainer = styled.View<ColorType>`
  background-color: ${({ theme, color }) => theme.COLORS[color!]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px 0px;
`;
