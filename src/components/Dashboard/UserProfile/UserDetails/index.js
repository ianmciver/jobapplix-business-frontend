import React from "react";
import { connect } from "react-redux";

import { UserLogo, DetailGroup, DetailTitle, DetailValue } from "./styles";

function UserDetails(props) {
  return (
    <>
      <UserLogo src={props.user.image_url} alt={`${props.user.name}'s photo`} />
      <DetailGroup>
        <DetailTitle>Your Name:</DetailTitle>
        <DetailValue>{props.user.name}</DetailValue>
      </DetailGroup>
      <DetailGroup>
        <DetailTitle>Your Title:</DetailTitle>
        <DetailValue>{props.user.title}</DetailValue>
      </DetailGroup>
      <DetailGroup>
        <DetailTitle>Your Email:</DetailTitle>
        <DetailValue>{props.user.email}</DetailValue>
      </DetailGroup>
    </>
  );
}

export default connect(state => ({ user: state.businessUser }))(UserDetails);
