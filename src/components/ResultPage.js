import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { getErrorsValue } from '../redux/actions'

const ResultPageComponent = ({errors, getErrors}) => {

    useEffect(() => {
        getErrors()
        setTimeout(function() {
            window.location = '/cards'
        }, 3 * 1000)
        localStorage.removeItem('errors')
    }, [])

    return (
        <div className="result"> 
            <h1>{errors === null ? 0: errors} {errors === 1 ? "error": "errors" }</h1>
        </div>
    )
}

export const ResultPage = connect(
    (state) => ({
        errors: state.body.errors
    }),
    (dispatch) => bindActionCreators({
        getErrors: getErrorsValue,
    }, dispatch)
)(ResultPageComponent)