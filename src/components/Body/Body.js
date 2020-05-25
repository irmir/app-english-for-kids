import React, { useCallback, useEffect } from 'react'

// import card from '../../cards'
import { CategoryCard } from './CategoryCard'
import { Card } from './Card'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { NavLink } from 'react-router-dom'
import { getCategoryCards, getSoundWord } from '../../redux/actions'

// import cards from '../../cards'
// import { bodyReducer } from './reducer'

const BodyComponent = ({ categoryCards, showCard, getCards, cards, trainWord, audioSRC }) => {
    
    return (
        <div className="container main-page">
            {
                categoryCards ?
                    categoryCards.map((elem) => (
                            <CategoryCard name={elem.name}
                                image={elem.image}
                                id={elem.id} />))
                    : null
            }
            {/* {
                cards ? 
                cards.map((elem) => (
                    
                        <Card trainWord={trainWord} word={elem.word} translation={elem.translation} 
                              image={elem.image} audio={elem.audioSrc} />
                   
                ))
                : null
            } */}
            {/* <audio autoplay className="audio" src={`/${audioSRC}`}>звук</audio> */}
        </div>
    )
}

export const Body = connect(
    (state) => ({
        categoryCards: state.body.categoryCards,
        cards: state.body.cards,
        // audioSRC: state.body.audioSRC
    }),
    (dispatch) => bindActionCreators({
        trainWord: getSoundWord
    }, dispatch)
)(BodyComponent)