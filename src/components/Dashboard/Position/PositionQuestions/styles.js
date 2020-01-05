import styled from "styled-components";
import { lighten } from "polished";

import { TextInput, TextArea, NextButton } from "../../../../styles/forms2";

export const PositionQuestionsContainer = styled.div`
  width: 100%;
`;

export const InstructionSpan = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.textDark};
  line-height: 1.6rem;
  max-width: 600px;
  margin-bottom: 30px;
`;

export const ItalicsSpan = styled(InstructionSpan)`
  font-style: italic;
`;

export const PositionNextButton = styled(NextButton)``;

export const PositionCancelButton = styled(NextButton)`
  margin-right: 20px;
  background-image: none;
  background-color: ${props => props.theme.borderRed};
  height: 40px;
  &:hover {
    background-color: ${props => lighten(0.1, props.theme.borderRed)};
  }
`;

export const PositionName = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.textBlue};
  font-style: italic;
  margin-bottom: 20px;
`;

export const StandardAppContainer = styled.div`
  margin: 20px 0;
`;
