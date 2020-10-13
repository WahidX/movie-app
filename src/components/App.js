import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies } from '../actions';



class App extends React.Component{

    componentDidMount(){
        // make api call here
        // dispatch action to load the data
        const { store } = this.props;
        store.subscribe(() => {
            console.log("Updated");
            this.forceUpdate();
        });
        store.dispatch(addMovies(data));
        console.log("STATE : ", store.getState(data));
    }

    isMovieFavourite = (movie) => {
        const { favourites } = this.props.store.getState();
        const index = favourites.indexOf(movie);
        if(index===-1){
            return false;
        } else {
            return true;
        }
    }


    render(){

        const { list } = this.props.store.getState();
        console.log('Rendered State: ', this.props.store.getState());
        return (
            <div className="App">
                <Navbar />
                <div className='main'>
                    <div className='tabs'>
                        <div className='tab'>Movies</div>
                        <div className='tab'>Favourites</div>
                    </div>    
                
                    <div className="list">
                        {list.map((movie, index) => (
                            <MovieCard 
                                movie={movie} 
                                key={`movies-${index}`} 
                                dispatch={this.props.store.dispatch} 
                                isFavourite={this.isMovieFavourite(movie)}    
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}


export default App;