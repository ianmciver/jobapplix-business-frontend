import React from "react";
import { connect } from "react-redux";

import { BusinessLogo, DetailGroup, DetailTitle, DetailValue } from "./styles";

function BusinessDetails(props) {
  return (
    <>
      <BusinessLogo
        src={props.business.image_url}
        alt={`${props.business.name}'s logo`}
      />
      <DetailGroup>
        <DetailTitle>Business Name:</DetailTitle>
        <DetailValue>{props.business.name}</DetailValue>
      </DetailGroup>
      <DetailGroup>
        <DetailTitle>JobApplix URL:</DetailTitle>
        <DetailValue>https://{props.business.url}.jobapplix.com</DetailValue>
      </DetailGroup>
      <DetailGroup>
        <DetailTitle>Business Email:</DetailTitle>
        <DetailValue>{props.business.email}</DetailValue>
      </DetailGroup>
      <DetailGroup>
        <DetailTitle>Business Phone:</DetailTitle>
        <DetailValue>{props.business.phone}</DetailValue>
      </DetailGroup>
      <DetailGroup>
        <DetailTitle>Business Address:</DetailTitle>
        <DetailValue>{props.business.address}</DetailValue>
      </DetailGroup>
      <DetailGroup>
        <DetailTitle>Business Website:</DetailTitle>
        <DetailValue>{props.business.website}</DetailValue>
      </DetailGroup>
      <DetailGroup>
        <DetailTitle>Business Description:</DetailTitle>
        <DetailValue>{props.business.description}</DetailValue>
      </DetailGroup>
    </>
  );
}

export default connect(state => ({ business: state.business }))(
  BusinessDetails
);
