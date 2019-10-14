import React, { useState } from "react";
import { connect } from "react-redux";

import SelectorDropdown from "./SelectorDropdown";
import Chevron from "../../../../assets/Chevron";
import {
  BusinessSelectorContainer,
  OpenSelector,
  LogoContainer,
  BusinessName
} from "./styles";

function BusinessSelector(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <BusinessSelectorContainer
      onClick={() => {
        //setDropdownOpen(!dropdownOpen)
      }}
    >
      <LogoContainer image={props.business.image_url} />
      <BusinessName>{props.business.name}</BusinessName>
      {/* <OpenSelector open={dropdownOpen}>
        <Chevron color="white" width="10px" height="10px" />
      </OpenSelector> */}
      {dropdownOpen && <SelectorDropdown businesses={props.businesses} />}
    </BusinessSelectorContainer>
  );
}

export default connect(state => ({
  business: state.business,
  businesses: state.businessUser.businesses
}))(BusinessSelector);
