import { ContentContainer } from "@components/ContentWrapper/styles";

import styled from "styled-components/native";

export const BoxContentContainer = styled(ContentContainer)`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 40px;

  flex: 1;
`;
