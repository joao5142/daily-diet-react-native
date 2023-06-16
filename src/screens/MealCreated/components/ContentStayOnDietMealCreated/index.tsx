import { BoxWrapper } from "@components/BoxWrapper";

import { Text } from "@components/Text";

import { View, Text as TextNative } from "react-native";

import SuccessIllustration from "@assets/success-illustration.svg";

import { ContentWrapper } from "@components/ContentWrapper";

export function ContentStayOnDietMealCreated() {
  return (
    <ContentWrapper>
      <BoxWrapper marginBottom={30}>
        <Text
          align="center"
          text="Continue assim!"
          size="XL"
          color="GREEN_600"
          fontFamily="BOLD"
        />
        <BoxWrapper marginTop={8}>
          <TextNative style={{ textAlign: "center" }}>
            Você continua
            <Text text=" dentro da dieta" fontFamily="BOLD" /> . Muito bem!
          </TextNative>
        </BoxWrapper>
      </BoxWrapper>
      <View style={{ alignItems: "center" }}>
        <SuccessIllustration />
      </View>
    </ContentWrapper>
  );
}
