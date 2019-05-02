import styled from "styled-components";

import { borderGrey, backgroundBlue } from "../../../constants/colors";

export const ProgressBarContainer = styled.div`
  width: 60%;
  margin-bottom: 10px;
`;
export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border: 1px solid ${borderGrey};
  border-radius: 5px;
  overflow: hidden;
`;
export const ProgressBarFill = styled.div`
  width: ${props => props.progress && props.progress};
  height: 11px;
  background-color: ${backgroundBlue};
`;
