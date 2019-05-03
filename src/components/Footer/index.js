import React from "react";

import {
  FooterContainer,
  FooterLogo,
  Copywrite,
  SocialMediaGroup,
  SocialMediaIcon
} from "./styles";

import jobApplixLogo from "../../assets/LogoEqualLight350.png";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo
        src={jobApplixLogo}
        alt="Job Applix logo. Click to navigate home."
      />
      <SocialMediaGroup>
        <a href="https://www.instagram.com/jobapplix/" target="_blank_">
          <SocialMediaIcon>
            <img src={instagram} alt="Instagram Logo" />
          </SocialMediaIcon>
        </a>
        <a href="https://www.facebook.com/jobapplix/" target="_blank_">
          <SocialMediaIcon>
            <img src={facebook} alt="Facebook Logo" />
          </SocialMediaIcon>
        </a>
        <a href="https://twitter.com/JobApplix" target="_blank_">
          <SocialMediaIcon>
            <img src={twitter} alt="Twitter Logo" className="twitter" />
          </SocialMediaIcon>
        </a>
      </SocialMediaGroup>
      <Copywrite>
        <span>© JobApplix Inc. 2019</span>
      </Copywrite>
    </FooterContainer>
  );
}
