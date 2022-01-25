import React from 'react'
import { Link } from 'react-router-dom';

function NewItem(props) {
    return (
        <>
            <li className='new__item'>
                <Link className='new__item__link' to={props.path}>
                <figure className='new__item__pic-wrap' data-category={props.label}>
                    <img
                    className='new__item__img'
                    alt='Building Image'
                    src={props.src}
                    />
                </figure>
                <div className='new__item__info'>
                    <h5 className='new__item__text'>{props.text}</h5>
                </div>
                </Link>
            </li>
        </>
    )
}

export default NewItem
