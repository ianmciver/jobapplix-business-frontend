import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
  dashboard,
  positionsList,
  applications,
  usersList,
  businessProfile
} from "../../../../constants/routes";

import {
  ModalContainer,
  MenuContainer,
  CloseIconContainer,
  MenuItem,
  MenuIconWrapper,
  MenuIcon,
  JALogoContainer,
  JALogo,
  MenuItemTitle
} from "../styles";

import { DesktopOff } from "../../../../styles/mediaQueries";
import Tooltip from "../../../Tooltip";
import BusinessSelector from "../../TopBar/BusinessSelector";

import CloseIcon from "../../../../assets/CloseIcon";
import AppsIcon from "../../../../assets/AppsIcon";
import PositionsIcon from "../../../../assets/PositionsIcon";
import UsersIcon from "../../../../assets/UsersIcon";
import PaymentIcon from "../../../../assets/PaymentIcon";
import FullLogo from "../../../../assets/LogoEqualLight350.png";

import { DashboardContext } from "../../DashboardContext";

function BusinessMenu(props) {
  const [appsTT, setAppsTT] = useState(false);
  const [positionsTT, setPositionsTT] = useState(false);
  const [usersTT, setUsersTT] = useState(false);
  const [paymentsTT, setPaymentsTT] = useState(false);

  const dashboardContext = useContext(DashboardContext);
  const navigateTo = url => e => {
    e.stopPropagation();
    dashboardContext.toggleBusinessMenu();
    props.history.push(url);
  };
  return (
    <>
      <ModalContainer
        show={dashboardContext.businessMenuOpen}
        onClick={dashboardContext.toggleBusinessMenu}
        blur
      />
      <MenuContainer open={dashboardContext.businessMenuOpen}>
        <DesktopOff>
          <JALogoContainer>
            <JALogo src={FullLogo} alt="Job Applix logo." />
          </JALogoContainer>
        </DesktopOff>
        <CloseIconContainer
          onClick={dashboardContext.toggleBusinessMenu}
          show={dashboardContext.businessMenuOpen}
        >
          <CloseIcon width="25px" height="25px" />
        </CloseIconContainer>
        <DesktopOff>
          <BusinessSelector />
        </DesktopOff>
        <MenuItem
          onClick={navigateTo(`${dashboard}${applications}`)}
          onMouseEnter={e => setAppsTT(true)}
          onMouseLeave={e => setAppsTT(false)}
        >
          <MenuIconWrapper>
            <MenuIcon>
              <AppsIcon />
            </MenuIcon>
          </MenuIconWrapper>
          <MenuItemTitle>Applications</MenuItemTitle>
          <Tooltip text="View Applications" x={85} show={appsTT} />
        </MenuItem>
        {props.business.role < 13 && (
          <>
            <MenuItem
              onClick={navigateTo(`${dashboard}${positionsList}`)}
              onMouseEnter={e => setPositionsTT(true)}
              onMouseLeave={e => setPositionsTT(false)}
            >
              <MenuIconWrapper>
                <MenuIcon>
                  <PositionsIcon />
                </MenuIcon>
              </MenuIconWrapper>
              <MenuItemTitle>Positions</MenuItemTitle>
              <Tooltip
                text="Add or Update Positions"
                x={85}
                show={positionsTT}
              />
            </MenuItem>
            <MenuItem
              onClick={navigateTo(`${dashboard}${usersList}`)}
              onMouseEnter={e => setUsersTT(true)}
              onMouseLeave={e => setUsersTT(false)}
            >
              <MenuIconWrapper>
                <MenuIcon>
                  <UsersIcon />
                </MenuIcon>
              </MenuIconWrapper>
              <MenuItemTitle>Manage Users</MenuItemTitle>
              <Tooltip text="Manage Business Users" x={85} show={usersTT} />
            </MenuItem>
          </>
        )}
        {props.business.role < 12 && (
          <MenuItem
            onClick={navigateTo(`${dashboard}${businessProfile}`)}
            onMouseEnter={e => setPaymentsTT(true)}
            onMouseLeave={e => setPaymentsTT(false)}
          >
            <MenuIconWrapper>
              <MenuIcon>
                <PaymentIcon />
              </MenuIcon>
            </MenuIconWrapper>
            <MenuItemTitle>Manage Account</MenuItemTitle>
            <Tooltip
              text="Business Profile & Payments"
              x={85}
              show={paymentsTT}
            />
          </MenuItem>
        )}
      </MenuContainer>
    </>
  );
}

export default connect(state => ({ business: state.business }))(
  withRouter(BusinessMenu)
);
