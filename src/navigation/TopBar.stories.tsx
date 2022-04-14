import React from "react"

import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Meta, Story } from "@storybook/react"

import logoImage from "../../src/assets/images/logo.png"
import Button from "../buttons/Button"
import { TopBar } from "./TopBar"
import { TopBarProps } from "./TopBar.d"
import mdx from "./TopBar.stories.mdx"
import "./css/topBar.css"

const logo = <img src={logoImage} alt="Launch Academy" />

export default {
  title: "Top Bar",
  component: TopBar,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta

const Template: Story<TopBarProps> = () => (
  <TopBar logo={logo}>
    <ul className="navigation-list navigation-list__top" role="list">
      <li>
        <a className="navigation-list__link" href="#">
          Program
        </a>
      </li>
      <li>
        <a className="navigation-list__link" href="#">
          Admissions
        </a>
      </li>
      <li>
        <a className="navigation-list__link" href="#">
          Why Launch
        </a>
        <ul className="navigation-list__sub-navigation">
          <li>
            <a href="#">Sub Link</a>
          </li>
          <li>
            <a href="#">Sub Link</a>
          </li>
          <li>
            <a href="#">Sub Link</a>
          </li>
        </ul>
      </li>
      <li>
        <a className="navigation-list__link" href="#">
          For Companies
        </a>
      </li>
      <li className="navigation-list__apply-list-item">
        <Button to="#" size="md" text="Apply Today" icon={faChevronRight} />
      </li>
    </ul>
  </TopBar>
)

export const Website = Template.bind({})
