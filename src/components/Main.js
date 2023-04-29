function Main () {

  function handleEditAvatarClick () {
   document.querySelector('.popup_edit_avatar').classList.add('popup_opened');
  };

  function handleEditProfileClick () {
    document.querySelector('.popup_edit-profile').classList.add('popup_opened');
  }
  
  function handleAddPlaceClick () {
    document.querySelector('.popup_add_picture').classList.add('popup_opened');
  }

  return (
    <main className="content">
    <section className="profile">
      <button className="profile__avatar-button button"
      onClick={handleEditAvatarClick}>
        <img className="profile__avatar" src="#" alt="аватар" />
      </button>
      <h1 className="profile__name">Тати Тати</h1>
      <p className="profile__description">Старается как может</p>
      <button className="profile__edit-button button" type="button" aria-label="Редактировать профиль"
      onClick={handleEditProfileClick}></button>
      <button className="profile__add-button button" type="button" aria-label="Добавть фото"
      onClick={handleAddPlaceClick}></button>
    </section>

    <section className="elements" aria-label="Галерея">
    </section>
    
    </main>
  )
}



export default Main;