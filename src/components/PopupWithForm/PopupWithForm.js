import React from 'react'
import './PopupWithForm.css'
function PopupWithForm({ name, isOpen, title, onClose, children, onAuthorizePopup }) {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <>
            <section className={isOpen ? `popup ${name} popup_opened` : `popup ${name}`}>
                <div className="popup__container">
                    <h2 className="popup__title">{title}</h2>
                    <form className="popup__form" onSubmit={handleSubmit} noValidate>
                        {children}
                    </form>
                    <button className="popup__close" onClick={onClose}></button>
                </div>
            </section>
        </>
    )
}
export default PopupWithForm