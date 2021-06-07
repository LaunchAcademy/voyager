import React from "react";
import PropTypes from "prop-types";
import "./article.css";

const Article = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="article-list__item">
      <img className="article-list__image" src={imageUrl} />
      <strong className="article-list__title">{title}</strong>
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
