import React from 'react';
import './SearchForm.css'
function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__field">
            <h1 className="search-form__title">Что творится в мире?</h1>
            <p className="search-form__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            <div className="search-form__keywords-box">
            <input className="search-form__keywords" type="text" name="keywords" placeholder="Введите тему новости" 
            required minLength="2" maxLength="30"></input>
            <button className="search-form__button">Искать</button>
            </div>
            </form>
        </section>
    );
}
export default SearchForm;