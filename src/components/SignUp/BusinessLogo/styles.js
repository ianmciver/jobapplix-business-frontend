import styled from "styled-components";
import { media } from "../../../styles/mediaQueries";
export const UploadContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 50px;
  background-color: ${props => props.theme.backgroundGrey};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  ${media.desktop`
  display: grid;
    width: 800px;
    height: 462px;
    grid-template-columns: 40% 10% 50%;
    grid-template-rows: 1fr 1fr 3fr 1fr;
  `};
`;

export const UploadTitle = styled.h2`
  font-size: 2.4rem;
  color: ${props => props.theme.backgroundWhite};
  margin-bottom: 15px;
  ${media.desktop`
    margin-bottom: 0;
    grid-column: 1;
    grid-row: 1;
  `}
`;

export const UploadInstructions = styled.div`
  ${media.desktop`
    grid-column: 1;
    grid-row: 2;
  `};
`;

export const Instructions = styled.p`
  color: ${props => props.theme.backgroundWhite};
  font-size: 1.2rem;
  line-height: 2.2rem;
  margin-bottom: 5px;
`;

export const DropContainer = styled.div`
  border-width: 3px;
  border-style: ${props => (props.background.length > 0 ? "solid" : "dashed")};
  border-color: ${props =>
    props.background.length > 0 ? "transparent" : props.theme.borderLight};
  padding: ${props => (props.background.length > 0 ? "10px" : 0)};
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${props =>
    props.background
      ? `url(${props.background}) no-repeat center center`
      : `transparent`};
  background-size: contain;
  outline: none;
  margin: 25px auto;
  ${media.desktop`
    margin: 0;
    height: 100%;
    grid-column: 3;
    grid-row: 1/5;
  `};
`;

export const DropInstructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.backgroundWhite};
  font-size: 1.6rem;
`;

export const AddIcon = styled.img`
  width: 30px;
  margin-bottom: 10px;
`;

export const AdditionalInstructionsContainer = styled.div`
  ${media.desktop`
    grid-column: 1;
    grid-row: 3;
  `};
`;

export const ButtonContainer = styled.div`
  ${media.desktop`
    grid-column: 1;
    grid-row: 4;
    align-self: end;
  `};
`;

export const SkipOption = styled.span`
  color: ${props => props.theme.textBlue};
  text-decoration: underline;
  font-size: 1.4rem;
  padding: 10px 0;
  cursor: pointer;
`;
