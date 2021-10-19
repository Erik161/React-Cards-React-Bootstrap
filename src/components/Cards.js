import React from 'react'
import Card from './Card'
import bg8 from '../assets/bg-8.jpg'
import bg9 from '../assets/bg-9.jpg'
import bg10 from '../assets/bg-10.jpg'

const cards = [
    {
        id: 1,
        title:'Card 1',
        image: bg8,
        url:'https://github.com/'
    },

    {
        id: 2,
        title: 'Card 2',
        image: bg9,
        url:'https://bitbucket.org/'
    },

    {
        id:3,
        title: 'Card 3',
        image:bg10,
        url:'https://about.gitlab.com/'
    }
]


function Cards() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                
               {
                    cards.map((card) =>(
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imgSource={card.image} url={card.url} />
                        </div>
                    ))
               }

            </div>        
            
        </div>
    )
}

export default Cards
