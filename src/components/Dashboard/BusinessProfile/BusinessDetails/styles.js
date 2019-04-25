import styled from "styled-components";

import {} from "../../../../constants/colors";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BusinessLogo = styled.img`
  max-width: 75%;
  max-height: 100px;
  margin-bottom: 20px;
`;

export const DetailGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`;

export const DetailTitle = styled.h2`
  font-size: 1.6rem;
`;

export const DetailValue = styled.h3`
  font-size: 1.6rem;
`;
