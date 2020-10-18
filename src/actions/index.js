// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const UN_FAVOURITES = 'UN_FAVOURITES';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const ADD_SEARCH_RESULTS = 'ADD_SEARCH_RESULTS';
export const ADD_TO_MOVIE_LIST = 'ADD_TO_MOVIE_LIST';

// action creators
export function addMovies(movies){
    return{
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourites(movie){
    return{
        type: ADD_FAVOURITES,
        movie,
    }
}

export function unFavourite(movie){
    return{
        type: UN_FAVOURITES,
        movie,
    }
}

export function setShowFavourites(value){
    return{
        type: SHOW_FAVOURITES,
        value,
    }
}

export function addToMovieList(movie){
    return{
        type: ADD_TO_MOVIE_LIST,
        movie
    }
}

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=62b8c46a&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then( response => response.json())
        .then( movie => {
            console.log('movie: ',movie);

            // dispatch an action (function) -> will be managed by thunk
            dispatch(addSearchResults(movie));
        })
    }
}

export function addSearchResults(movie) {
    return {
        type: ADD_SEARCH_RESULTS,
        movie
    }
}