import styled from "styled-components";

import {
  textDark,
  borderGrey,
  borderMedium,
  borderLight
} from "../constants/colors";

export const TextInput = styled.input`
  width: ${props => props.width || `100%`};
  color: ${props => props.color || textDark};
  border-width: 0px;
  border-bottom: 1px solid ${borderGrey};
  outline: none;
  padding: 3px 0;
  font-size: 1.6rem;
  margin: 0 0 20px;
  &:focus {
    border-bottom: 1px solid ${borderMedium};
  }
  &::placeholder {
    color: ${borderLight};
  }
  &::-ms-input-placeholder {
    color: ${borderLight};
  }
`;
