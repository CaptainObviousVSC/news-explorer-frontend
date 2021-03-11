import React from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import '../PopupWithForm/PopupWithForm.css'
function AuthorizePopup({ isOpen, onClose, onLoginPopup, onConfirmAuthorizePopup }) {
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <PopupWithForm name="popup_authorize" isOpen={isOpen} title="Регистрация" onClose={onClose} >
            <p className="popup__input-title">Email</p>
            <input type="email" name="email"  className="popup__input popup__input_value-email"
                placeholder="Введите почту" required />
            <span className="popup__error" id="email-error"></span>
            <p className="popup__input-title">Пароль</p>
            <input type="password" name="password"  className="popup__input popup__input_value-password"
                placeholder="Введите пароль" required />
            <span className="popup__error" id="password-error"></span>
            <p className="popup__input-title">Имя</p>
            <input type="text" name="name"  className="popup__input popup__input_value-name"
                placeholder="Введите своё имя" required />
            <span className="popup__error" id="name-error"></span>
            <button className="popup__confirm">Зарегистрироваться</button>
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