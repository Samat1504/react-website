import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

function Footer() {
    return (
        <div className='footer-container'>
            <ScrollToTop smooth top="79"/>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cum.
                </p>
                <p className='footer-subscription-text'>
                Lorem ipsum dolor sit amet.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Submit</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>О нас</h2>
                        <Link to='/about'>Новости</Link>
                        <Link to='/about'>Забота клиента</Link>
                        <Link to='/about'>Управляющая компания</Link>
                        <Link to='/about'>Способ оплаты</Link>
                        <Link to='/about'>Инвестора</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Контакты</h2>
                        <Link to='/contacts'>Головной офис:</Link>
                        <Link to='/contacts'>г.Бишкек, ул. Тоголок Молдо, 54а</Link>
                        <Link to='/contacts'>бизнес-центр, 3 этаж</Link>
                        <Link to='/contacts'>info@kgstroy.kg</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Объекты</h2>
                        <Link to='/objects'>Немецкий квартал</Link>
                        <Link to='/objects'>Американский квартал</Link>
                        <Link to='/objects'>Italiano</Link>
                        <Link to='/objects'>Menshion</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Наши соц.сети</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                        KG STROY
                        <i class="fas fa-hard-hat"></i>
                        </Link>
                    </div>
                    <small class='website-rights'>KG STROY © 2021</small>
                    <div class='social-icons'>
                        <Link
                        class='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                        <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                        class='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <i class='fab fa-instagram' />
                        </Link>
                        <Link
                        class='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <i class='fab fa-youtube' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'    
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i class='fab fa-twitter' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
