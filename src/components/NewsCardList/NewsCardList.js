import React from 'react';
import NewsCard from '../NewsCard/NewsCard'
import SavedNewsCard from '../SavedNewsCard/SavedNewsCard'
import { Route, Switch} from 'react-router-dom'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import  './NewsCardList.css'
function NewsCardList({onSave, cardsMap, onDeleteCard, userCards, loggedIn, onLoginPopup}) {
    const currentUser = React.useContext(CurrentUserContext);
    console.log(userCards)
    console.log(cardsMap)
    const [count, setCount] = React.useState(3)
    function handleCountCards() {
        setCount(count + 3)
    }
    function handleSavedCards() {
        if(!cardsMap) {
          return  userCards.map((curd) => <NewsCard loggedIn={loggedIn} onLoginPopup={onLoginPopup} curd={curd} key={curd.id} onDeleteCard={onDeleteCard} currentUser={currentUser}/>)
        }
    }
    function handleMainCards() {
        if(!userCards) {
          return  cardsMap.slice(0, count).map((card) => <NewsCard loggedIn={loggedIn} onLoginPopup={onLoginPopup} card={card} key={card.url} onSave={onSave}/>)
        }
    }
            return (
        <div className="news-card-list-border">
            <Switch>
                <Route path="/savedNews">
                <ul className="news-card-list">
                {handleSavedCards()}
            </ul>
                </Route>
                <Route path="/">
                    <h2 className="news-card-list__title">Результаты поиска</h2>
                    <ul className="news-card-list">
                {handleMainCards()}
            </ul>
            <button className="news-card-list__button" onClick={handleCountCards}>Показать ещё</button>
                </Route>
            </Switch>
            </div>
    );
}
export default NewsCardList;