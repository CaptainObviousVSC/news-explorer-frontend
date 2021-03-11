import React from 'react'
import '../NewsCard/NewsCard.css'
import NewsCard from '../NewsCard/NewsCard'
function NewsCardForMain() {
    return (
        <NewsCard>
            <button className="news-card__save"></button>
        </NewsCard>
    )
}
export default NewsCardForMain