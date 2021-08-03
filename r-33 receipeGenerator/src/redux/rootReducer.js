import { receipeReducer, RECEIPE_KEY } from "./receipeRedux/receipe.reducers";
import {combineReducers} from 'redux'


let rootReducer = combineReducers({
    [RECEIPE_KEY]: receipeReducer
})

export {rootReducer}