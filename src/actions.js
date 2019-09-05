import { NAV_OPEN, NAV_CLOSE } from './actionTypes'

export const openNav= () => {
    return {
        type: NAV_OPEN
    }
}

export const closeNav= () => {
    return {
        type: NAV_CLOSE
    }
}

export const toggleNav= () => {
    return (dispatch, getState) => {
        const { app:{ navOpen } }= getState()
        if (navOpen) {
            dispatch(closeNav())
        } else {
            dispatch(openNav())
        }
    }
}

