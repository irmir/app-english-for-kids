import React, { useCallback } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getWordTraslation, markCorrectAnswer, markWrongAnswer } from '../../redux/actions'

const CardComponent = ({ image, translation, word, audio, wordTranslation, getTraslation, modeTrain, gameCard, markCorrect, markError }) => {
    debugger
    const clickTrain = useCallback((audio) => () => {
        debugger
        const audioObj = new Audio(`/${audio}`);
        audioObj.play()
    })

    const clickPlay = useCallback((word, gameCard) => () => {
        debugger
        if (word === gameCard) {
            markCorrect(word)
        } else  {
            markError(word)
        }
    })

    const clickRotate = useCallback((word) => () => {
        debugger
        getTraslation(word)
    })

    return (
            <div className="wrapper-card">
                <div onClick={ modeTrain ? clickTrain(audio): clickPlay(word, gameCard)} style={{ transform: wordTranslation === word ? "rotateY(180deg)" : "none" }}
                     className="card">
                    {
                        !modeTrain ?

                            <div className="img-wrapper-play">
                                <img src={`/${image}`}></img>
                            </div>
                            : <>
                                <div className="front">
                                    <div className="img-wrapper">
                                        <img src={`/${image}`}></img>
                                    </div>
                                    <p>{word}</p>
                                </div>
                                {
                                    wordTranslation === word ?
                                        <div className="back" onMouseOut={clickRotate(translation)}>
                                            <div className="img-wrapper">
                                                <img crs={image}></img>
                                            </div>
                                            <p>{translation}</p>
                                        </div>
                                        : null
                                }

                                <div onClick={clickRotate(word)} className="rotate">
                                    <img src='/img/rotate.png'></img>
                                </div>
                            </>
                    }

                </div>
            </div>
    )
}

export const Card = connect(
    (state) => ({
                wordTranslation: state.body.wordTranslation,
        modeTrain: state.body.modeTrain,
        isCardFlipped: state.body.isCardFlipped,
        gameCard: state.body.gameCard
    }),
    (dispatch) => bindActionCreators({
                getTraslation: getWordTraslation,
                markCorrect: markCorrectAnswer,
                markError: markWrongAnswer

    }, dispatch)
)(CardComponent)