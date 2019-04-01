import React from "react";
import { connect } from "react-redux";

import {
  CompanyContainer,
  ImageAndDetailsContainer,
  ImageContainer,
  NameContainer,
  CompanyName,
  Applications,
  ApplicationAmount,
  FeaturesGroup,
  FeaturesButton
} from "./styles";
function Header(props) {
  return (
    <>
      <CompanyContainer>
        <ImageAndDetailsContainer>
          <ImageContainer />
        </ImageAndDetailsContainer>
        <NameContainer>
          <CompanyName>Bluth company</CompanyName>
          <Applications>
            applications received: <ApplicationAmount>10</ApplicationAmount>
          </Applications>
        </NameContainer>
      </CompanyContainer>
      <FeaturesGroup>
        <FeaturesButton>Filters</FeaturesButton>
        <FeaturesButton>Search</FeaturesButton>
      </FeaturesGroup>
    </>
  );
}

export default connect(state => ({ business: state.business }))(Header);
