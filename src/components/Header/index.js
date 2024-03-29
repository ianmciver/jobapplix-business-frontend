import React from "react";

import { HeaderContainer, HeaderLogo } from "./styles";
import jobApplixLogo from "../../assets/LogoEqualLight350.png";

export default function Header(props) {
  return (
    <HeaderContainer>
      <HeaderLogo
        onClick={e => (window.location = "https://www.jobapplix.com")}
        src={jobApplixLogo}
      />
    </HeaderContainer>
  );
}
