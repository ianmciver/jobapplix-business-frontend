import React from "react";
import { connect } from "react-redux";

import {
  DetailsContainer,
  BusinessLogo,
  DetailGroup,
  DetailContainer,
  URLTitle,
  URL,
  DetailTitle,
  DetailValue
} from "./styles";

function BusinessDetails(props) {
  return (
    <DetailsContainer>
      <DetailContainer>
        <DetailTitle>Business Logo:</DetailTitle>
        <BusinessLogo
          src={props.business.image_url}
          alt={`${props.business.name}'s logo`}
        />
      </DetailContainer>
      <DetailContainer>
        <URLTitle>Your JobApplix URL:</URLTitle>
        <URL href={`https://apply.jobapplix.com/${props.business.url}`}>
          https://apply.jobapplix.com/{props.business.url}
        </URL>
      </DetailContainer>
      <DetailContainer>
        <DetailGroup>
          <DetailTitle>Name:</DetailTitle>
          <DetailValue>{props.business.name}</DetailValue>
        </DetailGroup>
        <DetailGroup>
          <DetailTitle>Email:</DetailTitle>
          <DetailValue>{props.business.email}</DetailValue>
        </DetailGroup>
        <DetailGroup>
          <DetailTitle>Phone:</DetailTitle>
          <DetailValue>{props.business.phone}</DetailValue>
        </DetailGroup>
        <DetailGroup>
          <DetailTitle>Address:</DetailTitle>
          <DetailValue>{props.business.address}</DetailValue>
        </DetailGroup>
        <DetailGroup>
          <DetailTitle>Website:</DetailTitle>
          <DetailValue>{props.business.website}</DetailValue>
        </DetailGroup>
        <DetailGroup>
          <DetailTitle>Description:</DetailTitle>
          <DetailValue>{props.business.description}</DetailValue>
        </DetailGroup>
      </DetailContainer>
    </DetailsContainer>
  );
}

export default connect(state => ({ business: state.business }))(
  BusinessDetails
);
