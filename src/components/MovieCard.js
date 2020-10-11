import React from 'react';
// import './App.css';

class MovieCard extends React.Component{

    render(){
        const { movie } = this.props;
        return (
            <div className='movie-card'>
                <div className='left'>
                    <img className='movie-poster' alt='poster' src={movie.Poster} />
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        <button className='favourite-btn'>Favourite</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default MovieCard;