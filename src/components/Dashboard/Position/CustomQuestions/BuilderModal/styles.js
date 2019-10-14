import styled from "styled-components";

export const BuilderModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.backgroundWhite};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  padding: 50px 0 0;
  overflow: scroll;
`;
