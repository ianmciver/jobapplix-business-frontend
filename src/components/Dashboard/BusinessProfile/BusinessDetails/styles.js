import styled from "styled-components";

import {} from "../../../../constants/colors";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const BusinessLogo = styled.img`
  max-width: 75%;
  max-height: 100px;
  margin-bottom: 20px;
`;

export const DetailGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

export const DetailTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const DetailValue = styled.h3`
  font-size: 1.6rem;
  white-space: pre-line;
`;
