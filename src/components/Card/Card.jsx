import React from 'react'
import './Card.css'

export const Card = ({ card, handleChoice }) => {
    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="card front" />
                <img
                    onClick={() => handleClick()}
                    className="back"
                    src="/src/assets/images/cover.png"
                    alt="card back"
                />
            </div>
        </div>
    )
}
