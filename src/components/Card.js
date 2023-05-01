function Card(props) {
  function handleCardClick () {
    props.setSelectedCard(props.card);
  }
  return (
    <article className="elements__element">
      <button
        className="elements__delete-button button"
        type="button"
        aria-label="Удалить"
      ></button>
      <img className="elements__image" src={props.card.link} alt={props.card.name} 
      onClick={handleCardClick} />
      <h2 className="elements__title">{props.card.name}</h2>
      <button
        className="elements__like-button button"
        type="button"
        aria-label="Поставить лайк"
      ></button>
      <p className="elements__like-number">0</p>
    </article>
  );
}

export default Card;
