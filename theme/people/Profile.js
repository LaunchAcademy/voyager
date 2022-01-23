import React from "react";
import "./profile.css";
import Icon from "../icons/Icon.js";

const Profile = ({
  name,
  profileType = 'launcher',
  currentTitle,
  currentEmployer,
  formerTitle,
  foundingMember,
  socialUrls,
  description,
  altText,
  Image
}) => {
  let whichProfileClass = `profile profile__${profileType}`;
  let currentEmployerOrFoundingMember = (
    <h6 className="profile__current-title">
      {currentTitle}
      {profileType !== "teamMember" && <span>at {currentEmployer}</span>}
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
      {Image && <Image className="profile__image" />}
      <h5 className="profile__name">{name}</h5>
      {profileType !== "teamMember" && (<p className="profile__label_current">Current:</p>)}
      {currentEmployerOrFoundingMember}
      {formerTitle && (<><p className="profile__label_former">Former:</p>
      <p className="profile__former-title">{formerTitle}</p></>)
      }
      {description && <p>{description}</p>}
      {socialList}
    </div>
  );
};

export default Profile;
