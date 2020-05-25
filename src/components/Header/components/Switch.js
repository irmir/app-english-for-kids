import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { switchAplicationMode } from '../../../redux/actions'

const SwitchComponent = ({ switchMode, modeTrain }) => {

    return (
        <div className="switch">
            <input onClick={switchMode}
                type="checkbox">
            </input>
            <span className={modeTrain ? "mode": "mode mode-play"}>{modeTrain ? "train" : "play"}</span>
        </div>
    )
}

export const Switch = connect(
    (state) => ({
        modeTrain: state.body.modeTrain
    }),
    (dispatch) => bindActionCreators({
        switchMode: switchAplicationMode
    }, dispatch)
)(SwitchComponent)