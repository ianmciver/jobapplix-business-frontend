import React, { useState } from "react";
import { connect } from "react-redux";

import { TextArea } from "./styles";
import { NextButton } from "../SignUpContainer/styles";
import { createBusinessWithDescription } from "../../../actions/businessActions";

function BusinessPayment(props) {
  const [desc, setDesc] = useState("");

  const submitDescription = e => {
    props.createBusinessWithDescription(desc, props.next);
  };

  return (
    <>
      <h1 className="headline">DESCRIPTION</h1>
      <span className="step">Step 4:</span>
      <span>
        Tell us about your business. This will be displayed on your business
        homepage. Tell your prospective applicants more about your business.
      </span>
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
