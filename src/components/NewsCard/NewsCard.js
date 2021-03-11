import React from 'react'
import { Route, Switch} from 'react-router-dom'
import './NewsCard.css'
function NewsCard({card}) {
  const text = card.text;
  const croppeText = text.substring(0, 80)
  console.log(croppeText.length)
  const title = card.title;
  const croppeTitle = title.substring(0, 54)
  console.log(croppeTitle.length)
  return (
    <li className="news-card">
      <div className="news-card__container-for-buttons">
      <Switch>
      <Route path="/savedNews">
          <div className="news-card__keyword-box">
                <p className="news-card__keyword">{card.keyword}</p>
                </div>
            <button className="news-card__delete"></button>
          </Route>
          <Route path="/">
          <button className="news-card__save"></button>
          </Route>
      </Switch>
      </div>

      <img className="news-card__img" src={card.img} alt={card.alt} />
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
export default NewsCard