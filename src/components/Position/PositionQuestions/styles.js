import styled from "styled-components";

import {
  textDark,
  textBlue,
  textLight,
  backgroundBlue,
  borderBlue,
  borderLight,
  backgroundLight
} from "../../../constants/colors";
import { FormButton } from "../../../styles/buttons";

export const InstructionSpan = styled.p`
  margin: 10px 30px;
  font-size: 1.3rem;
  color: ${textDark};
`;

export const PositionNextButton = styled(FormButton)`
  align-self: flex-start;
  font-weight: 700;
  color: ${textBlue};
  padding: 7px 14px;
  border-color: ${borderBlue};
  margin: 20px 0 30px 30px;
  &:hover {
    background-color: ${backgroundBlue};
    color: ${textLight};
  }

  &:disabled {
    border-color: ${borderLight};
    color: ${borderLight};
    background-color: ${backgroundLight};
  }
`;
