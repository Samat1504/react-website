import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1 className='cards-title'>Объекты</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <h2 className='cards-subtitle'>СТРОЯЩИЕСЯ</h2>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img-12.jpg'
                        text='Lorem ipsum dolor.'
                        subtext='Адрес: Lorem ipsum'
                        label='VIP'
                        path='/objects'
                        />
                        <CardItem
                        src='images/img-1.jpg'
                        text='Lorem ipsum dolor.'
                        subtext='Адрес: Lorem ipsum '
                        label='GOLD'
                        path='/objects'
                        />
                        <CardItem
                        src='images/img-8.jpg'
                        text='Lorem ipsum dolor.'
                        subtext='Адрес: Lorem ipsum'
                        label='Platinum'
                        path='/objects'
                        />
                        <CardItem
                        src='images/img-7.jpg'
                        text='Lorem ipsum dolor.'
                        subtext='Адрес: Lorem ipsum'
                        label='Premium VIP'
                        path='/objects'
                        />
                    </ul>
                    <h2 className='cards-subtitle'>ЗАВЕРШЕННЫЕ</h2>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img-4.jpg'
                        text='Lorem ipsum dolor.'
                        subtext='Адрес: Lorem ipsum'
                        label='Premium'
                        path='/objects'
                        />
                        <CardItem
                        src='images/img-3.jpg'
                        text='Lorem ipsum dolor.'
                        subtext='Адрес: Lorem ipsum'
                        label='ADD'
                        path='/objects'
                        />
                        <CardItem
                        src='images/img-5.jpg'
                        text='Lorem ipsum dolor.'
                        subtext='Адрес: Lorem ipsum'
                        label='Diamon'
                        path='/objects'
                        />
                        <CardItem
                        src='images/img-6.jpg'
                        text='Lorem ipsum dolor.'
                        subtext='Адрес: Lorem ipsum'
                        label='Titan'
                        path='/objects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
