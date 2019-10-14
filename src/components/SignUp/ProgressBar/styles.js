import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 60%;
  margin-bottom: 10px;
`;
export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${props => props.theme.backgroundLight};
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;
export const ProgressBarFill = styled.div`
  transform: skew(45deg);
  position: absolute;
  left: -2px;
  width: ${props => props.progress && props.progress};
  height: 11px;
  background-color: ${props => props.theme.backgroundDarkblue};
`;
