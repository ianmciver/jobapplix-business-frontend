import React, { useState } from "react";

import { TextArea } from "./styles";
import { NextButton } from "../SignUpContainer/styles";

export default function BusinessPayment(props) {
  const [desc, setDesc] = useState("");
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
      <NextButton onClick={props.next}>NEXT</NextButton>
    </>
  );
}
