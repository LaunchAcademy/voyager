import React, { FC } from "react"

import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { Meta, Story } from "@storybook/react"

import logoImage from "../../src/assets/images/logo.png"
import Icon from "../icons/Icon"
import mdx from "./Footer.mdx"
import "./css/footer.css"

const Logo: FC = () => <img className="footer__logo" src={logoImage} alt="Launch Academy" />

export default {
  title: "Footer",
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta

const Template: Story = () => (
  <footer className="footer">
    <div className="footer__brand">
      <Logo />
      <ul className="footer__social-media-links">
        <li>
          <a href="https://github.com/launchacademy" aria-label="Launch Academy on GitHub">
            <Icon icon={faGithub} fixedWidth />
          </a>
        </li>
        <li>
          <a href="https://facebook.com/TheLaunchAcademy" aria-label="Launch Academy on Facebook">
            <Icon icon={faFacebookF} fixedWidth />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/Launchacademy" aria-label="Launch Academy on YouTube">
            <Icon icon={faYoutube} fixedWidth />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/launch-academy-inc/"
            aria-label="Launch Academy on LinkedIn"
          >
            <Icon icon={faLinkedin} fixedWidth />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/LaunchAcademy" aria-label="Launch Academy on Twitter">
            <Icon icon={faTwitter} fixedWidth />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/launchacademy/"
            aria-label="Launch Academy on Instagram"
          >
            <Icon icon={faInstagram} fixedWidth />
          </a>
        </li>
      </ul>
    </div>
    <form className="footer__form" autoComplete="off">
      <fieldset>
        <legend className="footer__form-legend">Stay in the loop</legend>
        <input
          type="email"
          name="email"
          id="footer__input_type-email"
          className="footer__input_type-email"
          placeholder="Your email address"
          aria-label="Your email address"
          required
        />
        <button type="submit" className="footer__form-submit-button">
          <Icon icon={faPaperPlane} aria-label="Subscribe" />
        </button>
      </fieldset>
    </form>
    <section className="footer__link-list">
      <h5 className="footer__link-list-title">Outcomes</h5>
      <ul>
        <li>
          <a href="https://static.spacecrafted.com/b13328575ece40d8853472b9e0cf2047/r/f55372eff2de479a8a5b4fdf68d68489/1/Launch%20Academy%20Boston%20Fundamentals%20of%20Web%20Development%20H1%202020.pdf">
            CIRR
          </a>
        </li>
        <li>
          <a href="https://www.switchup.org/bootcamps/launch-academy">SwitchUp</a>
        </li>
        <li>
          <a href="https://www.coursereport.com/schools/launch-academy">Course Report</a>
        </li>
      </ul>
    </section>
    <section className="footer__link-list">
      <h5 className="footer__link-list-title">Company</h5>
      <ul role="list">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/careers">Careers</a>
        </li>
        <li>
          <a href="/codecabulary">Codecabulary</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </section>
    <section className="footer__compliance">
      <ul role="list" className="footer__compliance-links">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Student Disclosures</a>
        </li>
      </ul>
      <p className="footer__copyright-notice">&copy; {new Date().getFullYear()} Launch Academy</p>
    </section>
  </footer>
)

export const Footer = Template.bind({})
