import styled from "styled-components/native";

export const InputContainer = styled.TextInput.attrs(({ theme }) => ({
  cursorColor: theme.COLORS.GRAY_300,
  selectionColor: theme.COLORS.GRAY_300,
}))`
  padding: 10px;

  border: 1px solid ${(props) => props.theme.COLORS.GRAY_300};
  border-radius: 8px;

  color: ${(props) => props.theme.COLORS.GRAY_700};
  font-size: ${(props) => props.theme.FONT_SIZE.MD}px;

  margin-top: 8px;
`;
