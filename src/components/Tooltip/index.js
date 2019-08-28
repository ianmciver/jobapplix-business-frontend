import React, { useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";

import {
  TooltipContainer,
  TooltipArrow,
  TooltipTextBox,
  TooltipText
} from "./styles";

export default function Tooltip(props) {
  return (
    <Transition
      in={props.show}
      timeout={{ enter: 500, exit: 0 }}
      unmountOnExit
      mountOnEnter
    >
      {state => {
        return (
          <TooltipContainer x={`${props.x}px`} y={`${props.y}px`} state={state}>
            <TooltipArrow />
            <TooltipTextBox>
              <TooltipText>{props.text}</TooltipText>
            </TooltipTextBox>
          </TooltipContainer>
        );
      }}
    </Transition>
  );
}
