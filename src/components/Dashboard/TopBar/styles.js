import styled, { css } from "styled-components";
import { backgroundGrey, backgroundWhite } from "../../../constants/colors";

export const HeaderContainer = styled.div`
  background-color: ${backgroundGrey};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const HeaderLogo = styled.img`
  width: 30px;
`;

export const HeaderHamburger = styled.img`
  width: 30px;
`;

export const HeaderUserIcon = styled.div`
  height: 30px;
  width: 30px;
  border: ${props => (props.thin ? "1px" : "2px")} solid white;
  background-color: ${backgroundWhite};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  background-color: ${backgroundWhite};
  background-repeat: no-repeat;
`;
