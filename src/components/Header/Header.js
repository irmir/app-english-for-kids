import React from 'react'

import { ToggleMenu, Switch, NavBar } from './components'

export const Header = () => {

    return (
        <div className="container header">
            <ToggleMenu />
            <Switch />
            <NavBar />
        </div>
    )
}


