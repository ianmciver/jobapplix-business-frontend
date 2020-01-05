import styled, { css } from "styled-components";

export const QuestionGroupContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.backgroundWhite};
  padding: 15px 30px;
  display: flex;
  flex-direction: column;

  &:nth-of-type(even) {
    background-color: ${props => props.theme.backgroundQuestion};
  }

  &:last-of-type {
    margin-bottom: 30px;
  }

  svg {
    width: 18px;
    height: 18px;
    transition: transform 300ms;
    cursor: pointer;
    flex-shrink: 0;
  }

  .selected {
    fill: ${props => props.theme.textBlue};
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
  font-size: 1.4rem;
  ${props =>
    props.open &&
    css`
      color: ${props.theme.textBlue};
    `}
`;

export const OpenSvg = styled.svg`
  width: 15px;
  height: 15px;
`;
