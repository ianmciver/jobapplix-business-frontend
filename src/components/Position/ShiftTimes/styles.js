import styled from "styled-components";

import { FormButton } from "../../../styles/buttons";
import { NextButton } from "../../SignUp/SignUpContainer/styles";

import {
  textDark,
  textBlue,
  backgroundLight,
  borderDark,
  backgroundBlue,
  backgroundWhite
} from "../../../constants/colors";

export const ShiftTimesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Instructions = styled.p`
  margin: 10px 30px;
  font-size: 1.3rem;
  color: ${textDark};
`;
export const QuestionsContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

export const SecondInstructions = styled(Instructions)`
  font-style: italic;
  span {
    display: block;
    color: ${textBlue};
  }
`;

export const ShiftTimeBuilderContainer = styled.div`
  width: 100%;
  background-color: ${backgroundLight};
  margin: 10px 0;
  padding: 10px 0;
`;

export const ShiftTimeBuilderHeader = styled.h2`
  color: ${textDark};
  font-size: 1.8rem;
  font-weight: 700;
  margin: 15px 30px 0;
`;

export const ShiftTimeLabel = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 20px 30px 10px;
`;

export const SmallCheckBoxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: ${props => props.first && `30px`};
  margin-right: 20px;
`;

export const SmallCheckBox = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid ${borderDark};
  background-color: ${props =>
    props.selected ? backgroundBlue : backgroundWhite};
  margin-right: 10px;
  cursor: pointer;
`;

export const SmallCheckBoxLabel = styled.span`
  font-size: 1.1rem;
  color: ${textDark};
`;

export const TimesDropdownContainer = styled.div`
  margin: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TimeDropdownSeparator = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 7px;
`;

export const FinishButton = styled(NextButton)`
  margin: 20px 30px;
`;
