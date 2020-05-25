import React, { useEffect } from 'react'

import { ToggleMenu, Switch, NavBar } from './components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getCategoryCards } from '../../redux/actions'

const HeaderComponent = ({ getCards }) => {

    useEffect(() => {
        getCards()
    }, [])

    return (
        <div className="container header">
            <ToggleMenu />
            <Switch />
            <NavBar />
        </div>
    )
}

export const Header = connect(
    null,
    (dispatch) => bindActionCreators({
        getCards: getCategoryCards
    }, dispatch)
)(HeaderComponent)
