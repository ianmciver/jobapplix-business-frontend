import styled from "styled-components";

import { media } from "../../../../../styles/mediaQueries";

export const ApplicationRowContainer = styled.div`
  display: flex;
  padding-left: 7vw;
`;

export const ApplicationsGroupColumnOne = styled.div`
  height: 44px;
  width: 40.8%;
  display: flex;
  align-items: center;
  ${media.desktop`width: 35%`};
`;

export const ApplicationsGroupColumnTwo = styled.div`
  height: 44px;
  width: 35.2%;
  display: none;
  justify-content: center;
  align-items: center;
  ${media.desktop`display: flex; width: 30%`};
`;

export const ApplicationsGroupColumnThree = styled.div`
  height: 44px;
  width: 35.2%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.desktop`width: 20%`};
`;

export const ApplicationsGroupColumnFour = styled.div`
  height: 44px;
  width: 24%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.desktop`width: 15%`};
`;

export const ApplicationsGroupColumnTitle = styled.span`
  width: 100%;
  text-align: ${props => props.center && props.center};
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${props => props.theme.textDark};
  position: relative;
`;
