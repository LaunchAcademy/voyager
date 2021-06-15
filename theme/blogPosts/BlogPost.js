import React from 'react'

import Profile from "../people/Profile"
import Button from "../buttons/Button"
import "./blogPosts.css"

const BlogPost = ({ blogTitle, authorName, authorImageUrl, socialUrls, tags, children }) => {

  let tagsSplit
  if (tags) {
    tagsSplit = tags.split(",")
  }

  const tagList = tagsSplit.map((tag) => {
    return (
      <li>
        <Button
          placement="photo"
          size="sm"
          text={tag}
          to="#"
        />
      </li>
    )
  
  })
  
  return(
    <article className="blog" >
      <h2>{blogTitle}</h2>
      <section className="blog__author">
        <Profile name={authorName} headshotUrl={authorImageUrl} socialUrls={socialUrls}/>
      </section>
      <section className="blog__content">
        {children}
      </section>
      <ul className="blog__tags">
        {tagList}
      </ul>
    </article>
  )
}

export default BlogPost