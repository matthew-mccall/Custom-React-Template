import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../AppDelegate'
import { useContext } from 'react'
import { Toggle } from '@fluentui/react'

export default function NavBar(props) {

    const theme = useContext(ThemeContext)

    const styles = {
        background: theme.style.palette.white,
    }

    return (
        <nav style={styles} className={`navbar navbar-expand-lg fixed-top ${theme.mode === "light" ? "navbar-light" : "navbar-dark"} `}>
            <div className="container">
                <NavLink className="navbar-brand" to="/">Website</NavLink>
                <Toggle styles={theme.style} label="Theme" inlineLabel onText="Dark" offText="Light" onChange={theme.updateTheme} />
            </div>
        </nav>
    )
}