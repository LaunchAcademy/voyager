import React from "react";

const Article = ({ Image, title, subtitle, path, className = "" }) => {
  return (
    <div className={`article-list__item ${className}`}>
      <a href={path}>
        <Image className="article-list__image" />
      </a>
      <a href={path}>
        <strong className="article-list__title">{title}</strong>
      </a>
      <p className="article-list__subtitle">{subtitle}</p>
    </div>
  );
};

export default Article;
