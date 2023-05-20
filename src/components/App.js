import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Input from "./Input";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext, useEffect, useState } from "react";
import { api } from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  const [ currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        // console.log(res);
        setCards(res);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })

    api.getInfoUser()
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err);
    })
}
    
   function handleCardDelete (card) {
    api.deleteCard(card._id)
    .then(() => {
        setCards((state) => 
        state.filter((c) => 
        c._id === card._id 
        ? '' 
        : c));
    })
    .catch((err) => {
      console.log(err);
    })
   }


  function handleImagePopupOpen(card) {
    setImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        setSelectedCard={handleImagePopupOpen}
        cards = {cards}
        onCardLike = {handleCardLike}
        onCardDelete = {handleCardDelete}
      />

      <Footer />

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        class={"popup_edit-profile"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title={"Редактировать профиль"}
        form={"form_profile"}
        buttonText={"Сохранить"}
      >
        <Input
          class={"popup__input_edit_name"}
          id={"input-name"}
          type={"text"}
          name={"name"}
          placeholder={"Имя"}
          minLength={"2"}
          maxLength={"40"}
          required
        />

        <Input
          class={"popup__input_edit_job"}
          id={"input-job"}
          type={"text"}
          name={"about"}
          placeholder={"Описание профиля"}
          minLength={"2"}
          maxLength={"200"}
          required
        />
      </PopupWithForm>

      <PopupWithForm
        class={"popup_edit-confirm"}
        onClose={closeAllPopups}
        form={"form_confirm"}
        titleModificator={"popup__title_padding_small"}
        title={"Вы уверены?"}
        buttonModificator={"popup__save-button_nomargin"}
        buttonText={"Да"}
      ></PopupWithForm>

      <PopupWithForm
        class={"popup_edit_avatar"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        form={"form_edit_avatar"}
        name="edit-avatar-form"
        title={"Обновить аватар"}
        buttonText={"Сохранить"}
      >
        <Input
          class={"popup__input_edit_avatar-source"}
          id={"input-avatar"}
          type={"url"}
          name={"avatar"}
          placeholder={"Ссылка на картинку"}
          required
        />
      </PopupWithForm>

      <PopupWithForm
        class={"popup_add_picture"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        form={"form_post"}
        title={"Новое место"}
        buttonText={"Создать"}
      >
        <Input
          class={"popup__input_edit_title"}
          id={"input-title"}
          type={"text"}
          name={"name"}
          placeholder={"Название"}
          minLength={"2"}
          maxLength={"30"}
          required
        />

        <Input
          class={"popup__input_edit_picture-source"}
          id={"input-url"}
          type={"url"}
          name={"link"}
          placeholder={"Ссылка на картинку"}
          required
        />
      </PopupWithForm>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App; 
