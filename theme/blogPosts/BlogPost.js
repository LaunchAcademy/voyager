import React from "react";
import { format } from "date-fns"
import {CopyToClipboard} from 'react-copy-to-clipboard';

import Profile from "../people/Profile";
import "./blogPosts.css";
import BlogTags from "./BlogTags";
import { FacebookMessengerShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import Icon from "../icons/Icon";

const BlogPost = ({
  blogTitle, authorName, Image, AuthorImage, url, tags = [], publishedAt, children
}) => (
  <article className="blog">
    <h1>{blogTitle}</h1>
    <section className="blog__context">
      {
        AuthorImage &&
        <AuthorImage
          className="profile__image"
          alt={authorName}
        />
      }

      <div className="blog__meta-details">
        <p className="blog__author-name">By {authorName}</p>
        {publishedAt && <p className="blog__publication-date">{ format(publishedAt, "LLLL d, yyyy") }</p>}

      </div>
      <div className="blog__social-shares">
        <FacebookMessengerShareButton url={url}>
          <Icon name="facebook" />
        </FacebookMessengerShareButton>
        <TwitterShareButton url={url}>
          <Icon name="twitter" />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <Icon name="linkedin" />
        </LinkedinShareButton>
        <CopyToClipboard text={url}>
          <button><Icon name="link" /></button>
        </CopyToClipboard>
      </div>

    </section>
    <section className="blog__content blog__content_legacy">
      <Image />
      {children}
    </section>
  </article>
);

export default BlogPost;
