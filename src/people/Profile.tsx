import React, { FC } from "react"

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  faTwitter,
  faFacebookF,
  faGithub,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import { Icon } from "../icons/Icon"
import { ProfileProps } from "./Profile.d"
import "./css/profile.css"

export const Profile: FC<ProfileProps> = ({
  name,
  profileType = "launcher",
  currentTitle,
  currentEmployer,
  formerTitle,
  foundingMember,
  socialUrls,
  description,
  Image,
}) => {
  let whichProfileClass = `profile profile__${profileType}`
  let currentEmployerOrFoundingMember = (
    <h6 className="profile__current-title">
      {currentTitle}
      {profileType !== "teamMember" && <span>at {currentEmployer}</span>}
    </h6>
  )
  let socialList
  if (socialUrls) {
    whichProfileClass = "profile profile_social"

    if (foundingMember) {
      currentEmployerOrFoundingMember = (
        <h6 className="profile__current-title">
          {currentTitle}, <span>FOUNDING TEAM MEMBER</span>
        </h6>
      )
    } else {
      currentEmployerOrFoundingMember = <h6 className="profile__current-title">{currentTitle}</h6>
    }

    const socialIcons = socialUrls.map((social) => {
      const domain = new URL(social)
      const hostname = domain.hostname.replace("www.", "").replace(".com", "")
      // let iconHostname = hostname.replace(".com", "")

      const getIconByName = (name: string): IconDefinition | undefined => {
        return {
          twitter: faTwitter,
          facebook: faFacebookF,
          github: faGithub,
          youtube: faYoutube,
          linkedin: faLinkedin,
        }[name]
      }

      getIconByName("facebook")

      return (
        <li key={hostname}>
          <a href={social} aria-label={`${name} on ${hostname} `}>
            <Icon icon={getIconByName(hostname)} fixedWidth />
          </a>
        </li>
      )
    })
    socialList = <ul className="profile__social">{socialIcons}</ul>
  }

  return (
    <div className={whichProfileClass}>
      {Image && <Image className="profile__image" />}
      <h5 className="profile__name">{name}</h5>
      {profileType !== "teamMember" && <p className="profile__label_current">Current:</p>}
      {currentEmployerOrFoundingMember}
      {formerTitle && (
        <>
          <p className="profile__label_former">Former:</p>
          <p className="profile__former-title">{formerTitle}</p>
        </>
      )}
      {description && <p>{description}</p>}
      {socialList}
    </div>
  )
}
