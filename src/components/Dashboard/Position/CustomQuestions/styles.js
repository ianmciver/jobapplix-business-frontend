import styled from "styled-components";

import { textDark, borderMedium } from "../../../../constants/colors";

export const InstructionSpan = styled.p`
  margin: 10px 0;
  font-size: 1.1rem;
  color: ${textDark};
  line-height: 1.5rem;
`;

export const DividerLine = styled.div`
  /* margin: 30px 0; */
  width: 40%;
  border-bottom: 1px solid ${borderMedium};
  align-self: flex-start;
`;
