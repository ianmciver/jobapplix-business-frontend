import styled from "styled-components";

import { borderMedium } from "../../../constants/colors";

export const TextArea = styled.textarea`
  width: 100%;
  height: 210px;
  padding: 10px;
  border: 2px solid ${borderMedium};
  font-size: 1.1rem;
  line-height: 1.6rem;
  margin-bottom: 20px;
`;
