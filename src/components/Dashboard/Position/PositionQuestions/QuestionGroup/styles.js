import styled, { css } from "styled-components";

import {
  backgroundQuestion,
  backgroundWhite,
  borderQuestion,
  textMedium,
  textBlue
} from "../../../../../constants/colors";

export const QuestionGroupContainer = styled.div`
  width: 100vw;
  /* border-bottom: 1px solid ${borderQuestion}; */
  background-color: ${backgroundWhite};
  padding: 15px 30px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &:nth-of-type(even) {
    background-color: ${backgroundQuestion};
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
  font-size: 1.2rem;
  ${props =>
    props.open &&
    css`
      color: ${textBlue};
    `}
`;

export const OpenSvg = styled.svg`
  width: 15px;
  height: 15px;
`;
