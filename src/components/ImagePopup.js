function ImagePopup(props) {
  return (
    <div className={`popup popup_image ${props.card ? "popup_opened" : ""}`}>
      <div className="popup__image-container">
        <button
          className="button button_action_close"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        {props.card && (
          <>
            <img
              className="popup__image"
              src={props.card.link}
              alt={props.card.name}
            />
            <h2 className="popup__desc">{props.card.name}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default ImagePopup;
