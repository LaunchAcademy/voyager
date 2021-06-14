import React from 'react'

const BlogPost = ({ blogTitle, authorName, authorImageUrl, socialUrls, tags, children }) => {

  return(
    <article className="blog" >
      <h1>{blogTitle}</h1>
      <section className="blog__author">
        <div className="author__profile">
          <img src={authorImageUrl} />
          <div className="profile__name">
            <h4>{authorName}</h4>
            <p>{postDate}</p>
          </div>
        </div>
        <div className="author__socials">
        {socialUrls}
        </div>
      </section>
      <section className="blog__content">
        {children}
      </section>
      <section className="blog__tags">
        {tags}
      </section>
    </article>
  )
}

export default BlogPost