import styled from "styled-components";

import {
  positionBuilderText,
  borderMedium
} from "../../../../constants/colors";

export const ShiftTimesContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${positionBuilderText};
`;

export const DividerLine = styled.div`
  width: 40%;
  border-bottom: 1px solid ${borderMedium};
  align-self: flex-start;
`;

export const Instructions = styled.p`
  margin: 10px 0;
  font-size: 1.1rem;
`;
export const QuestionsContainer = styled.div`
  margin-right: 30px;
  display: flex;
`;

export const SecondInstructions = styled(Instructions)`
  font-size: 1.3rem;
  margin-bottom: 5px;
`;

export const PresetContainer = styled.div`
  margin: 10px 0 0;
  display: flex;
  font-size: 1.2rem;
  font-style: italic;
`;

export const PresetTitle = styled.p`
  margin-right: 5px;
`;

export const PresetTimesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShiftTimeBuilderContainer = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
`;

export const ShiftTimeBuilderHeader = styled.h2`
  font-size: 1.4rem;
  margin: 15px 0;
`;

export const ShiftTimeLabel = styled.h3`
  font-size: 1.3rem;
  margin: 20px 0 10px;
`;

export const TimesDropdownContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

export const TimesDropdownLabel = styled.p`
  font-size: 1.3rem;
  margin-right: ${props => (props.margin ? props.margin : "7px")};
`;

export const ThirdShiftQuestion = styled.div`
  margin: 0 10px;
`;
