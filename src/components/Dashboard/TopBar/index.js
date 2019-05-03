import React, { useContext } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { dashboard } from "../../../constants/routes";

import hamburger from "../../../assets/hamburger.svg";
import UserIcon from "../../../assets/UserIcon";
import jobApplixLogoDesktop from "../../../assets/LogoEqualLight350.png";

import { DashboardContext } from "../DashboardContext";
import {
  HeaderContainer,
  HeaderLogoMobile,
  HeaderLogoDesktop,
  HeaderHamburger,
  HeaderUserIcon,
  HeaderUserImage
} from "./styles";
import jobApplixLogoMobile from "../../../assets/Icon100.png";

function TopBar(props) {
  const dashboardContext = useContext(DashboardContext);
  return (
    <HeaderContainer>
      <HeaderHamburger
        src={hamburger}
        alt="Open Menu"
        onClick={dashboardContext.toggleBusinessMenu}
      />
      <HeaderLogoMobile
        src={jobApplixLogoMobile}
        onClick={e => props.history.push(dashboard)}
      />
      <HeaderLogoDesktop
        src={jobApplixLogoDesktop}
        onClick={e => props.history.push(dashboard)}
      />
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

export default connect(state => ({ user: state.businessUser }))(
  withRouter(TopBar)
);
