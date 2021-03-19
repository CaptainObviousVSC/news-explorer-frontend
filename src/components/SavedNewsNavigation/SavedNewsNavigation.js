import React from 'react';
import { useHistory } from 'react-router-dom'
import SavedNewsHeaderPopup from '../SavedNewsHeaderPopup/SavedNewsHeaderPopup'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import NewsCardList from '../NewsCardList/NewsCardList'
function SavedNewsNavigation({ closePopups, headerPopupOpen, handleHeaderPopupOpen, userCardsForFunction, onLogOut, onName, onSave, onDeleteCard, userCardsMap, loggedIn }) {
    return (
        <nav>
          <SavedNewsHeaderPopup
                isOpen={headerPopupOpen}
                onClose={closePopups}
                />
                    <SavedNewsHeader 
                    userCardsMap={userCardsMap}
                    onName={onName}
                    onLogOut={onLogOut}
                    onHeaderPopup={handleHeaderPopupOpen}
                    />
                    <NewsCardList onSave={onSave} loggedIn={loggedIn} onDeleteCard={onDeleteCard} userCardsForFunction={userCardsForFunction} userCards={userCardsMap} />
        </nav>
    );
}
export default SavedNewsNavigation;