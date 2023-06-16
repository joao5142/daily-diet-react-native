import { ReactNode } from "react";

import { BoxWrapperContainer } from "./styles";

export interface IBox {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

interface BoxWrapperProps extends IBox {
  children: ReactNode;
}

export function BoxWrapper({ children, ...rest }: BoxWrapperProps) {
  return <BoxWrapperContainer {...rest}>{children}</BoxWrapperContainer>;
}
