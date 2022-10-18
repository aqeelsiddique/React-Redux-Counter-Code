import currentUser from './currentuser'
import counter from './counter'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    currentUser,
    counter
})

export default rootReducer