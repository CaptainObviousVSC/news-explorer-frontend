import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import './App.css';
import Navigation from '../Navigation/Navigation'
import About from '../About/About'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import newsApi from '../../utils/NewsApi'
import api from '../../utils/MainApi'
import Footer from '../Footer/Footer'
import LoginPopup from '../LogInPopup/LogInPopup'
import AuthorizePopup from '../AuthorizePopup/AuthorizePopup'
import ConfirmAuthorizePopup from '../ConfirmAuthorizePopup/ConfirmAuthorizePopup'
import NewsCardList from '../NewsCardList/NewsCardList'
import NotFoundCard from '../NotFoundCards/NotFoundCards'
import SavedNewsHeaderPopup from '../SavedNewsHeaderPopup/SavedNewsHeaderPopup'
import SavedNewsNavigation from '../SavedNewsNavigation/SavedNewsNavigation'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import auth from '../../utils/auth'
import Preloader from '../Preloader/Preloader'
import ProtectedRoute from '../../utils/ProtectedRoute'
// import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

function App() {
    const history = useHistory()

    const [loginPopupOpen, setLoginPopupOpen] = React.useState(false)
    const [authorizePopupOpen, setAuthorizeOpen] = React.useState(false)
    const [headerPopupOpen, setHeaderOpen] = React.useState(false)
    const [confirmAuthorizePopupOpen, setConfirmAuthorizePopupOpen] = React.useState(false)
    const [cards, setCards] = React.useState(null)
    const [userCards, setUserCards] = React.useState([])
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [status, setStatus] = React.useState({})
    const [name, setName] = React.useState('')
    const [currentUser, setCurrentUser] = React.useState({});
    const input = React.useRef('')
    function onLogin(email, password) {
        auth.getLogin(email, password)
          .then((data) => {
            localStorage.setItem('jwt', data.token)
            setIsLoggedIn(true)
            closePopups()
          }).catch(err => {
            console.log(err.status) 
            if(err.status === 400) {
              setIsLoggedIn(false)
             return console.log('не передано одно из полей')
          }
            else if(err.status === 401) {
              setIsLoggedIn(false)
           return console.log('пользователь с email не найден')
          }
          return console.log('error 500')
        })
      }
      function handleTokenCheck() {
        const jwt = localStorage.getItem('jwt')
        if (jwt) {
          auth.checkToken(jwt).then((data) => {
            if(data) {
              console.log(data)
                setName(data.name)
              setIsLoggedIn(true)
              history.push('/')
              localStorage.getItem('articles')
            }
          }).catch(err => {
            console.log(err.status) 
            if(err.status === 401) {
             return console.log('Переданный токен некорректен ')
          }
            else if(!jwt) {
           return console.log('Токен не передан или передан не в том формате')
          }
          return console.log('error 500')
        })
        }
      }
      React.useEffect(() => {
        handleTokenCheck()
        localStorage.getItem('articles')
      }, [])
      React.useEffect(() => {
        if(isLoggedIn) {
            const jwt = localStorage.getItem('jwt')
            api.getNews(jwt).then((data) => {
              console.log(data)
              setUserCards(data)
            })
           }
        return null
        }, [isLoggedIn])
      function onRegister(email, password, name) {
        auth.getRegister(password, email, name).then(() => {
          setStatus('success')
          handleConfirmAuthorizePopupOpen()
        }).catch((err) => {
        if(err.status === 400) {
          setStatus('unsuccess')
          return console.log('не передано одно из полей')
        }
        return console.log('error 500')
        });
      }
      function logOut() {
        localStorage.removeItem('jwt')
        localStorage.removeItem('articles')
        setIsLoggedIn(false)
        console.log('ku')
      }
    function ForSearchForm() {
        setIsLoading(true) 
        console.log(input.current.value)
        newsApi.getArticles(input.current.value)
        .then(res => {
       const cards = localStorage.setItem('articles', res.articles)
          console.log( cards)
          const articles = res.articles.map((item) => {
            return {
              title: item.title,
              text: item.description,
              date: item.publishedAt,
              source: item.source.name,
              link: item.url,
              id: item.url,
              image: item.urlToImage
            }
          })
             setCards(articles)
            console.log(res)
        })
        .finally(_ => {
          // setCards(item)
            setIsLoading(false)
        })
    }
    function SaveNewsCard(item) {
      const jwt = localStorage.getItem('jwt')
      const keywords = input.current.value
      console.log(item)
        api.postNews(item, jwt, keywords).then((res) => {
          console.log(res)
          // const articles = res.map(article => article.url === item.id ? articles : item)
          console.log(res)
          setUserCards([res, ...userCards])
        })
    }
    function handleCardDelete(articleId) {
      if(isLoggedIn) {
        const jwt = localStorage.getItem('jwt')
         api.deleteCard(articleId, jwt).then(() => {
           console.log(userCards)
       const newCards = userCards.filter((item) => item._id !== articleId)
       console.log(newCards)
       setUserCards(newCards);
     }).catch(err => console.error(err))
   }
   }
        function defineContent() {
          localStorage.getItem('articles')
          if(cards === null) {
            return null
          }
        if (isLoading) {
            return <Preloader />
        }
        if(cards.length > 0) {
          // const jwt = localStorage.getItem('jwt')
          // api.getNews(jwt).then((data) => {
          //   console.log(data)
          //   setUserCards(data)
          // })
            return <NewsCardList cardsMap={cards} userCardsForFunction={userCards} loggedIn={isLoggedIn} onDeleteCard={handleCardDelete}  onSave={SaveNewsCard} onLoginPopup={handleLoginPopupOpen}/>
        }
        if(!cards) {

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
      <CurrentUserContext.Provider value={currentUser} >
    < div className = "app" >
          <Switch>
            <ProtectedRoute exact path="/savedNews"
              loggedIn={isLoggedIn}
              userCardsForFunction={userCards}
              isOpen={headerPopupOpen}
              onClose={closePopups}
              onDeleteCard={handleCardDelete}
              onHeaderPopup={handleHeaderPopupOpen}
              userCardsMap={userCards}
              onLogOut={logOut}
              onName={name}
              component={SavedNewsNavigation}>
                {/* <SavedNewsHeaderPopup
                isOpen={headerPopupOpen}
                onClose={closePopups}
                />
                    <SavedNewsHeader 
                    onHeaderPopup={handleHeaderPopupOpen}
                    />
                    <NewsCardList userCardsMap={userCards} /> */}
                </ProtectedRoute>
            <Route path="/">
           <Navigation 
           onLogOut={logOut}
           onName={name}
           isLoggedIn={isLoggedIn}
           OnClick={ForSearchForm}
           input={input}
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
         setOnLogin={onLogin}
         onAuthorizePopup={handleAuthorizePopupOpen}
         />
         <AuthorizePopup 
         setOnRegister={onRegister} 
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
        </CurrentUserContext.Provider>
    );
}
// c3e53be096a849ffa5e02e8fa9903159 = key

export default App;