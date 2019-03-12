import styled from "styled-components";

import { borderGrey } from "../constants/colors";

export const FormButton = styled.button`
  border: 2px solid ${props => props.borderColor || borderGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.padding || 0};
  outline: none;
  background-color: ${props => props.bgColor || "transparent"};
  font-size: ${props => props.fontSize || "1.3rem"};
  cursor: pointer;
`;
