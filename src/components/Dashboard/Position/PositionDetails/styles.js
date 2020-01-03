import styled, { css } from "styled-components";
import { lighten } from "polished";

import { media } from "../../../../styles/mediaQueries";

import { TextInput, TextArea, NextButton } from "../../../../styles/forms2";
import { FormButton } from "../../../../styles/buttons";

export const DetailsContainer = styled.div`
  padding-bottom: 10px;
`;

export const Intro = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.textDark};
  line-height: 1.6rem;
  max-width: 600px;
  margin-bottom: 30px;
`;

export const Instructions = styled.p`
  font-size: 1.4rem;
  margin: 55px 0 5px;
`;

export const SubInstructions = styled.p`
  font-size: 1rem;
  margin-bottom: 7px;
  line-height: 1.4;
`;

export const SubInstructionsItalics = styled(SubInstructions)`
  font-size: 1.2rem;
  font-style: italic;
  margin: 3px 0 20px;
`;

export const PositionNameInput = styled(TextInput)`
  margin-bottom: 5px;

  &::placeholder {
    font-size: 1.3rem;
  }
`;

export const DescriptionArea = styled(TextArea)`
  line-height: 2rem;
`;

export const PositionNextButton = styled(NextButton)`
  /* align-self: flex-start;
  font-weight: 700;
  color: ${props =>
    props.cancel ? props.theme.borderRed : props.theme.borderGrey};
  padding: 7px 14px;
  border-color: ${props =>
    props.cancel ? props.theme.borderRed : props.theme.borderGrey};
  margin-bottom: 30px;
  ${props =>
    props.cancel &&
    css`
      margin-left: 25px;
    `}
  display: inline-block;
  &:hover {
    background-color: ${props =>
      props.cancel ? props.theme.borderRed : props.theme.borderGrey};
    color: ${props => props.theme.textLight};
  }

  &:disabled {
    border-color: ${props => props.theme.borderLight};
    color: ${props => props.theme.borderLight};
    background-color: ${props => props.theme.backgroundLight};
  } */
`;

export const PositionCancelButton = styled(NextButton)`
  margin-right: 20px;
  background-image: none;
  background-color: ${props => props.theme.borderRed};
  height: 40px;
  &:hover {
    background-color: ${props => lighten(0.1, props.theme.borderRed)};
  }
`;
