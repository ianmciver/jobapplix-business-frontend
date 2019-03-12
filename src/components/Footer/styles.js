import styled from "styled-components";

import {
  backgroundGrey,
  backgroundDark,
  borderDark,
  textMedium,
  textLight,
  textGreen
} from "../../constants/colors";

export const FooterContainer = styled.footer`
  background-color: ${backgroundGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  flex-shrink: 0;
`;

export const FooterLogo = styled.img`
  width: 46%;
  margin: 5px 0 10px;
`;

export const FooterSeparator = styled.div`
  width: 80%;
  border-top: 1px solid ${borderDark};
  margin: 10px 0 20px;
`;

export const Copywrite = styled.div`
  font-size: 1.1rem;
  color: ${textMedium};
`;

// Navigation:

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

export const FooterNavItem = styled.a`
  color: ${textLight};
  font-size: 1.4rem;
  line-height: 2.4rem;
  &:hover {
    color: ${textGreen};
  }
`;

// Social Media Icons:

export const SocialMediaGroup = styled.div`
  width: 37%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const SocialMediaIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${backgroundDark};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 18px;
  }
  img.twitter {
    width: 28px;
  }
`;
