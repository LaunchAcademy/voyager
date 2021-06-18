import React from 'react'

import Profile from "../people/Profile"
import "./blogPosts.css"
import BlogTags from './BlogTags'

const BlogPost = ({ blogTitle, authorName, authorImageUrl, socialUrls, tags, children }) => {
  
  return(
    <article className="blog" >
      <h2>{blogTitle}</h2>
      <section className="blog__author">
        <Profile name={authorName} headshotUrl={authorImageUrl} socialUrls={socialUrls}/>
      </section>
      <section className="blog__content">
        {children}
      </section>
      <section className="blog__tag-container">
        <h6>Tags</h6>
        <BlogTags tags={tags} />
      </section>
    </article>
  )
}

export default BlogPost