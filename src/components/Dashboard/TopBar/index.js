import React, { useContext } from "react";
import { connect } from "react-redux";

import hamburger from "../../../assets/hamburger.svg";
import UserIcon from "../../../assets/UserIcon";

import { DashboardContext } from "../DashboardContext";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderHamburger,
  HeaderUserIcon,
  HeaderUserImage
} from "./styles";
import jobApplixLogo from "../../../assets/Icon100.png";

function TopBar(props) {
  const dashboardContext = useContext(DashboardContext);
  return (
    <HeaderContainer>
      <HeaderHamburger
        src={hamburger}
        alt="Open Menu"
        onClick={dashboardContext.toggleBusinessMenu}
      />
      <HeaderLogo src={jobApplixLogo} />
      <HeaderUserIcon
        onClick={dashboardContext.toggleUserMenu}
        thin={!!props.user.image_url}
      >
        {props.user.image_url ? (
          <HeaderUserImage image={props.user.image_url} />
        ) : (
          <UserIcon width="22.5px" height="25px" />
        )}
      </HeaderUserIcon>
    </HeaderContainer>
  );
}

export default connect(state => ({ user: state.businessUser }))(TopBar);
