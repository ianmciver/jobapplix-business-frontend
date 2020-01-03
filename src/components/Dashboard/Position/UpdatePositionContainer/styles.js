import styled from "styled-components";
import { media } from "../../../../styles/mediaQueries";

export const UpdatePosContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  width: 100%;
  max-width: 600px;
  position: relative;
  ${media.desktop`
    width: calc(100% - 160px);
    max-width: 1000px;
    margin-top: 50px;
    margin-left: 105px;
    margin-right: 50px;
  `}
`;

export const UpdateTitle = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.textDark};
  margin-bottom: 20px;
  align-self: flex-start;
`;
