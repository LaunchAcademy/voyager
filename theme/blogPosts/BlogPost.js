import React from "react";
import format from "date-fns/format";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import Profile from "../people/Profile";
import BlogTags from "./BlogTags";
import { FacebookMessengerShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import Icon from "../icons/Icon";

const BlogPost = ({
  blogTitle,
  authorName,
  Image,
  AuthorImage,
  url,
  tags = [],
  publishedAt,
  children,
}) => (
  <article className="blog">
    <h1>{blogTitle}</h1>
    <section className="blog__context">
      {AuthorImage && <AuthorImage className="profile__image" alt={authorName} />}

      <div className="blog__meta-details">
        <p className="blog__author-name">By {authorName}</p>
        {publishedAt && (
          <p className="blog__publication-date">{format(publishedAt, "LLLL d, yyyy")}</p>
        )}
      </div>
      <div className="blog__social-shares">
        <FacebookMessengerShareButton url={url}>
          <Icon icon={faFacebook} />
        </FacebookMessengerShareButton>
        <TwitterShareButton url={url}>
          <Icon icon={faTwitter} />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <Icon icon={faLinkedin} />
        </LinkedinShareButton>
        <CopyToClipboard text={url}>
          <button>
            <Icon icon={faLink} />
          </button>
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
