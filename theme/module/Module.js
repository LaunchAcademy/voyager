import React from "react"

const Module = ({
  subtitle,
  title,
  location,
  commitment,
  duration,
  detail,
  description,
  children,
  Image,
  altText,
}) => {
  let details
  location && commitment && duration
    ? (details = (
        <p>
          {location} | {commitment} | {duration}
        </p>
      ))
    : (details = <p>{detail}</p>)
  return (
    <div className="module">
      <div className="module__image-column">
        <div className="image-column__image-container">
          <Image alt={altText} />
        </div>
      </div>
      <div className="module__supporting-content">
        <h2 className="supporting-content__subtitle">{subtitle}</h2>
        <h1 className="supporting-content__title">{title}</h1>
        <div className="supporting-content__info-container">{details}</div>
        <div className="supporting-content__description-container">
          <p>{description}</p>
        </div>
        <div className="supporting-content__objectives-container">{children}</div>
      </div>
    </div>
  )
}

export default Module
