import React from "react";
import "./profile.css";
import Icon from "../icons/Icon.js";

const Profile = ({
  name,
  currentTitle,
  currentEmployer,
  formerTitle,
  foundingMember,
  headshotUrl,
  socialUrls,
}) => {
  let whichProfileClass = "profile";
  let currentEmployerOrFoundingMember = (
    <h6 className="profile__current-title">
      {currentTitle}
      <span>at {currentEmployer}</span>
    </h6>
  );
  let socialList;
  if (socialUrls) {
    whichProfileClass = "profile profile_social";

    if (foundingMember) {
      currentEmployerOrFoundingMember = (
        <h6 className="profile__current-title">
          {currentTitle}, <span>FOUNDING TEAM MEMBER</span>
        </h6>
      );
    } else {
      currentEmployerOrFoundingMember = <h6 className="profile__current-title">{currentTitle}</h6>;
    }

    const socialIcons = socialUrls.map((social) => {
      let domain = new URL(social);
      let hostname = domain.hostname.replace("www.", "");
      let iconHostname = hostname.replace(".com", "");

      if (hostname.includes("facebook")) {
        hostname = "facebook-f";
      }

      return (
        <li>
          <a href={social} aria-label={`${name} on ${hostname} `}>
            <Icon name={iconHostname} fixedWidth />
          </a>
        </li>
      );
    });
    socialList = <ul className="profile__social">{socialIcons}</ul>;
  }

  return (
    <div className={whichProfileClass}>
      <img className="profile__image" src={headshotUrl} alt={name} />
      <h5 className="profile__name">{name}</h5>
      <p className="profile__label_current">Current:</p>
      {currentEmployerOrFoundingMember}
      <p className="profile__label_former">Former:</p>
      <p className="profile__former-title">{formerTitle}</p>
      {socialList}
    </div>
  );
};

export default Profile;
