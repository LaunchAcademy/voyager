import React from "react"

import { faEye } from "@fortawesome/free-solid-svg-icons"
import { ComponentMeta, Story } from "@storybook/react"

import Button from "../buttons/Button"
import { BannerContent } from "./BannerContent"
import { BannerTitle } from "./BannerTitle"
import { BannerContentProps, SimpleBannerProps } from "./Banners.d"
import { SimpleBanner } from "./SimpleBanner"

import "../assets/css/main.css"
import "./css/banners.css"

export default {
  title: "Simple Banner Test",
  component: SimpleBanner,
} as ComponentMeta<typeof SimpleBanner>

export const TitleAndOneButton: Story<SimpleBannerProps> = (args) => <SimpleBanner {...args} />
TitleAndOneButton.args = {
  BackgroundImage: (): JSX.Element => (
    <img className="banner__background-photo" src="https://placekitten.com/1024/350" />
  ),
  children: (
    <>
      <BannerTitle>See us in action</BannerTitle>
      <Button placement="photo" text="Watch Video" to="#" secondary icon={faEye} />
    </>
  ),
}
TitleAndOneButton.storyName = "Title and One Button"

export const TitleAndTwoButtons: Story<BannerContentProps> = () => (
  <div className="banner_no-photo">
    <BannerContent>
      <div className="banner_no-photo__title">What to expect from your interview process</div>
      <div className="banner_no-photo__container">
        <div className="banner_button-container_no-photo">
          <Button
            to="#"
            text="Schedule an Info Call"
            icon="phone"
            className="hero__button pr-3"
            secondary
            size="lg"
          />
        </div>
        <div className="banner_button-container_no-photo">
          <Button to="#" text="Button" icon="eye" className="hero__button" size="lg" />
        </div>
      </div>
    </BannerContent>
  </div>
)
TitleAndTwoButtons.storyName = "Title and Two Buttons"

export const HomepageWithParagraph: Story<SimpleBannerProps> = (args) => <SimpleBanner {...args} />
HomepageWithParagraph.args = {
  type: "prose",
  BackgroundImage: (): JSX.Element => (
    <img className="banner__background-photo" src="https://placekitten.com/1024/350" />
  ),
  children: (
    <>
      <BannerTitle>
        A practical computer science education without the bloat of a 4-year program
      </BannerTitle>
      <BannerContent>
        <p>
          Launch provides a highly-structured, collaborative learning environment designed to
          prepare you for you new career in just 18 weeks.
        </p>
      </BannerContent>
    </>
  ),
}
HomepageWithParagraph.storyName = "Homepage with Paragraph"
