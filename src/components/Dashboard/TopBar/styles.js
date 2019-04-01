import styled from "styled-components";
import { backgroundGrey } from "../../../constants/colors";

export const HeaderContainer = styled.div`
  background-color: ${backgroundGrey};
  width: 100%;
  /* height: 30px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
`;

export const HeaderLogo = styled.img`
  width: 109px;
`;

export const HeaderHamburger = styled.img``;
