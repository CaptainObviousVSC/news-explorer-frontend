import React from 'react';
import './About.css'
import avatar from '../../images/avatar.png'
function About() {
    return (
        <section className="about">
            <img className="about__avatar" src={avatar} alt="Аватар" />
            <div className="about__text-box">
                <h2 className="about__title">Об авторе</h2>
                <p className="about__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.<br />
                    <br />
Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
            </div>
        </section>
    );
}
export default About;