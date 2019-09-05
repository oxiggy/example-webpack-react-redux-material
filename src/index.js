import React from 'react'
import ReactDOM from 'react-dom'
import './index.styl'

import { createMuiTheme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/grey'

const theme= createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: grey,
    },
})

import ThemeProvider from '@material-ui/styles/ThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"
import IndexPage from './pages/IndexPage'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router basename="/">
            <Switch>
                <Route path="/" exact component={IndexPage} />
            </Switch>
        </Router>
    </ThemeProvider>,
    document.getElementById('app')
)
