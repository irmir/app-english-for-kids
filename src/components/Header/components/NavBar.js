import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { showCategoryCards, getCategoryCards } from '../../../redux/actions'

const NavBarComponents = ({ activeCategory, isMenuOpen, showCard, getCards, categoryCards, modeTrain }) => {
    debugger
    useEffect(() => {
        debugger
        getCards()
    }, [])

    const onclick = useCallback((id) => () => {
        debugger
        showCard(id)
    })

    return (
        <nav className={isMenuOpen && modeTrain ? "menu open" :
            isMenuOpen && !modeTrain ? "menu open play" :
            !modeTrain ? "menu play": "menu"}>
            <ul>
                <li><NavLink to="/">Main Page</NavLink></li>
                {categoryCards ?
                    categoryCards.map((elem) => (
                        <li onClick={onclick(elem.id)} className={activeCategory === elem.id ? "active-menu" : null} ><NavLink to="/cards">{elem.name}</NavLink></li>
                    ))
                    : null
                }
            </ul>
        </nav>
    )
}

export const NavBar = connect(
    (state) => ({
        isMenuOpen: state.body.isMenuOpen,
        cards: state.body.cards,
        categoryCards: state.body.categoryCards,
        activeCategory: state.body.activeCategory,
        modeTrain: state.body.modeTrain
    }),
    (dispatch) => bindActionCreators({
        showCard: showCategoryCards,
        getCards: getCategoryCards,
    }, dispatch)
)(NavBarComponents)