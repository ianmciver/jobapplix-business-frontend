import styled, { css } from "styled-components";
import { lighten } from "polished";
import { media } from "../../../styles/mediaQueries";

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.backgroundGrey};
  background-image: ${props =>
    css`linear-gradient(to right, ${lighten(
      0.1,
      props.theme.backgroundGrey
    )} 0, ${props.theme.backgroundGrey} 100%)`};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  ${media.desktop`
      padding-left: 0;
  `}
`;

export const HeaderLogoMobile = styled.img`
  width: 30px;
  cursor: pointer;
  ${media.desktop`display: none;`}
`;
export const HeaderLogoDesktopContainer = styled.div`
  width: 95px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  display: none;
  background-image: ${props =>
    css`linear-gradient(to right, ${lighten(
      0.1,
      props.theme.backgroundGrey
    )} 0, ${props.theme.backgroundGrey} 100%)`};
  ${media.desktop`display: flex;`}
`;
export const HeaderLogoDesktop = styled.img`
  height: 30px;
  padding-left: 5px;
  cursor: pointer;
`;

export const HeaderHamburger = styled.img`
  width: 30px;
  ${media.desktop`display: none;`}
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderUserIcon = styled.div`
  height: 40px;
  width: 40px;
  border: ${props => css`1px solid ${props.theme.backgroundLight}`};
  background-color: ${props => props.theme.backgroundNoteBox};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;

export const UserGreeting = styled.h3`
  display: none;
  ${media.desktop`
    display: initial;
    font-size: 1.6rem;
    color: ${props => props.theme.textLight};
    margin-right: 10px;
  `}
`;

export const HeaderUserImage = styled.div`
  width: 40px;
  height: 40px;
  ${props =>
    css`
      background: url(${props.image});
    `};
  background-position: center;
  background-size: cover;
  background-color: ${props => props.theme.backgroundWhite};
  background-repeat: no-repeat;
  cursor: pointer;
`;
