import React, { useState, useEffect } from "react";

import {
  TransitionContainer,
  SearchBarContainer,
  SearchBar,
  SearchButton
} from "./styles";

export default function Search(props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <TransitionContainer open={open}>
      <SearchBarContainer>
        <SearchBar placeholder="Search" />
        <SearchButton>?</SearchButton>
      </SearchBarContainer>
    </TransitionContainer>
  );
}
