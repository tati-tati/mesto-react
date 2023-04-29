function PopupWithForm () {
  return (
    <div className="popup"> 
      <div className="popup__container">
        <button className="popup__close-button button" aria-label="Закрыть форму"></button>
        <form
         className="popup__form"/*popup__form_edit_avatar*/
         action="#"
         name=""/* name="edit-avatar-form" */> 
  
          <h2 className="popup__title">{props.title}</h2>
  
          <input
           className="popup__input popup__input_edit_avatar-source"
           id="input-avatar"
           type="url"
           name="avatar"
           placeholder="Ссылка на картинку"
           required />
          <span className="error" id="input-avatar-error"></span>
  
          <button className="popup__save-button popup__save-button_edit_avatar button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;