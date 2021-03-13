import React from 'react';
import './Navigation.css';
import Header from '../Header/Header';
import HeaderPopup from '../HeaderPopup/HeaderPopup'
import SearchForm from '../SearchForm/SearchForm';
function Navigation({ onLoginPopup, onAuthorizePopup, onHeaderPopup, isOpen, onClose }) {
    return (
        <nav className="navigation">
            <HeaderPopup
            onClose={onClose}
                isOpen={isOpen}
                onLoginPopup={onLoginPopup}
            />
            <Header
                onHeaderPopup={onHeaderPopup}
                onLoginPopup={onLoginPopup}
                onAuthorizePopup={onAuthorizePopup}
            />
            <SearchForm />
        </nav>
    );
}
export default Navigation;