import React from 'react'

const Card = ({ photo, header, body }) => {

  return (
    <div className="card">
      <figure className="card__photo">
        <img className="card__photo-image" src={photo} />
      </figure>
      <h3 className="card__header">{header}</h3>
      <p className="card__body">{body}</p>
    </div>
  )
}

export default Card