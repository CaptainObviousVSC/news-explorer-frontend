import React from 'react'
import { FormValidator } from '../../utils/FormValidator'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import '../PopupWithForm/PopupWithForm.css'
function AuthorizePopup({ isOpen, onClose, onLoginPopup, setOnRegister }) {
    const email = FormValidator()
    const password = FormValidator()
    const name = FormValidator()
   function handleSubmitAuthorize(e) {
    e.preventDefault();
        setOnRegister(email.value, password.value, name.value)
        e.target.reset()
   }
    return (
        <PopupWithForm name="popup_authorize" isOpen={isOpen} title="Регистрация" onClose={onClose} onSubmit={handleSubmitAuthorize} >
            <p className="popup__input-title">Email</p>
            <input type="email" name="email"  className="popup__input popup__input_value-email" value={email.value} onChange={email.onChange}
                placeholder="Введите почту" required />
            <span className="popup__error" id="email-error-2">{email.errorMessage}</span>
            <p className="popup__input-title">Пароль</p>
            <input type="password" name="password"  className="popup__input popup__input_value-password" value={password.value} onChange={password.onChange}
                placeholder="Введите пароль" required />
            <span className="popup__error" id="password-error-2">{password.errorMessage}</span>
            <p className="popup__input-title">Имя</p>
            <input type="text" name="name"  className="popup__input popup__input_value-name" value={name.value} onChange={name.onChange}
                placeholder="Введите своё имя" required />
            <span className="popup__error" id="name-error">{name.errorMessage}</span>
            <button className={` popup__confirm ${email.isValid && password.isValid ? '' : 'popup__confirm_disabled'}`}>Зарегистрироваться</button>
            <div className="popup__text-box">
                <p className="popup__alternative-title">или</p>
                <button className="popup__alternative-link" onClick={onLoginPopup}>Войти</button>
                {/* <button className="popup__alternative-link" onClick={onConfirmAuthorizePopup}>потвердить</button> */}
                {/* расскоментировать чтобы увидеть попап потверждения */}
            </div>
        </ PopupWithForm>
    )
}

export default AuthorizePopup