import styled, { keyframes, css } from "styled-components";
import { backgroundDark } from "../../../constants/colors";

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${backgroundDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingImage = styled.img`
  margin-bottom: 40px;
`;

export const LoadingDotsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const LoadingDotAnimationKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const LoadingDot = styled.div`
  opacity: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props => props.color && props.color};
  animation: ${props =>
    props.startAnimation &&
    css`
      ${LoadingDotAnimationKeyframes} 2100ms linear infinite
    `};
`;
