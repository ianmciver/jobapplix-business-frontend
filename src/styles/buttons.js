import styled from "styled-components";

export const FormButton = styled.button`
  border: 2px solid ${props => props.borderColor || props.theme.borderGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.padding || 0};
  outline: none;
  background-color: ${props => props.bgColor || "transparent"};
  font-size: ${props => props.fontSize || "1.3rem"};
  cursor: pointer;
`;
