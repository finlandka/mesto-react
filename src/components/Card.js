function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="gallery__item">
      <button className="button gallery__delete"></button>
      <img
        className="gallery__pic"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="gallery__desc">
        <h2 className="gallery__title">{props.card.name}</h2>
        <div>
          <button className="button heart"></button>
          <p className="gallery__count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
