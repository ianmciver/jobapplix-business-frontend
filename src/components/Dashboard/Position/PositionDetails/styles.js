import styled, { css } from "styled-components";
import { lighten } from "polished";

import { TextInput, TextArea, NextButton } from "../../../../styles/forms2";

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

export const PositionNextButton = styled(NextButton)``;

export const PositionCancelButton = styled(NextButton)`
  margin-right: 20px;
  background-image: none;
  background-color: ${props => props.theme.borderRed};
  height: 40px;
  &:hover {
    background-color: ${props => lighten(0.1, props.theme.borderRed)};
  }
`;
