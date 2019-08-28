import styled, { css } from "styled-components";
import { media } from "../../../styles/mediaQueries";

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.backgroundGrey};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const HeaderLogoMobile = styled.img`
  width: 30px;
  ${media.desktop`display: none;`}
  cursor: pointer;
`;

export const HeaderLogoDesktop = styled.img`
  height: 30px;
  padding-left: 15px;
  display: none;
  cursor: pointer;
  ${media.desktop`display: inline;`}
`;

export const HeaderHamburger = styled.img`
  width: 30px;
  ${media.desktop`display: none;`}
`;

export const HeaderUserIcon = styled.div`
  height: 30px;
  width: 30px;
  border: ${props => (props.thin ? "1px" : "2px")} solid white;
  background-color: ${props => props.theme.backgroundWhite};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
`;

export const HeaderUserImage = styled.div`
  width: 30px;
  height: 30px;
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
