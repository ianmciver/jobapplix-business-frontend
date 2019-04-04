import styled from "styled-components";

import {
  borderMedium,
  borderQuestion,
  textDark
} from "../../../../constants/colors";

export const ApplicationsGroup = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${borderMedium};
`;

export const ApplicationsGroupHead = styled.div`
  width: 100vw;
  display: flex;
  border-bottom: 1px solid ${borderQuestion};
`;

export const ApplicationsGroupColumnOne = styled.div`
  padding: 0px 0px 5px 7vw;
  height: 35px;
  width: 40.8%;
  max-width: 169px;
  display: flex;
  align-items: flex-end;
`;
export const ApplicationsGroupColumnTwo = styled.div`
  padding-bottom: 5px;
  height: 35px;
  width: 35.2%;
  max-width: 145px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const ApplicationsGroupColumnThree = styled.div`
  padding-bottom: 5px;
  height: 35px;
  width: 24%;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ApplicationsGroupColumnTitle = styled.span`
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${textDark};
`;

// name: 169 40.8%, group 145.7 35.2%, details 99.36 (24%)
