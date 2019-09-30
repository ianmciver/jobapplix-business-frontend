import styled from "styled-components";

import {} from "../../../../constants/colors";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BusinessLogoContainer = styled.div`
  max-width: 100%;
  max-height: 200px;
  margin-bottom: 10px;
`;

export const BusinessLogo = styled.img`
  max-width: 100%;
  max-height: 200px;
`;

export const DetailGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

export const DetailContainer = styled.div`
  border: 1px solid ${props => props.theme.borderMedium69};
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 5px;
  align-self: flex-start;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
`;

export const DetailTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const DetailValue = styled.h3`
  font-size: 1.6rem;
  white-space: pre-line;
  text-transform: capitalize;
`;
