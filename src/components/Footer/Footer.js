import React from 'react';
import './Footer.css'
function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <div className="footer__content">
                <div className="footer__content-links">
                    <p className="footer__main">Главная</p>
                    <a className="footer__link">Яндекс.Практикум</a>
                </div>
                <div className="footer__content-buttons">
                <button className="footer__github-link"></button>
                <button className="footer__instagram-link"></button>
                </div>
            </div>
        </footer>
    );
}
export default Footer;