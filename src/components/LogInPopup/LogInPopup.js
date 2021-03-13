import React from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import '../PopupWithForm/PopupWithForm.css'
function LoginPopup({ isOpen, onClose, onAuthorizePopup }) {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <PopupWithForm name="popup_login" isOpen={isOpen} title="Вход" onClose={onClose} >
            <p className="popup__input-title">Email</p>
            <input type="email" name="email"  className="popup__input popup__input_value-email"
                placeholder="Введите почту" required />
            <span className="popup__error" id="email-error"></span>
            <p className="popup__input-title">Пароль</p>
            <input type="password" name="password"  className="popup__input popup__input_value-password"
                placeholder="Введите пароль" required />
            <span className="popup__error" id="password-error"></span>
            <button className="popup__confirm">Войти</button>
            <div className="popup__text-box">
                <p className="popup__alternative-title">или</p>
                <button className="popup__alternative-link" onClick={onAuthorizePopup}>Зарегистрироваться</button>
            </div>
        </ PopupWithForm>
    )
}

export default LoginPopup