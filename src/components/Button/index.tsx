import { TouchableOpacityProps } from "react-native";

import { ButtonContainer } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  outlined?: boolean;
}

export function Button({ outlined = false, children, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest} outlined={outlined}>
      {children}
    </ButtonContainer>
  );
}
