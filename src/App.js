import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page">
    <Header />
    <Main />
    <Footer />

    <div className="popup popup_edit-profile">
      <div className="popup__container">
        <button className="popup__close-button button" aria-label="Закрыть редактор профиля"></button>

        <form className="popup__form popup__form_profile" action="#" name="profile-form">
          <h2 className="popup__title">Редактировать&nbsp;профиль</h2>
          <input
           className="popup__input popup__input_edit_name"
           id="input-name"
           type="text"
           name="name"
           placeholder="Имя"
           minLength="2"
           maxLength="40"
           required />
          <span className="error" id="input-name-error"></span>

          <input
           className="popup__input popup__input_edit_job"
           id="input-job"
           type="text"
           name="about"
           placeholder="Описание профиля"
           minLength="2"
           maxLength="200"
           required />
          <span className="error" id="input-job-error"></span>
          <button className="popup__save-button popup__save-button_edit button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup popup_edit-confirm">
      <div className="popup__container">
        <button className="popup__close-button button" aria-label="Закрыть окно подтверждения"></button>
        <form className="popup__form popup__form_confirm"
        action="#" name="profile-form-confirm">
          <h2 className="popup__title popup__title_padding_small">Вы&nbsp;уверены?</h2>
          <button className="popup__save-button popup__save-button_nomargin button" type="submit">Да</button>
        </form>
      </div>
    </div>


  <div className="popup popup_edit_avatar">
    <div className="popup__container">
      <button className="popup__close-button button" aria-label="Закрыть форму обновления аватара"></button>
      <form
       className="popup__form popup__form_edit_avatar"
       action="#"
       name="edit-avatar-form">

        <h2 className="popup__title">Обновить&nbsp;аватар</h2>

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


  <div className="popup popup_add_picture">
    <div className="popup__container">
      <button className="popup__close-button button" aria-label="Закрыть форму добавления картинок"></button>
      <form
       className="popup__form popup__form_post"
       action="#"
       name="add-picture-form"
       >

        <h2 className="popup__title">Новое&nbsp;место</h2>
        <input
         className="popup__input popup__input_edit_title"
         id="input-title"
         type="text"
         name="name"
         placeholder="Название"
         minLength="2"
         maxLength="30"
         required />
        <span className="error" id="input-title-error"></span>

        <input
         className="popup__input popup__input_edit_picture-source"
         id="input-url"
         type="url"
         name="link"
         placeholder="Ссылка на картинку"
         required />
        <span className="error" id="input-url-error"></span>

        <button className="popup__save-button popup__save-button_add button" type="submit">Создать</button>
      </form>
    </div>
  </div>


  <div className="popup popup_show_picture">
    <div className="popup__preview">
      <button className="popup__close-button button" aria-label="Закрыть"></button>
      <img className="popup__image" src="#" alt="фото" />
      <h2 className="popup__subtitle"></h2>
    </div>
  </div>

 
  <template className="card-templete" id="card-templete">
    <article className="elements__element">
      <button className="elements__delete-button button" type="button" aria-label="Удалить"></button>
      <img className="elements__image" src="#" alt="фото" />
      <h2 className="elements__title"></h2>
      <button className="elements__like-button button" type="button" aria-label="Поставить лайк"></button>
      <p className="elements__like-number">0</p>
    </article>
  </template>

</div>
  );
}

export default App;
