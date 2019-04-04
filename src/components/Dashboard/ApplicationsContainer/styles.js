import styled from "styled-components";

import {
  backgroundBlue35percent,
  textDarkBlue,
  textLight,
  backgroundBlue,
  textDark
} from "../../../constants/colors";

export const FeaturesGroup = styled.div`
  position: fixed;
  top: 150px;
  width: 100vw;
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
