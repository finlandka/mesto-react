import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard();
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
      >
        <>
          <input
            className="popup__input"
            id="formName"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            name="name"
            required
          />
          <span className="formName-error popup__error"></span>
          <input
            className="popup__input"
            id="formPosition"
            type="text"
            placeholder="Вид деятельности"
            minLength="2"
            maxLength="200"
            name="position"
            required
          />
          <span className="formPosition-error popup__error"></span>
          <button className="popup__button" type="submit">
            Сохранить
          </button>
        </>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Новое место"
      >
        <>
          <input
            className="popup__input"
            id="placeName"
            type="text"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            name="name"
            required
          />
          <span className="placeName-error popup__error"></span>
          <input
            className="popup__input"
            id="placeUrl"
            type="url"
            placeholder="Ссылка на картинку"
            name="link"
            required
          />
          <span className="placeUrl-error popup__error"></span>
          <button className="popup__button" type="submit">
            Создать
          </button>
        </>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Обновить аватар"
      >
        <>
          <input
            className="popup__input"
            id="avatarUrl"
            type="url"
            placeholder="Ссылка на аватар"
            name="link"
            required
          />
          <span className="avatarUrl-error popup__error"></span>
          <button className="popup__button" type="submit">
            Сохранить
          </button>
        </>
      </PopupWithForm>
      <ImagePopup />
    </div>
  );
}

export default App;
