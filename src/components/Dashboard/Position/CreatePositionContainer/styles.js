import styled from "styled-components";
import { media } from "../../../../styles/mediaQueries";

export const CreatePosContainer = styled.div`
  margin-top: 25px;
  width: calc(100% - 60px);
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 30px;
  ${media.desktop`
  width: calc(100% - 205px);
    margin-top: 50px;
    margin-left: 155px;
    margin-right: 50px;
  `};
`;

export const CreatePosHeader = styled.h1`
  font-size: 3.5rem;
  color: ${props => props.theme.textDark};
  margin-bottom: 20px;
  align-self: flex-start;
`;
