import styled, { css } from "styled-components";
import { media } from "../../../styles/mediaQueries";
import {
  backgroundBlue35percent,
  textDarkBlue,
  textLight,
  backgroundBlue,
  textDark,
  backgroundWhite
} from "../../../constants/colors";

export const FeaturesGroupContainer = styled.div`
  position: fixed;
  top: 156px;
  width: 100vw;
  background-color: ${backgroundWhite};
  z-index: 100;
  ${media.desktop`
    top: 50px;
    width: calc(100vw - 319px);
  `}
`;

export const FeaturesGroup = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${backgroundBlue35percent};
  display: flex;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${backgroundWhite};
  ${media.desktop`
    margin-top: 35px;
    margin-bottom: 50px;
    border-radius: 7px;
    margin-left: 345px;
    width: calc(100% - 355px);
  `}
`;

export const ApplicationsTitle = styled.h2`
  font-size: 3.5rem;
  color: ${textDark};
  margin-bottom: 30px;
  margin-left: 30px;

  align-self: flex-start;
`;
