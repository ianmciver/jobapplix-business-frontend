import React from "react";
import { connect } from "react-redux";

import {
  HeaderContainer,
  CompanyContainer,
  ImageAndDetailsContainer,
  ImageContainer,
  NameContainer,
  CompanyName,
  Applications,
  ApplicationAmount
} from "./styles";
function Header(props) {
  return (
    <HeaderContainer>
      <CompanyContainer>
        <ImageAndDetailsContainer>
          <ImageContainer image={props.business.image_url} />
        </ImageAndDetailsContainer>
        <NameContainer>
          <CompanyName>{props.business.name}</CompanyName>
          <Applications>
            applications received: <ApplicationAmount>10</ApplicationAmount>
          </Applications>
        </NameContainer>
      </CompanyContainer>
    </HeaderContainer>
  );
}

export default connect(state => ({ business: state.business }))(Header);
