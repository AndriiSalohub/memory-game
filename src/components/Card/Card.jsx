import React from 'react'
import './Card.css'

export const Card = ({ card }) => {
    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="card front" />
                <img
                    className="back"
                    src="/src/assets/images/cover.png"
                    alt="card back"
                />
            </div>
        </div>
    )
}
