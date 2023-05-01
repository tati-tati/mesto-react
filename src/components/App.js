import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Input from "./Input";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  // console.log(selectedCard)

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
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        setSelectedCard={handleImagePopupOpen}
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
    </div>
  );
}

export default App;
