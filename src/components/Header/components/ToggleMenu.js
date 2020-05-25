import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showMenu } from '../../../redux/actions'

const ToggleMenuComponents = ({getMenu, isMenuOpen}) => {

    return (
        <button onClick={getMenu} className={isMenuOpen ? "hamburger-btn menu-open":"hamburger-btn" }>
            <span></span> 
        </button>
    )
} 

export const ToggleMenu = connect(
    (state) => ({
        isMenuOpen:state.body.isMenuOpen
    }),
    (dispatch) => bindActionCreators({
        getMenu: showMenu
    }, dispatch)
)(ToggleMenuComponents)
