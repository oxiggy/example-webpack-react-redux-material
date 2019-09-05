import { createBrowserHistory, createHashHistory  } from 'history'

//export default createBrowserHistory()

export default createHashHistory({
    hashType: 'slash',
})
