import styled from "styled-components";

import { NextButton } from "../../../SignUp/SignUpContainer/styles";
import { textDark } from "../../../../constants/colors";

export const InstructionSpan = styled.p`
  margin: 10px 30px;
  font-size: 1.3rem;
  color: ${textDark};
`;

export const ContinueButton = styled(NextButton)`
  margin: 30px;
`;
