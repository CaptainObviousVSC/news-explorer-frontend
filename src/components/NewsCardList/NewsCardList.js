import React from 'react';
import NewsCard from '../NewsCard/NewsCard'
import { Route, Switch} from 'react-router-dom'
import  './NewsCardList.css'
function NewsCardList({cards}) {
    const [count, setCount] = React.useState(3)
    function handleCountCards() {
        setCount(count + 3)
    }
    return (
        <div className="news-card-list-border">
            <Switch>
                <Route path="/savedNews">
                <ul className="news-card-list">
                {cards.map((card) => <NewsCard card={card} />)}
            </ul>
                </Route>
                <Route path="/">
                    <h2 className="news-card-list__title">Результаты поиска</h2>
                    <ul className="news-card-list">
                {cards.slice(0, count).map((card) => <NewsCard card={card} />)}
            </ul>
            <button className="news-card-list__button" onClick={handleCountCards}>Показать ещё</button>
                </Route>
            </Switch>
            </div>
    );
}
export default NewsCardList;