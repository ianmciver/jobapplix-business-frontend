import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
  dashboard,
  positionsList,
  applications
} from "../../../../constants/routes";

import {
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
  MenuItemTitle
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
    <MenuContainer open={dashboardContext.businessMenuOpen} left>
      <CloseIcon onClick={dashboardContext.toggleBusinessMenu} left>
        <Chevron width={"20px"} height={"20px"} color={"white"} />
      </CloseIcon>
      <SubjectContainer>
        <SubjectImageContainer>
          {props.business.image_url ? (
            <>
              <SubjectImageHolder>
                <SubjectImage image={props.business.image_url} />
              </SubjectImageHolder>
            </>
          ) : (
            <>
              <SubjectImageHolder>
                <UserIcon width="40" height="44" />
              </SubjectImageHolder>
              <AddImageText>+ Add Photo</AddImageText>
            </>
          )}
        </SubjectImageContainer>
        <SubjectNameContainer>
          <SubjectName>{props.business.name}</SubjectName>
          <SubjectTitle>{props.business.url}.jobapplix.com</SubjectTitle>
        </SubjectNameContainer>
      </SubjectContainer>
      <MenuItem onClick={navigateTo(`${dashboard}${applications}`)}>
        <MenuChevron>
          <Chevron width={"20px"} height={"20px"} color={textBlue} />
        </MenuChevron>
        <MenuItemTitle>Applications</MenuItemTitle>
      </MenuItem>
      <MenuItem onClick={navigateTo(`${dashboard}${positionsList}`)}>
        <MenuChevron>
          <Chevron width={"20px"} height={"20px"} color={textBlue} />
        </MenuChevron>
        <MenuItemTitle>Positions</MenuItemTitle>
      </MenuItem>
      <MenuItem>
        <MenuChevron>
          <Chevron width={"20px"} height={"20px"} color={textBlue} />
        </MenuChevron>
        <MenuItemTitle>Business Users</MenuItemTitle>
      </MenuItem>
      <MenuItem>
        <MenuChevron>
          <Chevron width={"20px"} height={"20px"} color={textBlue} />
        </MenuChevron>
        <MenuItemTitle>Business Profile & Payments</MenuItemTitle>
      </MenuItem>
    </MenuContainer>
  );
}

export default connect(state => ({ business: state.business }))(
  withRouter(BusinessMenu)
);
