import styled, { css } from "styled-components";
import { media } from "../../../styles/mediaQueries";
import {
  borderBlue,
  backgroundWhite,
  borderLight,
  textBlue,
  textDark,
  borderQuestion
} from "../../../constants/colors";

export const ModalContainer = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const MenuContainer = styled.div`
  position: fixed;
  height: 100vh;
  ${props =>
    props.left
      ? css`
          left: ${props => (props.open ? 0 : "-319px")};
        `
      : css`
          right: ${props => (props.open ? 0 : "-319px")};
        `}
  width: 100%;
  max-width: 319px;
  ${props =>
    props.left
      ? css`
          border-right: 25px solid ${borderBlue};
        `
      : css`
          border-left: 25px solid ${borderBlue};
        `}

  z-index: 1000;
  transition: right 0.5s, left 0.5s;
  background-color: ${backgroundWhite};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${props => media.desktop`
    ${props.left &&
      `
      left: 0;
      top: 50px;
      border-right: 5px solid ${borderBlue};
      `}
  `}
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  ${props =>
    props.left
      ? css`
          right: -21px;
        `
      : css`
          left: -21px;
        `}

  cursor: pointer;
  ${props =>
    props.left &&
    css`
      transform: rotate(180deg);
    `}
  ${props => media.desktop`
    ${props.left && `display: none`}
  `}
`;

// Experimental styles to follow:
export const BusinessLogoContainer = styled.div`
  width: 90%;
  height: 40px;
  margin: 30px 10px 10px;
  border: 1px solid ${borderLight};
  background-color: ${backgroundWhite};
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    transform: rotate(90deg);
  }
`;
export const LogoNameHolder = styled.div`
  display: flex;
  align-items: center;
`;
export const BusinessLogo = styled.div`
  width: 30px;
  height: 30px;
  ${props =>
    css`
      background: url(${props.image});
    `};
  background-position: center;
  background-size: cover;
  background-color: ${backgroundWhite};
  background-repeat: no-repeat;
`;

export const BusinessName = styled.h2`
  font-size: 1.8rem;
  margin-left: 5px;
`;

// Menu items:

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  border-bottom: 1px solid ${borderQuestion};
  justify-content: flex-start;
  cursor: pointer;

  &:hover {
    h3 {
      color: ${textBlue};
    }

    svg {
      fill: ${textBlue};
    }
  }
`;

export const MenuItemTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${textDark};
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
