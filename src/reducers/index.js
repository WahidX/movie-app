import { ADD_MOVIES } from '../actions';


const initialState = {
    list: [],
    favourites: []
}



// return state
export default function movies(state=initialState, action){
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,   
                list: action.movies
            }
        default:
            return state;
    }
}