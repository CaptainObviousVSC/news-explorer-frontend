import React from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import '../PopupWithForm/PopupWithForm.css'
function ConfirmAuthorizePopup({ isOpen, onClose,onLoginPopup }) {
    return (
        <PopupWithForm name="popup_confirm-authorize" isOpen={isOpen} title="Пользователь успешно зарегистрирован!" onClose={onClose} >
             <button className="popup__alternative-link_for-confirm" onClick={onLoginPopup}>Войти</button>
        </ PopupWithForm>
    )
}

export default ConfirmAuthorizePopup