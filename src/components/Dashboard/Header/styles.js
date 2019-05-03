import styled, { css } from "styled-components";

import { media } from "../../../styles/mediaQueries";

import {
  backgroundWhite,
  textBlue,
  textMedium,
  borderBlue,
  borderLight
} from "../../../constants/colors";

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 100;
  border-bottom: 6px solid ${borderBlue};
  top: 52px;
  ${media.desktop`
    display: none;
  `}
`;

export const CompanyContainer = styled.div`
  background-color: ${backgroundWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ImageAndDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 1px solid ${borderLight};
  background-image: ${props => props.image && css`url(${props.image})`};
  background-size: cover;
  background-color: ${backgroundWhite};
  background-repeat: no-repeat;
  flex-shrink: 0;
  margin-right: 15px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.h1`
  text-transform: uppercase;
  color: ${textBlue};
  font-size: 2.1rem;
  margin-bottom: 5px;
`;

export const Applications = styled.h3`
  color: ${textMedium};
  text-transform: uppercase;
  font-size: 1.1rem;
`;

export const ApplicationAmount = styled.span`
  font-weight: 700;
`;
