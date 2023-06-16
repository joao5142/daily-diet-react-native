import { BoxWrapper } from "@components/BoxWrapper";
import { Input } from "@components/Input";
import { Text } from "@components/Text";

import { Button } from "@components/Button";
import { BallMealDietStatus } from "@components/BallMealDietStatus";

import { Col, Row } from "@utils/styles";

import { ButtonDietStatus } from "./styles";

import { IMeal } from "@utils/types/meal";

import { Alert, View } from "react-native";

import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import * as zod from "zod";
import { useEffect, useState } from "react";

const FormMealSchema = zod.object({
  id: zod.string().optional(),
  name: zod.string(),
  description: zod.string(),
  date: zod.string(),
  hour: zod.string(),
  isCheatMeal: zod.boolean(),
});

type FormSchemaProps = zod.infer<typeof FormMealSchema>;

interface FormProps {
  buttonSubmitText: string;
  meal?: IMeal;
  onFormSubmit: (meal: FormSchemaProps) => void;
}

export function Form({ buttonSubmitText, onFormSubmit, meal }: FormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: meal,
    resolver: zodResolver(FormMealSchema),
  });
  console.log(errors);
  function handleFormSubmit(data: FormSchemaProps) {
    if (Object.keys(errors).length == 0) {
      onFormSubmit(data);
    } else {
      Alert.alert(
        "Error ao Editar",
        "Verifique  se os campos estão preenchidos corretamente."
      );
    }
  }

  useEffect(() => {
    if (meal) {
      reset({ ...meal });
    }
  }, [reset, meal]);

  return (
    <>
      <View>
        <BoxWrapper>
          <Text text="Nome" size="SM" fontFamily="BOLD" />
          <Controller
            defaultValue={meal?.name}
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            )}
          />
        </BoxWrapper>

        <BoxWrapper marginTop={20}>
          <Text text="Descricao" size="SM" fontFamily="BOLD" />
          <Controller
            defaultValue={meal?.description}
            name="description"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                numberOfLines={5}
                textAlignVertical="top"
              />
            )}
          />
        </BoxWrapper>
        <BoxWrapper marginTop={20}>
          <Row>
            <Col>
              <Text text="Data" size="SM" fontFamily="BOLD" />
              <Controller
                defaultValue={meal?.date}
                name="date"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    textAlignVertical="top"
                  />
                )}
              />
            </Col>
            <Col>
              <Text text="Hora" size="SM" fontFamily="BOLD" />
              <Controller
                defaultValue={meal?.hour}
                name="hour"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    textAlignVertical="top"
                  />
                )}
              />
            </Col>
          </Row>
        </BoxWrapper>

        <BoxWrapper marginTop={20}>
          <BoxWrapper marginBottom={10}>
            <Text text="Esta dentro da dieta?" size="SM" fontFamily="BOLD" />
          </BoxWrapper>

          <Controller
            name="isCheatMeal"
            defaultValue={meal?.isCheatMeal ?? false}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Row>
                <Col>
                  <ButtonDietStatus
                    isActive={!value}
                    status="stayOnDiet"
                    onPress={() => onChange(false)}
                  >
                    <BallMealDietStatus isCheatMeal={false} />
                    <Text text="Sim" size="SM" fontFamily="BOLD" />
                  </ButtonDietStatus>
                </Col>
                <Col>
                  <ButtonDietStatus
                    isActive={value}
                    status="cheatMeal"
                    onPress={() => onChange(true)}
                  >
                    <BallMealDietStatus isCheatMeal={true} />
                    <Text text="Não" size="SM" fontFamily="BOLD" />
                  </ButtonDietStatus>
                </Col>
              </Row>
            )}
          />
        </BoxWrapper>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
        <Button onPress={handleSubmit(handleFormSubmit)}>
          <Text
            size="SM"
            text={buttonSubmitText}
            color="WHITE"
            fontFamily="BOLD"
          />
        </Button>
      </View>
    </>
  );
}
