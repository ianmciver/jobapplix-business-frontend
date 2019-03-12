import styled from "styled-components";

import { borderGrey, borderRed } from "../../../constants/colors";
import { TextInput } from "../../../styles/forms";

export const PasswordInput = styled(TextInput)`
  border-color: ${props => (props.match ? borderGrey : borderRed)};
  &:focus {
    border-color: ${props => (props.match ? borderGrey : borderRed)};
  }
`;
