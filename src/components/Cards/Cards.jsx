import React from 'react'
import { Card } from '../Card/Card'
import './Cards.css'

export const Cards = ({ cards }) => {
    return (
        <div className="card-grid">
            {cards.map((card) => (
                <Card card={card} key={card.id} />
            ))}
        </div>
    )
}
