import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getCards(), api.getUserInfo()])
      .then(([cards, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards.reverse());
      })
      .catch(console.error);
  }, []);

  return (
      <main>
        <section className="profile">
          <div className="profile__card">
            <div
              className="profile__avatar"
              onClick={props.onEditAvatar}
              style={{ backgroundImage: `url(${userAvatar})` }}
            ></div>
            <div className="profile__info">
              <div>
                <h1 className="profile__fullname">{userName}</h1>
                <button
                  className="button button_action_edit"
                  onClick={props.onEditProfile}
                  aria-label="Редактировать"
                ></button>
              </div>
              <p className="profile__position">{userDescription}</p>
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
            {cards.map((card) => {
              return (
                <Card
                  key={card._id}
                  card={card}
                  onCardClick={props.onCardClick}
                />
              );
            })}
          </ul>
        </section>
      </main>
  );
}

export default Main;
