import styled from "styled-components";

import { backgroundWhite } from "../../../../../constants/colors";

export const BuilderModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${backgroundWhite};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 50px 0 0;
  overflow: scroll;
`;
