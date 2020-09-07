import React, { useCallback } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getWordTraslation } from '../../redux/actions'

const CardComponent = ({ image, translation, word, wordTranslation, getTraslation, 
    modeTrain, correctAnswer, onclick }) => {

    const clickRotate = useCallback((word) => () => {
        getTraslation(word)
    })

    return (
        <div className="wrapper-card ">
            <div onClick={onclick} style={{
                transform: wordTranslation === word ? "rotateY(180deg)" : "none",
                transition: ".4s",
                opacity: correctAnswer.includes(word) && !modeTrain ? 0.5 : 1
            }
            }
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
        correctAnswer: state.body.correctAnswer,
        answers: state.body.answers
    }),
    (dispatch) => bindActionCreators({
        getTraslation: getWordTraslation,
    }, dispatch)
)(CardComponent)