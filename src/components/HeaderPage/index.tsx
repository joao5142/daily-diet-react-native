import { ArrowIcon, HeaderPageContainer, HeaderText } from "./styles";
import { TouchableOpacity } from "react-native";

interface HeaderPageProps {
  text: string;
  onBackButtonPress: () => void;
}
export function HeaderPage({ text, onBackButtonPress }: HeaderPageProps) {
  return (
    <HeaderPageContainer>
      <TouchableOpacity onPress={onBackButtonPress}>
        <ArrowIcon />
      </TouchableOpacity>
      <HeaderText>{text}</HeaderText>
    </HeaderPageContainer>
  );
}
