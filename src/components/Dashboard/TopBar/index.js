import React from "react";
import hamburger from "../../../assets/hamburger.svg";

import { HeaderContainer, HeaderLogo, HeaderHamburger } from "./styles";
import jobApplixLogo from "../../../assets/LogoEqualLight350.png";

export default function Header(props) {
  return (
    <HeaderContainer>
      <HeaderLogo src={jobApplixLogo} />
      <HeaderHamburger src={hamburger} alt="Open Menu" />
    </HeaderContainer>
  );
}
