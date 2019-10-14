import styled from "styled-components";

import { TextArea, TextInput } from "../../../../../styles/forms";
import { NextButton } from "../../../../SignUp/SignUpContainer/styles";

export const CustomQuestionBuilderContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const BuilderSectionTitle = styled.h2`
  font-size: 1.4rem;
  color: ${props => props.theme.textDark};
  margin-bottom: 5px;
`;

export const BuilderSection = styled.div`
  width: 100%;
  margin: 10px 0 10px;
`;

export const BuilderSectionInstructions = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 5px;
`;

export const BuilderTextInput = styled(TextInput)`
  margin-bottom: 3px;
  background-color: transparent;
  border: none;

  &::placeholder {
    font-size: 1.4rem;
    color: ${props => props.theme.textChoicePlaceholder};
  }

  &:focus {
    border: none;
  }
`;

export const BuilderTextArea = styled(TextArea)`
  padding: 7px;
  margin-bottom: 3px;
  height: 188px;
  width: 280px;
  border-color: ${props => props.theme.borderMedium69};
  background-color: transparent;
  outline: none;

  &:focus {
    border-color: ${props => props.theme.borderMedium};
  }
`;

export const AddChoiceButton = styled(NextButton)`
  margin: 10px 0 0 20px;
  border: none;
  padding-left: 0;

  &:hover {
    background-color: transparent;
    color: ${props => props.theme.textDark};
  }
  svg {
    fill: ${props => props.theme.textMedium};
    width: 11px;
    height: 11px;
  }

  span {
    padding-left: 10px;
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 5px;
  border-bottom: 1px solid ${props => props.theme.borderGrey};
`;

export const OptionCancelContainer = styled.div`
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  margin-left: 10px;
  svg {
    fill: ${props => props.theme.textMedium};
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
`;

export const AddButton = styled(NextButton)`
  border-color: ${props => props.theme.borderGrey};
  color: ${props => props.theme.borderGrey};
  margin: 0 20px 30px 0;
  &:hover {
    background-color: ${props => props.theme.borderGrey};
    color: ${props => props.theme.textLight};
  }
`;

export const CancelButton = styled(NextButton)`
  border-color: ${props => props.theme.borderRed};
  color: ${props => props.theme.borderRed};

  &:hover {
    background-color: ${props => props.theme.borderRed};
    color: ${props => props.theme.textLight};
  }
`;
