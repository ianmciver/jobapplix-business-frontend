import React, { useState, useEffect } from "react";
import JALogo from "../../../assets/Icon100.png";

import {
  backgroundBlue,
  backgroundGreen,
  backgroundDarkblue
} from "../../../constants/colors";
import {
  LoadingContainer,
  LoadingImage,
  LoadingDotsContainer,
  LoadingDot
} from "./styles";
function Loading(props) {
  const [startOne, setStartOne] = useState(false);
  const [startTwo, setStartTwo] = useState(false);
  const [startThree, setStartThree] = useState(false);

  useEffect(() => {
    setStartOne(true);
  }, []);

  useEffect(() => {
    const two = setTimeout(() => {
      setStartTwo(true);
    }, 700);

    return () => {
      clearTimeout(two);
    };
  }, []);

  useEffect(() => {
    const three = setTimeout(() => {
      setStartThree(true);
    }, 1400);

    return () => {
      clearTimeout(three);
    };
  }, []);

  return (
    <LoadingContainer>
      <LoadingImage src={JALogo} alt="Job Applix logo, loading" />
      <LoadingDotsContainer>
        <LoadingDot color={backgroundGreen} startAnimation={startOne} />
        <LoadingDot color={backgroundBlue} startAnimation={startTwo} />
        <LoadingDot color={backgroundDarkblue} startAnimation={startThree} />
      </LoadingDotsContainer>
    </LoadingContainer>
  );
}

export default Loading;
