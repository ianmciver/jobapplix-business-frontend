import styled from "styled-components";
import { lighten, darken } from "polished";

import { media } from "../../../styles/mediaQueries";

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

export const ProfileDescription = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.textDark};
  line-height: 1.6rem;
  max-width: 600px;
  margin-bottom: 30px;
`;

export const ProfileTitle = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.textDark};
  margin-bottom: 20px;
  align-self: flex-start;
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
