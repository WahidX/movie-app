import { combineReducers } from 'redux';
import { ADD_MOVIES, ADD_FAVOURITES, UN_FAVOURITES, SHOW_FAVOURITES, ADD_SEARCH_RESULTS, ADD_TO_MOVIE_LIST } from '../actions';


// Movie reducer
const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
};

// return state
export function movies(state=initialMovieState, action){
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
            return {
                ...state,
                favourites
            }

        case SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.value
            }
        case ADD_TO_MOVIE_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
            }

        default:
            return state;
    }
}

// Search reducer
const initialSearchState = {
    result: {},
    showSearchResults: false,
};

export function search(state=initialSearchState, action){
    switch(action.type){
        case ADD_SEARCH_RESULTS:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }
        case ADD_TO_MOVIE_LIST:
            return {
                ...state,
                showSearchResults: false
            }

        default:
            return state;
    }
}



// Root reducer
// const initialRootState = {
//     movies: initialMovieState,
//     search: initialSearchState
// }

// export default function rootReducer(state=initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    search
});