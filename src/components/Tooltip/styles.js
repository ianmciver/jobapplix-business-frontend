import styled, { css } from "styled-components";
import { lighten } from "polished";

import { media } from "../../styles/mediaQueries";

export const TooltipContainer = styled.div`
  display: none;
  ${media.desktop`
    display: flex;
    position: absolute;
    left: ${props => props.x};
    justify-content: center;
    align-items: center;
    transform: translateX(${props => (props.state === "entering" ? -20 : 0)}px);
    opacity: ${props => (props.state === "entering" ? 0 : 1)};
    transition: all 300ms;
  `};
`;

export const TooltipArrow = styled.div`
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-right: 10px solid ${props => lighten(0.2, props.theme.backgroundGrey)};
`;

export const TooltipTextBox = styled.div`
  padding: 10px 15px;
  background-color: ${props => lighten(0.2, props.theme.backgroundGrey)};
  border-radius: 5px;
`;

export const TooltipText = styled.p`
  font-size: 1.4rem;
  color: ${props => props.theme.textLight};
`;
