import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
// import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions';
import { storeContext } from '../index';


class App extends React.Component{

    componentDidMount(){
        // make api call here
        // dispatch action to load the data
        const { store } = this.props;
        store.subscribe(() => {
            console.log("Updated");
            this.forceUpdate();
        });
        // store.dispatch(addMovies(data));
        // console.log("STATE : ", store.getState(data));
    }

    isMovieFavourite = (movie) => {
        const { movies } = this.props.store.getState();
        const { favourites } = movies;
        const index = favourites.indexOf(movie);
        if(index===-1){
            return false;
        } else {
            return true;
        }
    }

    onChangeTab = (value) => {
        this.props.store.dispatch(setShowFavourites(value));
    }


    render(){
        const { movies, search } = this.props.store.getState();
        const { list, favourites, showFavourites } = movies;
        const displayList = showFavourites ? favourites : list ;
        console.log('Rendered State: ', this.props.store.getState());


        return (
            <div className="App">
                <Navbar search={search}/>
                <div className='main'>
                    <div className='tabs'>
                        <div className={`tab ${showFavourites ? '': 'active-tabs'}`} onClick={()=> this.onChangeTab(false)} >Movies</div>
                        <div className={`tab ${showFavourites ? 'active-tabs' : '' }`} onClick={()=> this.onChangeTab(true)} >Favourites</div>
                    </div>    
                
                    <div className="list">
                        {displayList.map((movie, index) => (
                            <MovieCard 
                                movie={movie} 
                                key={`movies-${index}`} 
                                isFavourite={this.isMovieFavourite(movie)}    
                            />
                        ))}
                    </div>
                    {displayList.length === 0 ? <div className="no-movies">No movies to display!</div> : null}
                </div>
            </div>
        );
    }
}

// export default App;

class AppWrapper extends React.Component{
    render(){
        return (
            <storeContext.Consumer>
                {(store) => <App store={store} />}
            </storeContext.Consumer>
        );
    }
}

export default AppWrapper;
