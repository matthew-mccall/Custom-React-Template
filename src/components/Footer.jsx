import React from 'react'
import { ThemeContext } from '../AppDelegate'
import { useContext } from 'react';

export default function Footer(props) {

    const theme = useContext(ThemeContext)

    const styles = {
        background: theme.style.palette.neutralLight,
        color: theme.style.palette.neutralDark
    };

    return (
        <footer>
            <div style={styles}>
                <div className="py-5">
                    <div className="container">
                        <div className="text-center">
                            <p>This website is <a href="https://www.redhat.com/en/topics/open-source/what-is-open-source" className="text-reset">open-source</a> software. Source code available on <a href="https://github.com/mxtt-mmxix/mxtt-mmxix.github.io" className="text-reset">GitHub</a>.</p>
                            <p>Copyright &copy; {new Date().getFullYear()} {'{ Your Name }'}. Licensed under the BSD 2-Clause License.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}