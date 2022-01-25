import React from 'react'
import './New.css'
import NewItem from './NewItem'

function New() {
    return (
        <div className='new'>
            <h1 className="new__title">Новости строительной компании KG STROY</h1>
            <div className='new__container'>
                <div className='new__wrapper'>
                    <ul className='new__items'>
                        <NewItem
                        src='images/img-13.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim quis molestias, nam voluptate reiciendis earum nostrum accusamus nesciunt facere architecto ipsam consequuntur, ullam officia voluptas totam repellat cum! Doloremque!'
                        />
                        <NewItem
                        src='images/img-14.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim quis molestias, nam voluptate reiciendis earum nostrum accusamus nesciunt facere architecto ipsam consequuntur, ullam officia voluptas totam repellat cum! Doloremque!'
                        />
                        <NewItem
                        src='images/img-15.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim quis molestias, nam voluptate reiciendis earum nostrum accusamus nesciunt facere architecto ipsam consequuntur, ullam officia voluptas totam repellat cum! Doloremque!'
                        />
                    </ul>
                    <ul className='new__items'>
                        <NewItem
                        src='images/img-16.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim quis molestias, nam voluptate reiciendis earum nostrum accusamus nesciunt facere architecto ipsam consequuntur, ullam officia voluptas totam repellat cum! Doloremque!'
                        />
                        <NewItem
                        src='images/img-17.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim quis molestias, nam voluptate reiciendis earum nostrum accusamus nesciunt facere architecto ipsam consequuntur, ullam officia voluptas totam repellat cum! Doloremque!'
                        />
                        <NewItem
                        src='images/img-18.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim quis molestias, nam voluptate reiciendis earum nostrum accusamus nesciunt facere architecto ipsam consequuntur, ullam officia voluptas totam repellat cum! Doloremque!'
                        />
                    </ul>
                    <ul className='new__items'>
                        <NewItem
                        src='images/img-19.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim quis molestias, nam voluptate reiciendis earum nostrum accusamus nesciunt facere architecto ipsam consequuntur, ullam officia voluptas totam repellat cum! Doloremque!'
                        />
                        <NewItem
                        src='images/img-20.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim quis molestias, nam voluptate reiciendis earum nostrum accusamus nesciunt facere architecto ipsam consequuntur, ullam officia voluptas totam repellat cum! Doloremque!'
                        />
                        <NewItem
                        src='images/img-21.jpg'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim quis molestias, nam voluptate reiciendis earum nostrum accusamus nesciunt facere architecto ipsam consequuntur, ullam officia voluptas totam repellat cum! Doloremque!'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default New
