function PopupWithForm({isOpen, onClose, name, title, buttonText, children}) {
  return (
    <div
      className={`popup popup_${name} ${isOpen && `popup_opened`}`}
    >
      <div className="popup__container">
        <button
          onClick={onClose}
          className="button button_action_close"
          aria-label="Закрыть" />
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name}>
          {children}
          <button className="popup__button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
