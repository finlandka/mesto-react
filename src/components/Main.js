import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Card from "./Card.js";

function Main(props) {
  
  const currentUser = React.useContext(CurrentUserContext);

  return (
      <main>
        <section className="profile">
          <div className="profile__card">
            <div
              className="profile__avatar"
              onClick={props.onEditAvatar}
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
            ></div>
            <div className="profile__info">
              <div>
                <h1 className="profile__fullname">{currentUser.name}</h1>
                <button
                  className="button button_action_edit"
                  onClick={props.onEditProfile}
                  aria-label="Редактировать"
                ></button>
              </div>
              <p className="profile__position">{currentUser.about}</p>
            </div>
          </div>
          <button
            className="button button_action_add"
            aria-label="Добавить"
            onClick={props.onAddPlace}
          ></button>
        </section>
        <section className="gallery-section">
          <ul className="gallery">
            {props.cards.map((card) => {
              return (
                <Card
                  key={card._id}
                  card={card}
                  onCardClick={props.onCardClick}
                  onCardLike={props.onCardLike}
                  onCardDelete={props.onCardDelete}
                />
              );
            })}
          </ul>
        </section>
      </main>
  );
}

export default Main;
