import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import './index.styl'

import store from './store'
import history from './history'

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
import { Switch, Route, Link } from 'react-router-dom'
import IndexPage from './pages/IndexPage'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Switch>
                    <Route path="/" exact component={IndexPage} />
                </Switch>
            </ThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)
