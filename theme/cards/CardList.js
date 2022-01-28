import React from "react";

import "./cards.css";
import Card from "./Card.js";
import DesktopProjectCard from "./DesktopProjectCard.js";
import MobileProjectCard from "./MobileProjectCard.js";

const CardList = ({ content, cardType = "article", numberOfColumns, className, learnMoreToggle = false }) => {
  let cardListSize = "card-list";

  if (numberOfColumns === 2) {
    cardListSize += "_medium";
  } else if (numberOfColumns === 3) {
    cardListSize += "_large";
  }

  const cardContentArray = content.map((card) => {
    if (card.mobile === true) {
      return (
        <MobileProjectCard
          key={card.id}
          Image={card.Image}
          projectTitle={card.projectTitle}
          studentName={card.studentName}
          studentProfileUrl={card.studentProfileUrl}
        />
      );
    }
    if (card.mobile === false) {
      return (
        <DesktopProjectCard
          key={card.id}
          Image={card.Image}
          projectTitle={card.projectTitle}
          studentName={card.studentName}
          studentProfileUrl={card.studentProfileUrl}
        />
      );
    }
    return <Card
      key={card.id}
      Image={card.Image}
      header={card.header}
      body={card.body}
      url={card.articleUrl}
      timeToRead={card.timeToRead}
      categories={card.categories}
      learnMoreToggle={learnMoreToggle} />;
  });

  return <div className={`${[cardListSize, className, `card-list_${cardType}`].join(" ")}`}>{cardContentArray}</div>;
};

export default CardList;
