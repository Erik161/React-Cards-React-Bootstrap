import React from 'react'
import PropTypes from 'prop-types'
import './Cards.css'

function Card({title, imgSource, text, url }) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
           <div className="overflow">
                <img src={imgSource} alt="" className="card-img-top"/>
           </div>
           <div className="card-body text-white">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {
                        text ? text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil minima, consectetur aperiam voluptatem voluptate nobis quis ipsum atque, similique ipsam incidunt neque, saepe inventore ut recusandae reiciendis delectus in eos!'
                    }
                   
                </p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">Go to this Website</a>
           </div>
        </div>
    )
}

Card.propTypes={
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imgSource:PropTypes.string,
    text: PropTypes.string
}

export default Card
