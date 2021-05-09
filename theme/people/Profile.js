import React from "react";
import "./profile.css";

const Profile = ({
  name, currentTitle, currentEmployer, formerTitle, headshotUrl,
}) => (
  <div className="profile">
    <img className="profile__image" src={headshotUrl} alt={name} />
    <h5 className="profile__name">{name}</h5>
    <p className="profile__label_current">Current:</p>
    <h6 className="profile__current-title">{currentTitle} <br />at {currentEmployer}</h6>
    <p className="profile__label_former">Former:</p>
    <p className="profile__former-title">{formerTitle}</p>
  </div>
);

export default Profile;
