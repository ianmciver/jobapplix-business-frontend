import React from "react";
import { BuilderModalContainer } from "./styles";
export default function BuilderModal(props) {
  return props.open ? (
    <BuilderModalContainer>{props.children}</BuilderModalContainer>
  ) : null;
}
