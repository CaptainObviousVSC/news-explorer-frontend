import React from 'react';
import './NotFoundCards.css'
import image from '../../images/not-found.svg'
function NotFoundCard() {
    return (
       <div className="not-found-cards">
           <img className="not-found-cards__img" src={image} alt="Ничего не найдено" />
           <h3 className="not-found-cards__title">Ничего не найдено</h3>
           <p className="not-found-cards__text">К сожалению по вашему запросу ничего не найдено.</p>
       </div>
    );
}
export default NotFoundCard;