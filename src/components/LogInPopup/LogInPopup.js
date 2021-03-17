import React from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import '../PopupWithForm/PopupWithForm.css'
import { FormValidator } from '../../utils/FormValidator'
function LoginPopup({ isOpen, onClose, onAuthorizePopup, setOnLogin}) {
    const email = FormValidator()
    const password = FormValidator()
   function handleSubmitLogin(e) {
    e.preventDefault();
        if (!email || !password){
          console.log('dfsdfsd')
          return;
        }
        setOnLogin(email.value, password.value)
   }
    return (
        <PopupWithForm name="popup_login" isOpen={isOpen} title="Вход" onClose={onClose} onSubmit={handleSubmitLogin}  >
            <p className="popup__input-title">Email</p>
            <input type="email" name="email"  className="popup__input popup__input_value-email" required  value={email.value} onChange={email.onChange}
                placeholder="Введите почту" />
            <span className="popup__error" id="email-error">{email.errorMessage}</span>
            <p className="popup__input-title">Пароль</p>
            <input type="password" name="password" minLength='6'  className="popup__input popup__input_value-password" value={password.value} onChange={password.onChange}
                placeholder="Введите пароль" required />
            <span className="popup__error" id="password-error">{password.errorMessage}</span>
            <button type="submit" className={` popup__confirm ${email.isValid && password.isValid ? '' : 'popup__confirm_disabled'}`}>Войти</button>
            <div className="popup__text-box">
                <p className="popup__alternative-title">или</p>
                <button className="popup__alternative-link" onClick={onAuthorizePopup}>Зарегистрироваться</button>
            </div>
        </ PopupWithForm>
    )
}

export default LoginPopup