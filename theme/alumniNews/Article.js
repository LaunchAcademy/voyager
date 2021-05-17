import React from "react";
import PropTypes from "prop-types";
import "./article.css";

const Article = ({ imageUrl, title, subtitle }) => {
  return (
    <>
      <img className="article-list__image" src={imageUrl} />
      <p className="article-list__title">{title}</p>
      <p className="article-list__subtitle">{subtitle}</p>
    </>
  )
}

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