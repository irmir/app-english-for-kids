import React, {useCallback} from 'react'

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showCategoryCards } from '../../redux/actions'
 
const CategoryCardComponent = ({ name, image, showCards, dataId, id, modeTrain }) => {

    const onclick = useCallback((id) => () => {
        debugger
        showCards(id)
    })

    return (
        <NavLink to="/cards" className={modeTrain ? "category-card" :"category-card play" } onClick={onclick(id)} id={id}>
            <img src={image}></img>
            {name}
        </NavLink>
    )
}

export const CategoryCard = connect(
    (state) => ({
        modeTrain:state.body.modeTrain
    }),
    (dispatch) => bindActionCreators({
        showCards: showCategoryCards
    }, dispatch)
)(CategoryCardComponent)