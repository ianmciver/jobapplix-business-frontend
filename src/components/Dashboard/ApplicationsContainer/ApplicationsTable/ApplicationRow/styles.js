import styled from "styled-components";

import { textDark } from "../../../../../constants/colors";

export const ApplicationRowContainer = styled.div`
  display: flex;
  padding-left: 7vw;
`;

export const ApplicationsGroupColumnOne = styled.div`
  height: 44px;
  width: 40.8%;
  max-width: 169px;
  display: flex;
  align-items: center;
`;
export const ApplicationsGroupColumnTwo = styled.div`
  height: 44px;
  width: 35.2%;
  max-width: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ApplicationsGroupColumnThree = styled.div`
  height: 44px;
  width: 24%;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ApplicationsGroupColumnTitle = styled.span`
  width: 100%;
  text-align: ${props => props.center && props.center};
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${textDark};
  position: relative;
`;
