import styled, { css } from "styled-components";
import {
  textLight,
  borderMedium69,
  borderMedium,
  borderRed,
  borderLight,
  borderGrey,
  backgroundLight
} from "../../../../constants/colors";

import { TextInput } from "../../../../styles/forms";
import { FormButton } from "../../../../styles/buttons";

export const DetailsContainer = styled.div`
  padding: 0 30px 10px;
`;

export const Intro = styled.p`
  font-size: 1.3rem;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Instructions = styled.p`
  font-size: 1.4rem;
  margin-bottom: 5px;
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

export const TextArea = styled.textarea`
  padding: 7px;
  margin-bottom: 25px;
  height: 188px;
  width: 280px;
  border-width: 2px;
  border-color: ${borderMedium69};
  background-color: transparent;
  outline: none;

  &:focus {
    border-color: ${borderMedium};
  }
`;

export const PositionNextButton = styled(FormButton)`
  align-self: flex-start;
  font-weight: 700;
  color: ${props => (props.cancel ? borderRed : borderGrey)};
  padding: 7px 14px;
  border-color: ${props => (props.cancel ? borderRed : borderGrey)};
  margin-bottom: 30px;
  ${props =>
    props.cancel &&
    css`
      margin-left: 25px;
    `}
  display: inline-block;
  &:hover {
    background-color: ${props => (props.cancel ? borderRed : borderGrey)};
    color: ${textLight};
  }

  &:disabled {
    border-color: ${borderLight};
    color: ${borderLight};
    background-color: ${backgroundLight};
  }
`;
