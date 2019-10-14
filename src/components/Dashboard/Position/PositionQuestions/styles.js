import styled from "styled-components";

import { FormButton } from "../../../../styles/buttons";

export const PositionQuestionsContainer = styled.div`
  width: 100%;
`;

export const InstructionSpan = styled.p`
  margin: 10px 30px;
  font-size: 1.3rem;
  color: ${props => props.theme.textDark};
`;

export const ItalicsSpan = styled(InstructionSpan)`
  font-style: italic;
`;

export const PositionNextButton = styled(FormButton)`
  align-self: flex-start;
  font-weight: 700;
  color: ${props =>
    props.cancel ? props.theme.borderRed : props.theme.textBlue};
  padding: 7px 14px;
  border-color: ${props =>
    props.cancel ? props.theme.borderRed : props.theme.borderBlue};
  margin: 20px 0 30px 30px;
  display: inline-block;
  &:hover {
    background-color: ${props =>
      props.cancel ? props.theme.borderRed : props.theme.backgroundBlue};
    color: ${props => props.theme.textLight};
  }

  &:disabled {
    border-color: ${props => props.theme.borderLight};
    color: ${props => props.theme.borderLight};
    background-color: ${props => props.theme.backgroundLight};
  }
`;

export const PositionName = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.textBlue};
  font-style: italic;
  text-align: center;
  margin-bottom: 20px;
`;

export const StandardAppContainer = styled.div`
  margin: 20px 30px;
`;
