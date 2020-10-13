import { ADD_MOVIES, ADD_FAVOURITES, UN_FAVOURITES } from '../actions';


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

        case ADD_FAVOURITES:
            return {
                ...state,   
                favourites: [...state.favourites, action.movie]
            }

        case UN_FAVOURITES:
            const favourites = state.favourites.filter((item) => item !== action.movie);
            delete state.favourites[action.movie];
            return {
                ...state,
                favourites
            }
    

        default:
            return state;
    }
}