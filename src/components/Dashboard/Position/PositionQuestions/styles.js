import styled from "styled-components";

import {
  textDark,
  textBlue,
  textLight,
  backgroundBlue,
  borderBlue,
  borderRed,
  borderLight,
  backgroundLight
} from "../../../../constants/colors";
import { FormButton } from "../../../../styles/buttons";

export const InstructionSpan = styled.p`
  margin: 10px 30px;
  font-size: 1.3rem;
  color: ${textDark};
`;

export const ItalicsSpan = styled(InstructionSpan)`
  font-style: italic;
`;

export const PositionNextButton = styled(FormButton)`
  align-self: flex-start;
  font-weight: 700;
  color: ${props => (props.cancel ? borderRed : textBlue)};
  padding: 7px 14px;
  border-color: ${props => (props.cancel ? borderRed : borderBlue)};
  margin: 20px 0 30px 30px;
  display: inline-block;
  &:hover {
    background-color: ${props => (props.cancel ? borderRed : backgroundBlue)};
    color: ${textLight};
  }

  &:disabled {
    border-color: ${borderLight};
    color: ${borderLight};
    background-color: ${backgroundLight};
  }
`;

export const PositionName = styled.p`
  font-size: 1.2rem;
  color: ${textBlue};
  font-style: italic;
  text-align: center;
  margin-bottom: 20px;
`;

export const StandardAppContainer = styled.div`
  margin: 20px 30px;
`;
