import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../NewsCard/NewsCard.css'
function SavedNewsCard({ card, onDeleteCard, currentUser }) {
//   var mydate = new Date(card.publishedAt);
//   const dad = mydate
// console.log(mydate.toDateString());
console.log(card)
console.log(card.owner)
const isSaved = card.owner._id === currentUser._id;
const cardSaveButton = `${isSaved ? 'news-card__save news-card__save_active' : 'news-card__save'}`;
const isOwn = card.owner._id === currentUser._id;
console.log(isOwn)
const cardDeleteButton = (
  `news-card__delete ${isOwn ? 'news-card__delete' : ''}`
);
  const text = card.text;
  const croppeText = text.substring(0, 127)
  const title = card.title;
  const croppeTitle = title.substring(0, 54)
  function handleDelete() {
    onDeleteCard(card._id)
  }
  return (
    <li className="news-card">
      <div className="news-card__container-for-buttons">
            <div className="news-card__keyword-box">
              <p className="news-card__keyword">{card.keyword}</p>
            </div>
            <button className={`${cardDeleteButton}`} onClick={handleDelete}></button>
      </div>
      <a className="news-card__link" href={card.link} target="_blank">
        <img className="news-card__img" src={card.image} alt={card.title} />
      </a>
      <div className="news-card__main-box">
        <div className="news-card__text-box">
          <p className="news-card__date">{card.date}</p>
          <h2 className="news-card__title">{croppeTitle}</h2>
          <p className="news-card__text">{croppeText}</p>
        </div>
        <p className="news-card__source">{card.source}</p>
      </div>
    </li>
  )
}
export default SavedNewsCard
