import React from 'react'

import { CategoryCard } from './CategoryCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSoundWord } from '../../redux/actions'

const CategoryCardsComponent = ({ categoryCards }) => {

    return (
        <div className="container main-page">
            <div className="indent"></div>
            {
                categoryCards ?
                    categoryCards.map((elem) => (
                        <CategoryCard name={elem.name}
                            image={elem.image}
                            id={elem.id} />))
                    : null
            }
        </div>
    )
}

export const CategoryCards = connect(
    (state) => ({
        categoryCards: state.body.categoryCards,
        cards: state.body.cards,
    }),
    (dispatch) => bindActionCreators({
        trainWord: getSoundWord
    }, dispatch)
)(CategoryCardsComponent)