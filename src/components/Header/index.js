import React from "react";

import { HeaderContainer, HeaderLogo, HeaderHamburger } from "./styles";
import jobApplixLogo from "../../assets/LogoEqualLight350.png";
import hamburger from "../../assets/hamburger.svg";

export default function Header(props) {
  return (
    <HeaderContainer>
      <HeaderLogo src={jobApplixLogo} />
      <HeaderHamburger src={hamburger} />
    </HeaderContainer>
  );
}
