import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        // console.log(res);
        setCards(res);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
  }, []);

  useEffect(() => {
    api.getInfoUser()
    .then((res) => {
      // console.log(res);
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-button button"
          onClick={props.onEditAvatar}
        >
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
        </button>
        <h1 className="profile__name">{userName}</h1>
        <p className="profile__description">{userDescription}</p>
        <button
          className="profile__edit-button button"
          type="button"
          aria-label="Редактировать профиль"
          onClick={props.onEditProfile}
        ></button>
        <button
          className="profile__add-button button"
          type="button"
          aria-label="Добавть фото"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Галерея">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              setSelectedCard={props.setSelectedCard}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
