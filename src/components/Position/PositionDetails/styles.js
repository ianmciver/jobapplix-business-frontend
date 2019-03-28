import styled from "styled-components";
import {
  textBlue,
  textLight,
  borderMedium,
  borderBlue,
  borderLight,
  backgroundBlue,
  backgroundLight
} from "../../../constants/colors";

import { TextInput } from "../../../styles/forms";
import { FormButton } from "../../../styles/buttons";

export const DetailsContainer = styled.div`
  padding: 0 30px 10px;
`;

export const Intro = styled.p`
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

export const Instructions = styled.p`
  font-size: 1.4rem;
  margin-bottom: 5px;
  color: ${textBlue};
`;

export const SubInstructions = styled.p`
  font-size: 1rem;
  margin-bottom: 7px;
`;

export const SubInstructionsItalics = styled(SubInstructions)`
  font-style: italic;
  margin-bottom: 20px;
`;

export const PositionNameInput = styled(TextInput)`
  margin-bottom: 5px;
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 210px;
  padding: 10px;
  border: 2px solid ${borderMedium};
  font-size: 1.1rem;
  line-height: 1.6rem;
  margin-bottom: 20px;
`;

export const PositionNextButton = styled(FormButton)`
  align-self: flex-start;
  font-weight: 700;
  color: ${textBlue};
  padding: 7px 14px;
  border-color: ${borderBlue};
  margin-bottom: 30px;
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
