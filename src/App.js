import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";
import Input from "./components/Input";

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
      >
        <form
          className="popup__form popup__form_profile"
          action="#"
          name="profile-form"
        >
          <h2 className="popup__title">Редактировать&nbsp;профиль</h2>
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

          <button
            className="popup__save-button popup__save-button_edit button"
            type="submit"
          >
            Сохранить
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm class={"popup_edit-confirm"} onClose={closeAllPopups}>
        <form
          className="popup__form popup__form_confirm"
          action="#"
          name="profile-form-confirm"
        >
          <h2 className="popup__title popup__title_padding_small">
            Вы&nbsp;уверены?
          </h2>
          <button
            className="popup__save-button popup__save-button_nomargin button"
            type="submit"
          >
            Да
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm
        class={"popup_edit_avatar"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <form
          className="popup__form popup__form_edit_avatar"
          action="#"
          name="edit-avatar-form"
        >
          <h2 className="popup__title">Обновить&nbsp;аватар</h2>

          <Input
            class={"popup__input_edit_avatar-source"}
            id={"input-avatar"}
            type={"url"}
            name={"avatar"}
            placeholder={"Ссылка на картинку"}
            required
          />

          <button
            className="popup__save-button popup__save-button_edit_avatar button"
            type="submit"
          >
            Сохранить
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm
        class={"popup_add_picture"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <form
          className="popup__form popup__form_post"
          action="#"
          name="add-picture-form"
        >
          <h2 className="popup__title">Новое&nbsp;место</h2>
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

          <button
            className="popup__save-button popup__save-button_add button"
            type="submit"
          >
            Создать
          </button>
        </form>
      </PopupWithForm>
    </div>
  );
}

export default App;
