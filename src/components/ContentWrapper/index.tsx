import { ContentContainer } from "./styles";
import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}
export function ContentWrapper({ children }: ContentWrapperProps) {
  return <ContentContainer>{children}</ContentContainer>;
}
