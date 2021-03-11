import React from 'react'
import '../NewsCard/NewsCard.css'
import NewsCard from '../NewsCard/NewsCard'
function NewsCardForSavedNews({card}) {
    return (
        <NewsCard>
            <div className="news-card__keyword-box">
                <p className="news-card__keyword">{card.keywords}</p>
                </div>
            <button className="news-card__delete"></button>
        </NewsCard>
    )
}
export default NewsCardForSavedNews