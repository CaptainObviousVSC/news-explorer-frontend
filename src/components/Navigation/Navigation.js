import React from 'react';
import './Navigation.css';
import Header from '../Header/Header';
import HeaderPopup from '../HeaderPopup/HeaderPopup'
import SearchForm from '../SearchForm/SearchForm';
function Navigation({ onLoginPopup, onAuthorizePopup, onHeaderPopup, isOpen, onClose, input, OnClick, isLoggedIn, onName, onLogOut }) {
    return (
        <nav className="navigation">
            <HeaderPopup
            onClose={onClose}
                isOpen={isOpen}
                onLoginPopup={onLoginPopup}
            />
            <Header
            onLogOut={onLogOut}
            onName={onName}
            isLoggedIn={isLoggedIn}
                onHeaderPopup={onHeaderPopup}
                onLoginPopup={onLoginPopup}
                onAuthorizePopup={onAuthorizePopup}
            />
            <SearchForm 
            OnClick={OnClick}
            input={input}
            />
        </nav>
    );
}
export default Navigation;