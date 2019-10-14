import styled from "styled-components";
import { lighten, darken } from "polished";

import { media } from "../../../styles/mediaQueries";
import { FormButton } from "../../../styles/buttons";

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

export const UpdateButton = styled(FormButton)`
  align-self: flex-start;
  font-weight: 700;
  color: ${props => props.theme.borderGrey};
  padding: 7px 14px;
  border-color: ${props => props.theme.borderGrey};
  margin: 20px 0 30px 0;
  display: inline-block;
  &:hover {
    background-color: ${props => props.theme.borderGrey};
    color: ${props => props.theme.textLight};
  }

  &:disabled {
    border-color: ${props => props.theme.borderLight};
    color: ${props => props.theme.borderLight};
    background-color: ${props => props.theme.backgroundLight};
  }
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

export const EditButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 30px;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 5px 10px -1px rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;

  svg {
    width: 15px;
    height: 15px;
    fill: ${props => props.theme.textBlue};
    margin-right: 7px;
  }

  span {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 700px;
    color: ${props => props.theme.textBlue};
  }

  &:hover {
    svg {
      fill: ${props => darken(0.1, props.theme.textBlue)};
    }
    span {
      color: ${props => darken(0.1, props.theme.textBlue)};
    }
    border: 1px solid ${props => lighten(0.4, props.theme.textBlue)};
  }

  &:hover:active {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
`;
