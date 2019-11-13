import styled from "styled-components";
import { lighten } from "polished";
import { NextButton } from "../../../../styles/forms2";
import { media } from "../../../../styles/mediaQueries";

export const ProfileContainer = styled.div`
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

export const ProfileTitle = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.textDark};
  margin-bottom: 20px;
  align-self: flex-start;
`;

export const Details = styled.p`
  padding: 20px 0;
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 90px;
  width: 100%;
  ${media.desktop`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `}
`;

export const CancelButton = styled(NextButton)`
  margin-right: 20px;
  background-image: none;
  background-color: ${props => props.theme.backgroundGrey};
  height: 40px;
  &:hover {
    background-color: ${props => lighten(0.1, props.theme.backgroundGrey)};
  }
`;

export const UpdateButton = styled(NextButton)``;

export const InfoBody = styled.span`
  font-size: 1.6rem;
  line-height: 3rem;
`;
