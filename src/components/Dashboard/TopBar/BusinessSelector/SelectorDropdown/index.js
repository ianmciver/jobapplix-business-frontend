import React from "react";

import SelectorDropdownItem from "./SelectorDropdownItem";
import { DropdownContainer } from "./styles";
export default function SelectorDropdown(props) {
  return (
    <DropdownContainer>
      <SelectorDropdownItem createNew />
      {props.businesses.map(business => (
        <SelectorDropdownItem
          key={business.id}
          text={business.name}
          image={business.image_url}
        />
      ))}
    </DropdownContainer>
  );
}
