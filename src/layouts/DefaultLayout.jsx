import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';
import { ThemeContext } from '../AppDelegate'
import { useContext } from 'react';

export default function DefaultLayout(props) {

    const theme = useContext(ThemeContext);

    const style = {
        background: theme.style.palette.white,
        color: theme.style.palette.black
    }

    return (
        <div className="vh-100 d-flex flex-column">
            <NavBar />
            <div style={style} className="flex-grow-1">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}