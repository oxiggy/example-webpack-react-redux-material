import { NAV_OPEN } from '../actionTypes'
import { NAV_CLOSE } from '../actionTypes'

export const DEFAULT_STATE= {
    navOpen: false,
}

export default (state= DEFAULT_STATE, { type }) => {
    switch (type) {

        case NAV_OPEN: {
            return {
                navOpen: true,
            }
        }

        case NAV_CLOSE: {
            return {
                navOpen: false,
            }
        }

    }
    return state
}
