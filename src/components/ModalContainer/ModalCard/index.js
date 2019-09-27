import React from "react";
import { Transition } from "react-transition-group";

import { ModalCardContainer } from "./styles";

export default props => {
  return (
    <Transition in={props.open} timeout={{ enter: 0, exit: 300 }} appear>
      {state => (
        <ModalCardContainer state={state} onClick={e => e.stopPropagation()}>
          {props.children}
        </ModalCardContainer>
      )}
    </Transition>
  );
};
