import React, { useState } from "react";
import { connect } from "react-redux";

import Progress from "../ProgressBar";

import { TextArea } from "./styles";
import {
  Headline,
  SubHeadline,
  Instructions,
  NextButton
} from "../SignUpContainer/styles";
import { createBusinessWithDescription } from "../../../actions/businessActions";

function BusinessPayment(props) {
  const [desc, setDesc] = useState("");

  const submitDescription = e => {
    props.createBusinessWithDescription(desc, props.next);
  };

  return (
    <>
      <Headline>CREATE BUSINESS</Headline>
      <Progress progress={"33%"} />
      <SubHeadline>Business Description</SubHeadline>
      <Instructions>
        Tell us about your business. This will be displayed on your business
        homepage. Tell your prospective applicants more about your business.
      </Instructions>
      <TextArea
        placeholder="WRITE YOUR DESCRIPTION HERE..."
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <NextButton onClick={submitDescription}>NEXT</NextButton>
    </>
  );
}

export default connect(
  null,
  { createBusinessWithDescription }
)(BusinessPayment);
