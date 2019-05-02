import styled, { css } from "styled-components";

import {
  backgroundBlue35percent,
  textDarkBlue,
  textLight,
  backgroundBlue,
  textDark
} from "../../../constants/colors";

export const FeaturesGroup = styled.div`
  position: fixed;
  top: 156px;
  width: 100vw;
  background-color: ${backgroundBlue35percent};
  display: flex;
  justify-content: center;
`;

export const FeaturesButton = styled.span`
  padding: 10px 15px;
  color: ${props => (props.selected ? textLight : textDarkBlue)};
  ${props =>
    props.selected &&
    css`
      background-color: ${backgroundBlue};
    `};
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: ${backgroundBlue};
    color: ${textLight};
  }
`;

export const ApplicationsContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ApplicationsTitle = styled.h2`
  font-size: 1.9rem;
  color: ${textDark};
  text-transform: uppercase;
`;
