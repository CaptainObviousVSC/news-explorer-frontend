import React from 'react';
import { Link } from 'react-router-dom'
import './SavedNewsHeader.css'
function SavedNewsHeader({ onHeaderPopup, onLogOut, onName, userCardsMap }) {
    const keywords = userCardsMap.map(i => i.keyword)
    console.log(keywords)
    function checkKeywords() {
        if (keywords.length = 1) {
            return 'Нет карточек, нет ключевых слов :)'
        }
        if(keywords.length = 2) {
            return `По ключевым словам: ${firstKeyword}`
        }
        if(keywords.length = 3) {
         return `По ключевым словам: ${firstKeyword}, ${secondKeyword}`
     }
     if(keywords.length >= 4) {
         return `По ключевым словам: ${firstKeyword}, ${secondKeyword} и ${keywords.length >= 1 ? `${keywords.length}-м другим`  : thirdKeyword }`
     }
    }
   const firstKeyword =  keywords.shift(0)
   const secondKeyword = keywords.shift(0)
   const thirdKeyword  = keywords.shift(0)
    console.log(keywords)
    const keywordsTitle = `${onName}, у вас ${userCardsMap.length} сохранённых статей`
    return (
        <section className="saved-news-header">
            <div className="saved-news-header__header">
                    <p className="saved-news-header__logo">NewsExplorer</p>
                    <button className="saved-news-header__mobile" onClick={onHeaderPopup}></button>
                    <div className="saved-news-header__text-box">
                        <Link to="/" className="saved-news-header__main-link">Главная</Link>
                        <p className="saved-news-header__saved-news-link-selected">Сохраненные статьи</p>
                        <button className="saved-news-header__logout" onClick={onLogOut}>{onName}</button>
                        </div>
            </div>
            <div className="saved-news-header__titles">
                <p className="saved-news-header__small-title">Сохранённые статьи</p>
                <h2 className="saved-news-header__title">{keywordsTitle}</h2>
                <p className="saved-news-header__text">{checkKeywords()}</p>
            </div>
        </section>
    );
}
export default SavedNewsHeader;