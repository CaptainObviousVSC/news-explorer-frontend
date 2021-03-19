import React from 'react'
import { useLocation } from 'react-router-dom'
import './NewsCard.css'
function NewsCard({ card, onSave, curd, onDeleteCard, currentUser, loggedIn, onLoginPopup, userCardsForFunction }) {
  console.log(userCardsForFunction)
  let article = {}
if(!card) {
  article = {
    keyword: curd.keyword,
    title: curd.title,
    text: curd.text,
    date: curd.date,
    source: curd.source,
    link: curd.link,
    image: curd.image,
    _id: curd._id
  }
} 
if(!curd) {
  article = card
}
  const location = useLocation()
  const path = location.pathname
const date = new Date(article.date);
const options = { day: 'numeric', month: 'long', year: 'numeric', };
const dateFormated = date.toLocaleString('ru-RU', options)
  const text = article.text;
  const croppeText = text.substring(0, 127)
  const title = article.title;
  const croppeTitle = title.substring(0, 54)
  const isSave = (path == '/' && (userCardsForFunction && userCardsForFunction.find(data => data.title === card.title)))
 const Card = userCardsForFunction.find((c) => c._id)
  // const isSaved = card.id.some(i => i._id === currentUser._id);
  // const cardSaveButton = `${isSaved ? 'news-card__save news-card__save_active' : 'news-card__save'}`;
  // const isOwn = card.owner._id === currentUser._id;
// const cardDeleteButton = (
//   `news-card__delete ${isOwn ? 'news-card__delete' : ''}`
// );
  function handleSave() {
    onSave(card)
  }
  function handleDelete() {
    onDeleteCard(Card._id)
  }
  return (
//      <li className='news-card'>
// <button className={`news-card__save ${loggedIn && path === '/' && isSave ? 'news-card__save_active' : (path === '/' ? 'news-card__save' : 'news-card__delete')} `}
//  onClick = {loggedIn ? (path === '/' ? handleSave : handleDelete ) : onLoginPopup} ></button>
// <div className={path === '/' ? 'news-card__keyword-box_none' : 'news-card__keyword-box'}>
// <p className='news-card__keyword'>{article.keyword}</p>
// </div>
// <a className="news-card__link" href={article.link} target="_blank">
//          <img className="news-card__img" src={article.image} alt={article.title} />
//        </a>
//   <div className="news-card__main-box">
//         <div className="news-card__text-box">
//           <p className="news-card__date">{dateFormated}</p>
//           <h2 className="news-card__title">{croppeTitle}</h2>
//           <p className="news-card__text">{croppeText}</p>
//         </div>
//         <p className="news-card__source">{article.source}</p>
//       </div>
// </li> 
    <li className="news-card">
       <div className={path === '/' ? 'news-card__keyword-box_none' : 'news-card__keyword-box'}>
      <p className='news-card__keyword'>{article.keyword}</p>
      </div>
      <div className="news-card__container-for-buttons">
      <button className={`news-card__button ${loggedIn && path === '/' && isSave ? 'news-card__save_active' : (path === '/' ? 'news-card__button-save' : 'news-card__delete')} `}
  onClick = {loggedIn ? (path === '/' ? handleSave : handleDelete ) : onLoginPopup} ></button>
      </div>
    <a className="news-card__link" href={article.link} target="_blank">
              <img className="news-card__img" src={article.image} alt={article.title} />
           </a>
       <div className="news-card__main-box">
           <div className="news-card__text-box">
             <p className="news-card__date">{dateFormated}</p>
               <h2 className="news-card__title">{croppeTitle}</h2>
               <p className="news-card__text">{croppeText}</p>
             </div>
            <p className="news-card__source">{article.source}</p>
          </div>
     </li>
  )
}
export default NewsCard