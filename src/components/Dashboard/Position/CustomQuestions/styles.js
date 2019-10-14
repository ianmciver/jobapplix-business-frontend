import styled from "styled-components";

export const InstructionSpan = styled.p`
  margin: 10px 0;
  font-size: 1.1rem;
  color: ${props => props.theme.textDark};
  line-height: 1.5rem;
`;

export const DividerLine = styled.div`
  /* margin: 30px 0; */
  width: 40%;
  border-bottom: 1px solid ${props => props.theme.borderMedium};
  align-self: flex-start;
`;
