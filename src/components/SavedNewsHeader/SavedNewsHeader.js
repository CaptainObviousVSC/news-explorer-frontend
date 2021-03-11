import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './SavedNewsHeader.css'
function SavedNewsHeader() {
    return (
        <section className="saved-news-header">
            <div className="saved-news-header__header">
                <Switch>
                    <Route path="/savedNews">
                    <p className="saved-news-header__logo">NewsExplorer</p>
                    <div className="saved-news-header__text-box">
                        <Link to="/" className="saved-news-header__main-link">Главная</Link>
                        <p className="saved-news-header__saved-news-link-selected">Сохраненные статьи</p>
                        </div>
                    </Route>
                </Switch>
            </div>
            <div className="saved-news-header__titles">
                <p className="saved-news-header__small-title">Сохранённые статьи</p>
                <h2 className="saved-news-header__title">Грета, у вас 5 сохранённых статей</h2>
                <p className="saved-news-header__text">По ключевым словам: Природа, Тайга и 2-м другим</p>
            </div>
        </section>
    );
}
export default SavedNewsHeader;