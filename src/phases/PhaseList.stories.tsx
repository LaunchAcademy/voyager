import React from "react"

import { faWalking } from "@fortawesome/free-solid-svg-icons"
import { Meta, Story } from "@storybook/react"

import { Icon } from "../icons/Icon"
import mdx from "./PhaseList.mdx"
import "./css/phaseList.css"

export default {
  title: "Phase List",
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta

const Template: Story = () => (
  <div className="phase-list">
    <div className="phase-list__item">
      <div className="phase-list__item_icon">
        <Icon icon={faWalking} className="block h-6 w-6" aria-hidden="true" />
      </div>
      <div className="phase-list__title">Course Prep & Pre-work</div>
      <div className="phase-list__subtitle">Online | Part-time 3 weeks</div>
      <div className="phase-list__text">
        Get started with the basics of coding during this optional course prep
      </div>
      <p>
        <strong>Unit 1:</strong> Building blocks
      </p>
      <p>
        <strong>Unit 2:</strong> Looping
      </p>
      <p>
        <strong>Unit 3:</strong> Arrays
      </p>
      <p>
        <strong>Unit 4:</strong> Lorem ipsum
      </p>
      <p>
        <strong>Unit 5:</strong> Lorem ipsum
      </p>
      <p>
        <strong>Unit 6:</strong> Lorem ipsum
      </p>
    </div>
    <div className="phase-list__item phase-list__item_blue">
      <div className="phase-list__item_icon">
        <Icon icon={faWalking} className="block h-6 w-6" aria-hidden="true" />
      </div>
      <div className="phase-list__title">Coding Fundamentals</div>
      <div className="phase-list__subtitle">Online | Part-time 8 weeks</div>
      <div className="phase-list__text">
        Build a strong foundation and get familiar with the tools of the trade
      </div>
      <ol>
        <li>
          <strong>Unit 1:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 2:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 3:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 4:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 5:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 6:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 7:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 8:</strong> Lorem igsum
        </li>
      </ol>
    </div>
    <div className="phase-list__item phase-list__item_blue">
      <div className="phase-list__item_icon">
        <Icon icon={faWalking} className="block h-6 w-6" aria-hidden="true" />
      </div>
      <div className="phase-list__title">Software Immersive</div>
      <div className="phase-list__subtitle">Campus | Full-time 10 weeks</div>
      <div className="phase-list__text">
        Develop advanced-level skills in a hands-on environment
      </div>
      <ol>
        <li>
          <strong>Unit 1:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 2:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 3:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 4:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 5:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 6:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 7:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 8:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 9:</strong> Lorem igsum
        </li>
        <li>
          <strong>Unit 10:</strong> Lorem igsum
        </li>
      </ol>
    </div>
    <div className="phase-list__item">
      <div className="phase-list__item_icon">
        <Icon icon={faWalking} className="block h-6 w-6" aria-hidden="true" />
      </div>
      <div className="phase-list__title">Career Advancement</div>
      <div className="phase-list__subtitle">Online | For your entire career</div>
      <div className="phase-list__text">
        Land your first job and get access to lifetime career services support
      </div>
      <ul>
        <li>- Job interviews</li>
        <li>- Preps...</li>
        <li>- Preps...</li>
        <li>- Up-to-date coursework.</li>
        <li>- LMS Access</li>
      </ul>
    </div>
  </div>
)

export const Default = Template.bind({})
