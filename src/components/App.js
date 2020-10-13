import React from 'react';
import './App.css';
// import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';

class App extends React.Component{

    componentDidMount(){
        // make api call here
        // dispatch action to load the data

        const { store } = this.props;

        store.subscribe(() => {
            console.log("Updated");
            this.forceUpdate();
        });


        store.dispatch({
            type: 'ADD_MOVIES',
            movies: data
        });

        console.log("STATE : ", store.getState());
    }


    render(){
        const movies = this.store.getState(); 
        return (
            <div className="App">
                <Navbar />
                <div className='main'>
                    <div className='tabs'>
                        <div className='tab'>Movies</div>
                        <div className='tab'>Favourites</div>
                    </div>    
                
                    <div className='list'>
                        {movies.map((movie, index) => (
                            <MovieCard movie={movie} key={`movies-${index}`} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;