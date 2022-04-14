import React from "react"

import { faPlay, faChevronRight, faEye } from "@fortawesome/free-solid-svg-icons"
import { Meta, Story } from "@storybook/react"

import { Button } from "../buttons/Button"
import { Quote } from "../quote/Quote"
import mdx from "./Hero.stories.mdx"
import "./css/hero.css"

export default {
  title: "Hero",
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta

export const CircularPhoto: Story = (args) => (
  <section className="hero">
    <div className="hero__image-column">
      <div className="hero__image-container">
        <img
          src="https://place-hold.it/630x630"
          alt="Hero Image"
          className="hero__image hero__image_rounded hero__image_sm"
        />
        <Button to="#" icon={faPlay} hideText text="Play Video" className="hero__play-button" />
      </div>
    </div>
    <div className="hero__supporting-content">
      <h2 className="hero__image_subtitle">Going Pro Starts Here.</h2>
      <h1 className="hero__image_title">Launch your career in software today.</h1>
      <div className="hero__button-container">
        <Button
          to="#"
          text="Apply Today"
          icon={faChevronRight}
          className="hero__button"
          size="lg"
        />
      </div>
      <div className="hero__button-container">
        <Button
          to="#"
          text="Watch Video"
          icon={faEye}
          className="hero__button"
          secondary
          size="lg"
        />
      </div>
    </div>
  </section>
)

export const SquarePhoto: Story = (args) => (
  <section className="hero">
    <div className="hero__image-column_square">
      <div className="hero__image-container_square">
        <img
          src="https://place-hold.it/700x686"
          alt="Hero Image"
          className="hero__image_square hero__image_sm"
        />
      </div>
    </div>
    <div className="hero__supporting-content">
      <h2 className="hero__image_subtitle">Launch your career.</h2>
      <h1 className="hero__image_title">Then take it to the next level.</h1>
      <div className="hero__button-container">
        <Button
          to="#"
          text="Apply Today"
          icon={faChevronRight}
          className="hero__button"
          size="lg"
        />
      </div>
      <div className="hero__button-container">
        <Button to="#" text="Get the Syllabus" icon={faEye} secondary size="lg" />
      </div>
      <Quote
        quote="“I highly recommend Launch Academy to anyone who is thinking about switching to software development. Launch Academy found a great formula for success.”"
        name="Mo Zhu"
        company="3Play Media"
      />
    </div>
  </section>
)

export const TealHero: Story = (args) => (
  <section className="hero bg-secondary-brand">
    <div className="hero__supporting-content p-10">
      <h2 className="hero__image_title pb-10">
        Sign up today and get $1000 off your full tuition when you complete our next pre-work
        session.
      </h2>
      <div className="hero__button-container">
        <Button
          to="#"
          text="Apply Today"
          icon={faChevronRight}
          className="banner__button"
          size="lg"
        />
      </div>
      <div className="hero__button-container">
        <Button
          to="#"
          text="Get the Syllabus"
          icon={faChevronRight}
          className="banner__button button_secondary"
          size="lg"
        />
      </div>
    </div>
    <div className="hero__image-column">
      <div className="hero__image-container">
        <img
          src="https://place-hold.it/446x460"
          alt="Image"
          className="hero__image hero__image_sm"
        />
      </div>
    </div>
  </section>
)
