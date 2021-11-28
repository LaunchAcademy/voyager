import React from "react";
import PropTypes from "prop-types";
import "./article.css";

const Article = ({ imageProps, title, subtitle, path, className = "" }) => {
  return (
    <div className={`article-list__item ${className}`}>
      <a href={path}><img className="article-list__image" {...imageProps} /></a>
      <a href={path}><strong className="article-list__title">{title}</strong></a>
      <p className="article-list__subtitle">{subtitle}</p>
    </div>
  );
};

Article.defaultProps = {
  imageUrl: undefined,
  title: undefined,
  subtitle: undefined,
};

Article.propTypes = {
  imageUrl: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Article;
