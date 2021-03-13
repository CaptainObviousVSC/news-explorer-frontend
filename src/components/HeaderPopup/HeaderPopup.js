import React from 'react';
import { Link } from 'react-router-dom'
import './HeaderPopup.css'
function HeaderPopup({ isOpen, onLoginPopup, onClose }) {
    return (
        <section className={isOpen ? `header-popup header-popup_opened` : `header-popup`}>
            <div className="header-popup__container">
            <div className="header-popup__content">
            <div className="header-popup__box">
            <p className="header-popup__logo">NewsExplorer</p>
            <button className="header-popup__close" onClick={onClose}></button>
            </div>
            <p className="header-popup__main-link-selected">Главная</p>
                <Link to="/savedNews" className="header-popup__saved-news-link">Сохраненные статьи</Link>
                <button className="header-popup__authorize" onClick={onLoginPopup}>Авторизоваться</button>
                </div>
            </div>
        </section>
    );
}
export default HeaderPopup;