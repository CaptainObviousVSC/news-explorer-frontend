import React from 'react';
import { Link } from 'react-router-dom'
import './SavedNewsHeader.css'
function SavedNewsHeader({ onHeaderPopup }) {
    return (
        <section className="saved-news-header">
            <div className="saved-news-header__header">
                    <p className="saved-news-header__logo">NewsExplorer</p>
                    <button className="saved-news-header__mobile" onClick={onHeaderPopup}></button>
                    {/* <input id="saved-news-header__toggle" type="checkbox" className="saved-news-header__toggle" />
                <label className="saved-news-header__button-for-mobile" htmlFor="saved-news-header__toggle">
                </label>
                <ul className="saved-news-header__box-for-mobile">
                <Link to="/" className="saved-news-header__main-link_for-mobile">Главная</Link>
                        <p className="saved-news-header__saved-news-link-selected_for-mobile">Сохраненные статьи</p>
                </ul> */}
                    <div className="saved-news-header__text-box">
                        <Link to="/" className="saved-news-header__main-link">Главная</Link>
                        <p className="saved-news-header__saved-news-link-selected">Сохраненные статьи</p>
                        </div>
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