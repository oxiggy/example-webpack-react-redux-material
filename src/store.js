import { createStore, compose, applyMiddleware } from 'redux'
//import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import history from './history'
import reducer from './reducer'

const middleware= [
    routerMiddleware(history),
    thunk,
]

const store= createStore(
    reducer,
    {},
    compose(
        applyMiddleware(
            ...middleware
        )
    ),
)

export default store