import { combineReducers } from 'redux'
import userReducer from './userReducer'
import contactReducer from './contactReducer'
import bitcoinReducer from './bitcoinReducer'


const combinedReducers = combineReducers({
    userReducer,
    contactReducer,
    bitcoinReducer

})

export default combinedReducers