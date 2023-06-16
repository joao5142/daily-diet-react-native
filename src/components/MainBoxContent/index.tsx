import { BoxContentContainer } from "./styles";
import { ReactNode } from "react";

interface BoxContentProps {
  children: ReactNode;
}
export function MainBoxContent({ children }: BoxContentProps) {
  return <BoxContentContainer>{children}</BoxContentContainer>;
}
