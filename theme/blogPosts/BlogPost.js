import React from 'react'

import Profile from "../people/Profile"
import "./blogPosts.css"

const BlogPost = ({ blogTitle, authorName, authorImageUrl, socialUrls, tags, children }) => {

  
  return(
    <article className="blog" >
      <h1>{blogTitle}</h1>
      <section className="blog__author">
        <Profile name={authorName} headshotUrl={authorImageUrl} socialUrls={socialUrls}/>
      </section>
      <section className="blog__content">
        <p>{children}</p>
      </section>
      <section className="blog__tags">
        {tags}
      </section>
    </article>
  )
}

export default BlogPost