import React, {useCallback} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Card } from '../Body/Card'

import { getCategoryCards, startTheGame } from '../../redux/actions'


const CategoryPageComponent = ({ cards, modeTrain, startGame, correctAnswer, wrongAnswer, answers }) => {
    
    const clickStart = useCallback(() => () => {

        startGame()
    })

    return (
        <div className="container main-page">
            {
                !modeTrain && 
                <div className="rating">
                    {
                        answers.map((elem) => (
                            <div className={elem.answer ? "star correct": "star wrong"}></div>))
                    }
                </div>
            }
            {
                cards ?
                    cards.map((elem) => <Card word={elem.word} translation={elem.translation}
                        image={elem.image} audio={elem.audioSrc} />)
                : null   
            }
            {
                !modeTrain && <div className="btns"><button onClick={clickStart()} className="btn">Start Game</button></div>
            }
        </div>
    )
}

export const CategoryPage = connect(
    (state) => ({
        cards: state.body.cards,
        modeTrain: state.body.modeTrain,
        correctAnswer: state.body.correctAnswer,
        wrongAnswer: state.body.wrongAnswer,
        answers: state.body.answers
    }),
    (dispatch) => bindActionCreators({
       startGame: startTheGame,
    }, dispatch)
)(CategoryPageComponent)

