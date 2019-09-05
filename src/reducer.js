import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from './history'

import { NAME } from './constants'
import appReducer from './reducers/app'

const reducers= {
    router: connectRouter(history),
    [NAME]: appReducer,
}

export default combineReducers(reducers)
