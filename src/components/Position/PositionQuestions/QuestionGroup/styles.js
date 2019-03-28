import styled from "styled-components";

import {
  backgroundQuestion,
  borderQuestion,
  textMedium,
  textBlue
} from "../../../../constants/colors";

export const QuestionGroupContainer = styled.div`
  width: 100vw;
  border-top: 1px solid ${borderQuestion};
  border-bottom: 1px solid ${borderQuestion};
  background-color: ${backgroundQuestion};
  padding: 15px 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
  &:first-of-type {
    margin: 25px 0 10px;
  }

  svg {
    width: 18px;
    height: 18px;
    fill: ${textMedium};
    transition: transform 300ms;
    cursor: pointer;
    flex-shrink: 0;
  }

  .selected {
    fill: ${textBlue};
    transform: rotate(45deg);
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QuestionTitle = styled.span`
  text-transform: uppercase;
  font-size: 1.5rem;
`;

export const OpenSvg = styled.svg`
  width: 15px;
  height: 15px;
`;
