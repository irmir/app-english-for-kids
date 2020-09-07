import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Card } from '../CategoryCards/Card'
import { getCategoryCards, startTheGame, markCorrectAnswer, markWrongAnswer } from '../../redux/actions'


const CategoryPageComponent = ({ cards, modeTrain, startGame, correctAnswer, answers,
    markCorrect, markError, gameWord, getCards }) => {

    useEffect(() => {
        getCards()
    }, [])

    const clickStart = useCallback(() => () => {
        startGame()
    })

    const clickTrain = useCallback((audio) => () => {
        const audioObj = new Audio(`/${audio}`);
        audioObj.play()
    })

    const clickPlay = useCallback((word, gameWord) => () => {
        if (word === gameWord) {
            markCorrect(word)
            setTimeout(startGame, 1000)
        } else {
            markError(word)
            setTimeout(startGame, 1000)
        }
    })

    return (
        <div className="container main-page">
            <div className="rating">
                {
                    answers.map((elem) => (
                        <div className={elem.answer ? "star correct" : "star wrong"}></div>))
                }
            </div>
            {
                cards ?
                    cards.map((elem) => <Card word={elem.word} translation={elem.translation}
                        image={elem.image} audio={elem.audioSrc} onclick={modeTrain ? clickTrain(elem.audioSrc) :
                            correctAnswer.includes(elem.word) ? undefined :
                                clickPlay(elem.word, gameWord)} />)
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
        answers: state.body.answers,
        gameWord: state.body.gameWord,

    }),
    (dispatch) => bindActionCreators({
        startGame: startTheGame,
        markCorrect: markCorrectAnswer,
        markError: markWrongAnswer,
        getCards: getCategoryCards
    }, dispatch)
)(CategoryPageComponent)

