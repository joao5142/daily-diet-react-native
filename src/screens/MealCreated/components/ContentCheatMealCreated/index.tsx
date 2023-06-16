import { BoxWrapper } from "@components/BoxWrapper";
import { Text } from "@components/Text";

import { Text as TextNative, View } from "react-native";

import ErrorIllustration from "@assets/error-illustration.svg";

import { ContentWrapper } from "@components/ContentWrapper";

export function ContentCheatMealCreated() {
  return (
    <ContentWrapper>
      <BoxWrapper marginBottom={30}>
        <Text
          align="center"
          text="Que pena!"
          size="XL"
          color="RED_600"
          fontFamily="BOLD"
        />
        <BoxWrapper marginTop={8}>
          <TextNative style={{ textAlign: "center" }}>
            Você <Text text=" saiu da dieta" fontFamily="BOLD" /> dessa vez, mas
            continue se esforçando e não desista!
          </TextNative>
        </BoxWrapper>
      </BoxWrapper>
      <View style={{ alignItems: "center" }}>
        <ErrorIllustration />
      </View>
    </ContentWrapper>
  );
}
