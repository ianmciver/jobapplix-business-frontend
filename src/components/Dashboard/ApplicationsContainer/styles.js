import styled from "styled-components";
import { media } from "../../../styles/mediaQueries";

export const ApplicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.backgroundWhite};
  margin-top: 35px;
  ${media.desktop`
    margin-bottom: 50px;
    border-radius: 7px;
    margin-left: 345px;
    width: calc(100% - 355px);
  `}
`;

export const ApplicationsTitle = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.textDark};
  margin-bottom: 30px;
  margin-left: 30px;
  align-self: flex-start;
`;
