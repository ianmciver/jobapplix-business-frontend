import React, { useContext } from "react";
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
  CloseIcon,
  SubjectContainer,
  SubjectImageContainer,
  SubjectImageHolder,
  SubjectImage,
  AddImageText,
  SubjectNameContainer,
  SubjectName,
  SubjectTitle,
  MenuItem,
  MenuChevron,
  MenuItemTitle,
  BusinessLogoContainer,
  LogoNameHolder,
  BusinessLogo,
  BusinessName,
  BusinessURL
} from "../styles";

import Chevron from "../../../../assets/Chevron";
import UserIcon from "../../../../assets/UserIcon";

import { DashboardContext } from "../../DashboardContext";
import { textBlue } from "../../../../constants/colors";

function BusinessMenu(props) {
  const dashboardContext = useContext(DashboardContext);
  const navigateTo = url => e => {
    dashboardContext.toggleBusinessMenu();
    props.history.push(url);
  };
  return (
    <>
      <ModalContainer
        show={dashboardContext.businessMenuOpen}
        onClick={dashboardContext.toggleBusinessMenu}
      />
      <MenuContainer open={dashboardContext.businessMenuOpen} left>
        <CloseIcon onClick={dashboardContext.toggleBusinessMenu} left>
          <Chevron width={"20px"} height={"20px"} color={"white"} />
        </CloseIcon>
        <BusinessLogoContainer>
          <LogoNameHolder>
            <BusinessLogo image={props.business.image_url} />
            <BusinessName>{props.business.name}</BusinessName>
          </LogoNameHolder>
          {/* <Chevron width={"20px"} height={"20px"} color={textBlue} /> */}
        </BusinessLogoContainer>
        <MenuItem onClick={navigateTo(`${dashboard}${applications}`)}>
          <MenuItemTitle>Applications</MenuItemTitle>
        </MenuItem>
        {props.business.role < 13 && (
          <>
            <MenuItem onClick={navigateTo(`${dashboard}${positionsList}`)}>
              <MenuItemTitle>Positions</MenuItemTitle>
            </MenuItem>
            <MenuItem onClick={navigateTo(`${dashboard}${usersList}`)}>
              <MenuItemTitle>Business Users</MenuItemTitle>
            </MenuItem>
          </>
        )}
        {props.business.role < 12 && (
          <MenuItem onClick={navigateTo(`${dashboard}${businessProfile}`)}>
            <MenuItemTitle>Business Profile & Payments</MenuItemTitle>
          </MenuItem>
        )}
        {/* <BusinessURL>
          https://apply.jobapplix.com/{props.business.url}
        </BusinessURL> */}
      </MenuContainer>
    </>
  );
}

export default connect(state => ({ business: state.business }))(
  withRouter(BusinessMenu)
);
