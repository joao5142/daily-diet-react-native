import { ReactNode } from "react";

import { CardContainer } from "./styles";

import { ColorType } from "@theme/index";

interface CardProps extends ColorType {
  children: ReactNode;
}
export function Card({ children, color }: CardProps) {
  return <CardContainer color={color}>{children}</CardContainer>;
}
