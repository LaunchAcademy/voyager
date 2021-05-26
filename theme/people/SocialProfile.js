import React from "react";
import "./profile.css";
import Icon from "../icons/Icon"

const SocialProfile = ({
  name, currentTitle, foundingMember, headshotUrl, socialUrls
}) => {

  let foundingMemeberInfo
  if (foundingMember) {
    foundingMemeberInfo = ", FOUNDING TEAM MEMBER"
  }


  const socialIcons = socialUrls.map((social) => {
    let domain = (new URL(social))
    let hostname = domain.hostname.replace(/'.com' | 'www.'/gi, '')
    return(
      <li>
        <a href={social} aria-label={`${name} on ${hostname} `}>
          <Icon name={hostname} fixedWidth />
        </a>
      </li>
    )
  })

  return (
    <div className="profile">
      <img className="profile__image" src={headshotUrl} alt={name} />
      <h5 className="profile__name">{name}</h5>
      <p className="profile__label_current">Current:</p>
      <h6 className="profile__current-title">{currentTitle}{foundingMemeberInfo}</h6>
      <ul>
        {socialIcons}
      </ul>
    </div>
  );
}


export default SocialProfile;
