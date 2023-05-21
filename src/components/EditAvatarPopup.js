import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function EditAvatarPopup (props) {

  const avatar = useRef('');

  function handleChangeAvatar (evt) {
    avatar.current = evt.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar(avatar);
  }

  return (
    <PopupWithForm
        class={"popup_edit_avatar"}
        isOpen={props.isOpen}
        onClose={props.onClose}
        form={"form_edit_avatar"}
        name="edit-avatar-form"
        title={"Обновить аватар"}
        buttonText={"Сохранить"}
        onSubmit={handleSubmit}
      >
        <Input
          class={"popup__input_edit_avatar-source"}
          id={"input-avatar"}
          type={"url"}
          name={"avatar"}
          placeholder={"Ссылка на картинку"}
          getInputValue={handleChangeAvatar}
          required
        />
      </PopupWithForm>
  )
}

export default EditAvatarPopup;