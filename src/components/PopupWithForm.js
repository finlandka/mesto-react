function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${props.isOpen && `popup_opened`}`}
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          className="button button_action_close"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
