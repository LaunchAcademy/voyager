import React from "react";
import "./profile.css";
import Icon from "../icons/Icon"

const SocialProfile = ({
  name, currentTitle, foundingMember, headshotUrl, socialUrls
}) => {

  let foundingMemberInfo
  if (foundingMember) {
    foundingMemberInfo = <span><br/>FOUNDING TEAM MEMBER</span>
  }


  const socialIcons = socialUrls.map((social) => {
    let domain = (new URL(social))
    let hostname = domain.hostname.replace(".com", '')
    hostname = hostname.replace("www.", '')

    if(hostname.includes("facebook")) {
      hostname = "facebook-f"
    }

    return(
      <li>
        <a href={social} aria-label={`${name} on ${hostname} `}>
          <Icon name={hostname} fixedWidth />
        </a>
      </li>
    )
  })

  return (
    <div className="profile profile_social">
      <img className="profile__image" src={headshotUrl} alt={name} />
      <h5 className="profile__name">{name}</h5>
      <h6 className="profile__current-title">{currentTitle}{foundingMemberInfo}</h6>
      <ul className="profile__social">
        {socialIcons}
      </ul>
    </div>
  );
}


export default SocialProfile;
