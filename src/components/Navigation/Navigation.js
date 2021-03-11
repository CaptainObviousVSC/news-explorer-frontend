import React from 'react';
import './Navigation.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
function Navigation({onLoginPopup, onAuthorizePopup}) {
    return (
        <nav className="navigation">
            <Header 
            onLoginPopup={onLoginPopup}
            onAuthorizePopup={onAuthorizePopup}
            />
                <SearchForm />
        </nav>
    );
}
export default Navigation;