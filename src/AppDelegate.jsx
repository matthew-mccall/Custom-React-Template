import React, { useState } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { getTheme, loadTheme } from "@fluentui/react";

export const ThemeContext = React.createContext(
    {
        mode: "light",
        style: getTheme(),
        updateTheme: () => { }
    }
);

export default function AppDelegate(props) {

    const [style, setStyle] = useState(getTheme());
    const [mode, setMode] = useState("light");

    const updateTheme = () => {
        if (mode === "light") {
            setMode("dark")
            setStyle(loadTheme({
                palette: {
                    themePrimary: '#0c8aeb',
                    themeLighterAlt: '#000609',
                    themeLighter: '#021626',
                    themeLight: '#042946',
                    themeTertiary: '#07538d',
                    themeSecondary: '#0a79ce',
                    themeDarkAlt: '#2295ed',
                    themeDark: '#43a5ef',
                    themeDarker: '#72bbf4',
                    neutralLighterAlt: '#1c1b1a',
                    neutralLighter: '#252423',
                    neutralLight: '#343331',
                    neutralQuaternaryAlt: '#3d3c3a',
                    neutralQuaternary: '#454341',
                    neutralTertiaryAlt: '#656260',
                    neutralTertiary: '#c8c8c8',
                    neutralSecondary: '#d0d0d0',
                    neutralPrimaryAlt: '#dadada',
                    neutralPrimary: '#ffffff',
                    neutralDark: '#f4f4f4',
                    black: '#f8f8f8',
                    white: '#121111',
                }
            }))
        } else {
            setMode("light")
            setStyle(loadTheme({
                palette: {
                    themePrimary: '#0078d4',
                    themeLighterAlt: '#eff6fc',
                    themeLighter: '#deecf9',
                    themeLight: '#c7e0f4',
                    themeTertiary: '#71afe5',
                    themeSecondary: '#2b88d8',
                    themeDarkAlt: '#106ebe',
                    themeDark: '#005a9e',
                    themeDarker: '#004578',
                    neutralLighterAlt: '#faf9f8',
                    neutralLighter: '#f3f2f1',
                    neutralLight: '#edebe9',
                    neutralQuaternaryAlt: '#e1dfdd',
                    neutralQuaternary: '#d0d0d0',
                    neutralTertiaryAlt: '#c8c6c4',
                    neutralTertiary: '#a19f9d',
                    neutralSecondary: '#605e5c',
                    neutralPrimaryAlt: '#3b3a39',
                    neutralPrimary: '#323130',
                    neutralDark: '#201f1e',
                    black: '#000000',
                    white: '#ffffff',
                }
            }))

        }
    }

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{ mode, style, updateTheme }}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </ThemeContext.Provider>
        </BrowserRouter>
    );
}