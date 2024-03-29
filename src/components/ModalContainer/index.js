import React from "react";
import { Transition } from "react-transition-group";
import CloseIcon from "../../assets/CloseIcon";
import { Container, CloseIconContainer } from "./styles";

export default props => {
  return (
    <Transition in={props.open} timeout={{ enter: 0, exit: 300 }} appear>
      {state => (
        <Container onClick={e => props.clickHandler()} state={state}>
          <CloseIconContainer>
            <CloseIcon width="25px" height="25px" />
          </CloseIconContainer>
          {props.children}
        </Container>
      )}
    </Transition>
  );
};
