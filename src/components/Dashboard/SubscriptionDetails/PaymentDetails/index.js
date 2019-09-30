import React from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

import {
  BusinessLogo,
  DetailGroup,
  DetailContainer,
  DetailTitle,
  DetailValue,
  BusinessLogoContainer
} from "./styles";

function BusinessDetails(props) {
  console.log(props.business.subDetails);
  return (
    <>
      <BusinessLogoContainer>
        <BusinessLogo
          src={props.business.image_url}
          alt={`${props.business.name}'s logo`}
        />
      </BusinessLogoContainer>
      <DetailContainer>
        <DetailGroup>
          <DetailTitle>Subscription Type:</DetailTitle>
          <DetailValue>{props.business.sub_type}</DetailValue>
        </DetailGroup>
        <DetailGroup>
          <DetailTitle>Last Payment:</DetailTitle>
          <DetailValue>
            {format(
              props.business.subDetails.current_period_start,
              "MM/DD/YYYY"
            )}
          </DetailValue>
        </DetailGroup>
        <DetailGroup>
          <DetailTitle>Next Scheduled Payment:</DetailTitle>
          <DetailValue>
            {format(props.business.subDetails.current_period_end, "MM/DD/YYYY")}
          </DetailValue>
        </DetailGroup>
        <DetailGroup>
          <DetailTitle>Payment Amount:</DetailTitle>
          <DetailValue>{`$${props.business.subDetails.amount /
            100}`}</DetailValue>
        </DetailGroup>
      </DetailContainer>
    </>
  );
}

export default connect(state => ({ business: state.business }))(
  BusinessDetails
);
