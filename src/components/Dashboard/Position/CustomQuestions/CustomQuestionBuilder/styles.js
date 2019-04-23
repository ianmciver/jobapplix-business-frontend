import styled from "styled-components";

import {
  textLight,
  textDark,
  textMedium,
  textChoicePlaceholder,
  borderMedium,
  borderMedium69,
  borderRed,
  borderGrey
} from "../../../../../constants/colors";
import { TextArea, TextInput } from "../../../../../styles/forms";
import { NextButton } from "../../../../SignUp/SignUpContainer/styles";

export const CustomQuestionBuilderContainer = styled.div`
  width: 100vw;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const BuilderSectionTitle = styled.h2`
  font-size: 1.4rem;
  color: ${textDark};
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
    color: ${textChoicePlaceholder};
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
  border-color: ${borderMedium69};
  background-color: transparent;
  outline: none;

  &:focus {
    border-color: ${borderMedium};
  }
`;

export const AddChoiceButton = styled(NextButton)`
  margin: 10px 0 0 20px;
  border: none;
  padding-left: 0;

  &:hover {
    background-color: transparent;
    color: ${textDark};
  }
  svg {
    fill: ${textMedium};
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
  border-bottom: 1px solid ${borderGrey};
`;

export const OptionCancelContainer = styled.div`
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  margin-left: 10px;
  svg {
    fill: ${textMedium};
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
`;

export const AddButton = styled(NextButton)`
  border-color: ${borderGrey};
  color: ${borderGrey};
  margin: 0 20px 30px 0;
  &:hover {
    background-color: ${borderGrey};
    color: ${textLight};
  }
`;

export const CancelButton = styled(NextButton)`
  border-color: ${borderRed};
  color: ${borderRed};

  &:hover {
    background-color: ${borderRed};
    color: ${textLight};
  }
`;
