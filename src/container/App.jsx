import React, { useEffect, useState } from 'react'
import { Cards } from '../components/Cards/Cards'
import './App.css'

const cardImages = [
    { src: '/src/assets/images/helmet-1.png', matched: true },
    { src: '/src/assets/images/potion-1.png', matched: true },
    { src: '/src/assets/images/ring-1.png', matched: true },
    { src: '/src/assets/images/scroll-1.png', matched: true },
    { src: '/src/assets/images/shield-1.png', matched: true },
    { src: '/src/assets/images/sword-1.png', matched: true },
]

function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    // *Shuffle cards
    const shuffledCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }

    // *Handle a choice
    const handleChoice = (card) => {
        if (choiceOne) {
            setChoiceTwo(card)
        } else {
            setChoiceOne(card)
        }
    }

    // *Compare two selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.src == choiceTwo.src) {
                setCards((prevState) => {
                    return prevState.map((card) => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                console.log('nooo')
                resetTurn()
            }
        }
    }, [choiceOne, choiceTwo])

    // *Reset and increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns((prevState) => prevState + 1)
    }

    return (
        <>
            <div className="App">
                <h1>Memory game</h1>
                <button onClick={() => shuffledCards()}>New game</button>
                <Cards cards={cards} handleChoice={handleChoice} />
            </div>
        </>
    )
}

export default App
