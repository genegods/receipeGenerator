import { LOAD_DATA_REQUEST, 
        LOAD_DATA_SUCCESS,
        LOAD_DATA_FAILURE } from "./receipe.actionTypes";
import Axios from 'axios'


export const loadData = () =>{
    return async (dispatch) =>{
        try{
            dispatch({type: LOAD_DATA_REQUEST})
            let dataURL = 'https://www.themealdb.com/api/json/v1/1/random.php'
            let response = await Axios.get(dataURL)
            dispatch({type: LOAD_DATA_SUCCESS, payload: response.data})
        }
        catch(error){
            dispatch({type:LOAD_DATA_FAILURE, payload: error})
        }
    }
}





