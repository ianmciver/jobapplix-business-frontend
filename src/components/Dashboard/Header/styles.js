import styled from "styled-components";

import {
  backgroundBlue,
  borderMedium,
  backgroundWhite,
  backgroundBlue35percent,
  textLight,
  textDarkBlue
} from "../../../constants/colors";

export const CompanyContainer = styled.div`
  background-color: ${backgroundBlue};
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
  border: 1px solid ${borderMedium};
  background-color: ${backgroundWhite};
  flex-shrink: 0;
  margin-right: 15px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.h1`
  text-transform: uppercase;
  color: ${textLight};
  font-size: 2.1rem;
  margin-bottom: 5px;
`;

export const Applications = styled.h3`
  color: ${textDarkBlue};
  text-transform: uppercase;
  font-size: 1.1rem;
`;

export const ApplicationAmount = styled.span`
  font-weight: 700;
`;

export const FeaturesGroup = styled.div`
  background-color: ${backgroundBlue35percent};
  display: flex;
  justify-content: center;
`;

export const FeaturesButton = styled.span`
  padding: 10px 15px;
  color: ${textDarkBlue};
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: ${backgroundBlue};
    color: ${textLight};
  }
`;
