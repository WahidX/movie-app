import React from 'react';
import { handleMovieSearch, addToMovieList } from '../actions';
import { storeContext } from '../index';

class Navbar extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            searchText: ''
        }
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch(addToMovieList(movie));
        // this.setState({
        //     showSearchResults: false
        // })
    }

    handleSearch = () => {
        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleChange = (e) =>{
        this.setState({
            searchText: e.target.value
        });
    };

    render(){
        const { result, showSearchResults } = this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={ this.handleChange } />
                    <button id="search-btn" onClick={ this.handleSearch } >Search</button>

                    { showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={ result.Poster } alt="poster" />
                                <div className="movie-info">
                                    <span> { result.Title } </span>
                                    <button onClick={() => this.handleAddToMovies(result) }>
                                        Add to Movies
                                    </button>
                                 </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        );
    }
}


class NavbarWrapper extends React.Component{
    render(){
        return(
            <storeContext.Consumer>
                { (store) => <Navbar search={this.props.search} dispatch={store.dispatch}/> }
            </storeContext.Consumer>
        )
    }
}


export default NavbarWrapper;