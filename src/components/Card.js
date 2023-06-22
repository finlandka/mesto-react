import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `button heart ${
    isLiked && "heart_status_active"
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="gallery__item">
      {isOwn && (
        <button
          className="button gallery__delete"
          onClick={handleDeleteClick}
        />
      )}
      <img
        className="gallery__pic"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="gallery__desc">
        <h2 className="gallery__title">{props.card.name}</h2>
        <div>
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          <p className="gallery__count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
