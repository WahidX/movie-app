// {
//     type: 'ADD_MOVIES',
//     movies: ['m1', 'm2', 'm3']
// }

// {
//     type: 'DECREMENT_COUNT'
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const UN_FAVOURITES = 'UN_FAVOURITES';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';

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