import React from 'react'
import { Card } from '../Card/Card'
import './Cards.css'

export const Cards = ({
    cards,
    handleChoice,
    choiceOne,
    choiceTwo,
    disabled,
}) => {
    return (
        <div className="card-grid">
            {cards.map((card) => (
                <Card
                    card={card}
                    key={card.id}
                    handleChoice={handleChoice}
                    flipped={
                        card === choiceOne || card === choiceTwo || card.matched
                    }
                    disabled={disabled}
                />
            ))}
        </div>
    )
}
