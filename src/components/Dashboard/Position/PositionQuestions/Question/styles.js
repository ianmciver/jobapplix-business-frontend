import styled from "styled-components";

import { borderMedium, textDark } from "../../../../../constants/colors";

export const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin: 10px 0;
`;

export const QuestionCheckBox = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 1px solid ${borderMedium};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
    transform: rotate(45deg);
  }
`;

export const QuestionText = styled.span`
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: ${textDark};
`;
