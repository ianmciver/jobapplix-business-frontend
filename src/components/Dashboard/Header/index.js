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
  const newApplicationsCount = props.business.applications.reduce(
    (total, app) => {
      return app.group === 0 ? total + 1 : total;
    },
    0
  );
  return (
    <HeaderContainer>
      <CompanyContainer>
        <ImageAndDetailsContainer>
          <ImageContainer image={props.business.image_url} />
        </ImageAndDetailsContainer>
        <NameContainer>
          <CompanyName>{props.business.name}</CompanyName>
          <Applications>
            new applications received:{" "}
            <ApplicationAmount>{newApplicationsCount}</ApplicationAmount>
          </Applications>
        </NameContainer>
      </CompanyContainer>
    </HeaderContainer>
  );
}

export default connect(state => ({ business: state.business }))(Header);
