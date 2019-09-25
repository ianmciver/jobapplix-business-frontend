import React from "react";
import CloseIcon from "../../assets/CloseIcon";
import { Container, CloseIconContainer } from "./styles";

export default props => {
  return (
    <Container onClick={e => props.clickHandler()}>
      <CloseIconContainer>
        <CloseIcon width="25px" height="25px" />
      </CloseIconContainer>
      {props.children}
    </Container>
  );
};
