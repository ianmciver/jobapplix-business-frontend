import styled, { css } from "styled-components";
import { media } from "../../../styles/mediaQueries";
import {
  backgroundBlue35percent,
  textDarkBlue,
  textLight,
  backgroundBlue,
  textDark,
  backgroundWhite,
  borderLight
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
  margin-top: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  width: 100%;
  /* max-width: 800px; */
  background-color: ${backgroundWhite};
  ${media.desktop`
    padding: 40px 50px;
    /* border: 1px solid ${borderLight}; */
    /* border-radius: 7px; */
    /* box-shadow: 1px 1px 2px ${borderLight}; */
    margin: 30px 10px 0;
  `}
`;

export const ApplicationsTitle = styled.h2`
  font-size: 1.9rem;
  color: ${textDark};
  text-transform: uppercase;
`;
