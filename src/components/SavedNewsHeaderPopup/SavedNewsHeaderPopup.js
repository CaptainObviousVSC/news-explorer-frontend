import React from 'react';
import { Link } from 'react-router-dom'
import '../HeaderPopup/HeaderPopup.css'
import './SavedNewsHeaderPopup.css'
function SavedNewsHeaderPopup({ isOpen, onClose }) {
    return (
        <section className={isOpen ? `header-popup header-popup_opened` : `header-popup`}>
            <div className="header-popup__container_saved-news">
            <div className="header-popup__content">
            <div className="header-popup__box">
            <p className="header-popup__logo_saved-news">NewsExplorer</p>
            <button className="header-popup__close_saved-news" onClick={onClose}></button>
            </div>
            <Link to="/" className="saved-news-header-popup__main-link">Главная</Link>
                        <p className="saved-news-header-popup__saved-news-link-selected">Сохраненные статьи</p>
                </div>
            </div>
        </section>
    );
}
export default SavedNewsHeaderPopup;