import { useState } from 'react'
import { Cards } from '../components/Cards/Cards'
import './App.css'

const cardImages = [
    { src: '/src/assets/images/helmet-1.png' },
    { src: '/src/assets/images/potion-1.png' },
    { src: '/src/assets/images/ring-1.png' },
    { src: '/src/assets/images/scroll-1.png' },
    { src: '/src/assets/images/shield-1.png' },
    { src: '/src/assets/images/sword-1.png' },
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
            console.log(choiceTwo)
        } else {
            setChoiceOne(card)
            console.log(choiceOne)
        }
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
