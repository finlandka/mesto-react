import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();

    props.onCardDelete(props.cardToDelete)
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="delete-card"
      title="Вы уверены?"
      buttonText="Да"
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default DeleteCardPopup;
