import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
function Header({ onLoginPopup, onHeaderPopup }) {
    return (
        <header className="header">
            <p className="header__logo">NewsExplorer</p>
            <button className="header__mobile" onClick={onHeaderPopup}></button>
            <div className="header__text-box">
                <p className="header__main-link-selected">Главная</p>
                <Link to="/savedNews" className="header__saved-news-link">Сохраненные статьи</Link>
                <button className="header__authorize" onClick={onLoginPopup}>Авторизоваться</button>
            </div>
        </header>
    );
}
export default Header;