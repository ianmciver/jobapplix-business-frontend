import styled from "styled-components";
import { media } from "../../../styles/mediaQueries";
import { backgroundWhite } from "../../../constants/colors";
export const DashboardBody = styled.div`
  padding-top: 50px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${backgroundWhite};
`;
