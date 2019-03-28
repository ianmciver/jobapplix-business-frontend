import styled from "styled-components";

import {
  textBlue,
  textLight,
  borderBlue,
  borderRed,
  backgroundBlue
} from "../../../../constants/colors";
import { TextArea, TextInput } from "../../../../styles/forms";
import { NextButton } from "../../../SignUp/SignUpContainer/styles";

export const CustomQuestionBuilderContainer = styled.div`
  width: 100vw;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const BuilderTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${textBlue};
  margin-bottom: 10px;
`;

export const BuilderInstructions = styled.p`
  font-size: 1.1rem;
`;

export const BuilderSection = styled.div`
  width: 100%;
  margin: 20px 0 10px;
`;

export const BuilderSectionInstructions = styled.span`
  font-size: 1.1rem;
  font-style: italic;
`;

export const BuilderTextInput = styled(TextInput)`
  margin-bottom: 3px;
`;

export const BuilderTextArea = styled(TextArea)`
  padding: 0 5px;
  margin-bottom: 3px;
`;

export const AddChoiceButton = styled(NextButton)`
  margin-top: 10px;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
`;

export const OptionCancelContainer = styled.div`
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  margin-left: 10px;
  svg {
    fill: ${textBlue};
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
`;

export const AddButton = styled(NextButton)`
  border-color: ${borderBlue};
  color: ${textBlue};
  margin: 0 20px 30px 0;
  &:hover {
    background-color: ${backgroundBlue};
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
