import styled, { css } from "styled-components";
import { lighten, transparentize } from "polished";

import { media } from "../../../styles/mediaQueries";

export const JALogoContainer = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JALogo = styled.img`
  width: 150px;
`;

export const ModalContainer = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  background-color: ${props =>
    props.blur
      ? transparentize(0.1, props.theme.backgroundWhite)
      : "transparent"};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  ${media.desktop`
    background-color: transparent;
    display: ${props => (props.userShow ? "block" : "none")};
  `}
`;

export const MenuContainer = styled.div`
  position: fixed;
  height: 100vh;
  left: ${props => (props.open ? 0 : "-319px")};
  border-right: 1px solid ${props => props.theme.backgroundNoteBox};
  z-index: 999;
  transition: right 0.5s, left 0.5s;
  background-color: ${props => props.theme.backgroundGrey};
  background-image: ${props =>
    css`linear-gradient(to right, ${lighten(
      0.1,
      props.theme.backgroundGrey
    )} 0, ${props.theme.backgroundGrey} 100%)`};
  display: flex;
  flex-direction: column;
  ${media.desktop`
    left: 0;
    top: 50px;
  `}
`;

export const CloseIconContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.backgroundGrey};
  border: 2px solid ${props => props.theme.backgroundNoteBox};
  border-radius: 50%;
  display: ${props => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  ${media.desktop`
    display: none;
  `}
`;

// Menu items:
export const MenuIconWrapper = styled.div`
  height: 80px;
  padding: 10px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 5px solid transparent;
  margin-right: 10px;
  ${media.desktop`
    padding: 40px 30px;
    width: 100%;
    margin-right: 0;
  `};
`;

export const MenuIcon = styled.div`
  svg {
    fill: ${props => props.theme.textLight};
    width: 30px;
    height: 30px;
  }
`;

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: ${props => props.theme.backgroundNoteBox};
    ${MenuIconWrapper} {
      border-left: 5px solid ${props => props.theme.backgroundBlue};
    }
  }
`;

export const MenuItemTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.3rem;
  /* font-weight: 700; */
  color: ${props => props.theme.textLight};
  text-align: center;
  ${media.desktop`
    display: none;
  `};
`;
