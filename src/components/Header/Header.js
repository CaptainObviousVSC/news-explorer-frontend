import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './Header.css'
function Header({onLoginPopup }) {
    return (
        <header className="header">
              <p className="header__logo">NewsExplorer</p>
              <div className="header__text-box">
            <Switch>
                <Route path="/">
                <p className="header__main-link-selected">Главная</p>
                    <Link to="/savedNews" className="header__saved-news-link">Сохраненные статьи</Link>
                    {/* <button className="header__authorize" onClick={onLoginPopup}>Авторизоваться</button> */}
                    {/* раскомментировать чтобы увидеть попапы                 */}
                    </Route>
            </Switch>
            </div>
        </header>
    );
}
export default Header;