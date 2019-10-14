import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${props =>
    props.state === "entering" ||
    props.state === "entered" ||
    props.state === "exiting"
      ? `flex`
      : `none`};
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.state === "entered" ? 1 : 0)};
  transition: opacity 300ms;
`;

export const CloseIconContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.backgroundGrey};
  border: 2px solid ${props => props.theme.backgroundNoteBox};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
`;
