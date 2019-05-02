import React from "react";

import { ProgressBarContainer, ProgressBar, ProgressBarFill } from "./styles";

export default function Progress(props) {
  return (
    <ProgressBarContainer>
      <ProgressBar>
        <ProgressBarFill progress={props.progress} />
      </ProgressBar>
    </ProgressBarContainer>
  );
}
