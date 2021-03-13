import React from 'react';
import { Route, Switch, useHistory, withRouter } from 'react-router-dom'
import './App.css';
import Navigation from '../Navigation/Navigation'
import About from '../About/About'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import Prelaoder from '../Preloader/Preloader'
import Footer from '../Footer/Footer'
import LoginPopup from '../LogInPopup/LogInPopup'
import AuthorizePopup from '../AuthorizePopup/AuthorizePopup'
import ConfirmAuthorizePopup from '../ConfirmAuthorizePopup/ConfirmAuthorizePopup'
import NewsCardList from '../NewsCardList/NewsCardList'
import NotFoundCard from '../NotFoundCards/NotFoundCards'
import SavedNewsHeaderPopup from '../SavedNewsHeaderPopup/SavedNewsHeaderPopup'
import data from '../../utils/data'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import Header from '../Header/Header';

function App() {
    const [loginPopupOpen, setLoginPopupOpen] = React.useState(false)
    const [authorizePopupOpen, setAuthorizeOpen] = React.useState(false)
    const [headerPopupOpen, setHeaderOpen] = React.useState(false)
    const [confirmAuthorizePopupOpen, setConfirmAuthorizePopupOpen] = React.useState(false)
    const [cards, setCards] = React.useState(data)
    //  const [cards, setCards] = React.useState([])
    // раскомментировать чтобы увидеть сообщение
    function defineContent() {
        if (cards === null) {
            return null
        }
        if(cards.length > 0) {
            return <NewsCardList cards={cards} />
        }
        if(cards.length === 0) {
            return <NotFoundCard />
        }
    }
    function handleHeaderPopupOpen () {
        setHeaderOpen(true)
    }
    function handleLoginPopupOpen() {
        document.addEventListener('keyup', closeByEsc)
        setLoginPopupOpen(true)
        setHeaderOpen(false)
        setConfirmAuthorizePopupOpen(false)
        setAuthorizeOpen(false)
    }
     function handleAuthorizePopupOpen() {
        document.addEventListener('keyup', closeByEsc)
        setLoginPopupOpen(false)
        setConfirmAuthorizePopupOpen(false)
        setAuthorizeOpen(true)
     }
    function handleConfirmAuthorizePopupOpen() {
        document.addEventListener('keyup', closeByEsc)
        setLoginPopupOpen(false)
        setAuthorizeOpen(false)
        setConfirmAuthorizePopupOpen(true)
    }
    function closeByEsc(evt) {
        if (evt.key === 'Escape') { 
            setLoginPopupOpen(false)
        setAuthorizeOpen(false)
        setConfirmAuthorizePopupOpen(false)
          } 
        }
    function closePopups() {
        document.removeEventListener('keyup', closeByEsc)
        setHeaderOpen(false)
        setLoginPopupOpen(false)
        setAuthorizeOpen(false)
        setConfirmAuthorizePopupOpen(false)
      }
    return ( 
    < div className = "app" >
          <Switch>
            <Route path="/savedNews">
                <SavedNewsHeaderPopup
                isOpen={headerPopupOpen}
                onClose={closePopups}
                />
                    <SavedNewsHeader 
                    onHeaderPopup={handleHeaderPopupOpen}
                    />
                    <NewsCardList cards={cards} />
                </Route>
            <Route path="/">
           <Navigation 
           isOpen={headerPopupOpen}
           onClose={closePopups}
           onHeaderPopup={handleHeaderPopupOpen}
                onLoginPopup={handleLoginPopupOpen}
                onAuthorizePopup={handleAuthorizePopupOpen}
           />
            {defineContent()}
                <About />
                </Route>
            </Switch> 
         <Footer />
         <LoginPopup 
         isOpen={loginPopupOpen}
         onClose={closePopups}
         onAuthorizePopup={handleAuthorizePopupOpen}
         />
         <AuthorizePopup 
         isOpen={authorizePopupOpen}
         onLoginPopup={handleLoginPopupOpen}
         onConfirmAuthorizePopup={handleConfirmAuthorizePopupOpen}
         onClose={closePopups}
         />
        <ConfirmAuthorizePopup
        isOpen={confirmAuthorizePopupOpen}
         onClose={closePopups}
         onLoginPopup={handleLoginPopupOpen}
        />
        </div>
    );
}

export default App;