import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="contact__container">
                <h2 className="contact__title">Офисы продаж строительной компании KG STROY</h2>
                <div className="contact__block">
                    <div className="contact__address">
                        <h4 className="contact__subtitle">г. Бишкек <br/>Офис продаж:</h4>
                        <p className="contact__text">г.Бишкек, ул. Тоголок Молдо, 54а</p>
                        <p className="contact__text">Режим работы:</p>
                        <p className="contact__text">Пн. – пт. с 9.00 до 20.00</p>
                        <p className="contact__text">Сб. с 10.00 до 20.00</p>
                        <p className="contact__text">Вс. с 10.00 до 20.00</p>
                    </div>
                    <div className="contact__phones">
                        <h4 className="contact__subtitle">Отдел продаж:</h4>
                        <p className="contact__text">0(123)456 - 789</p>
                        <p className="contact__text">0(123)456 - 789</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
