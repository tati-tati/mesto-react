function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.class} ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button button"
          aria-label="Закрыть редактор профиля"
          onClick = {props.onClose}
        ></button>
        {props.children}
      </div>
    </div>
  );
}

export default PopupWithForm;
