import { LOAD_DATA_REQUEST, 
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE } from "./receipe.actionTypes";


export const RECEIPE_KEY = 'receipeStore'

let initialState = {
    data:[],
    loading:false,
    errrorMessage:''
}

export const receipeReducer = (state = initialState, action) =>{
    let {type, payload} = action
    switch(type){
        case LOAD_DATA_REQUEST:
        return{
            ...state,
            loading:true
        }
        case LOAD_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                data:payload
            }
            case LOAD_DATA_FAILURE:
                return{
                    ...state,
                    errrorMessage:payload
                }
                default: return state 
    }

}











