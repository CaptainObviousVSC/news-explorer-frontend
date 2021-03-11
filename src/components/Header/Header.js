import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
function Header({ onLoginPopup }) {
    return (
        <header className="header">
            <p className="header__logo">NewsExplorer</p>
            <input id="header__toggle" type="checkbox" className="header__toggle" />
                <label class="header__button-for-mobile" for="header__toggle">
                    <span></span>
                </label>
                <ul class="header__box-for-mobile">
               <li><p className="header__main-link-selected_for-mobile">Главная</p></li>
                <li><Link to="/savedNews" className="header__saved-news-link_for-mobile">Сохраненные статьи</Link></li>
                <li><button className="header__authorize_for-mobile" onClick={onLoginPopup}>Авторизоваться</button></li>
                </ul>
            <div className="header__text-box">
                <p className="header__main-link-selected">Главная</p>
                <Link to="/savedNews" className="header__saved-news-link">Сохраненные статьи</Link>
                <button className="header__authorize" onClick={onLoginPopup}>Авторизоваться</button>
                {/* раскомментировать чтобы увидеть попапы                 */}
            </div>
        </header>
    );
}
export default Header;