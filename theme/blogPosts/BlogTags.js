import React from "react"
import Button from "../buttons/Button"

import "./blogPosts.css"

const BlogTags = ({ tags }) => {
  let tagsArray
  if (Array.isArray(tags)) {
    tagsArray = tags
  } else if (tags) {
    tagsArray = tags.split(",")
  }

  const tagList = tagsArray.map((tag) => {
    return (
      <li>
        <Button
          key={tag}
          placement="photo"
          size="sm"
          text={tag}
          to="#"
        />
      </li>
    )
  })

  return (
    <ul className="tag-container__tags">
      {tagList}
    </ul>
  )
}

export default BlogTags