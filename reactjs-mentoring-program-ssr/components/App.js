import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import Header from './Header.js';
import Movies from './movie/Movies.js';
import Footer from './Footer.js';
import MovieCard from './movie/MovieCard.js';
import PageNotFound from '../pages/404.js';

const App = (props) => {
    const {asPath} = useRouter();
    console.log(asPath)

  return (
    <>
        {
            asPath.match(/film\/.+/) || asPath.match(/search\/.*/) || asPath.match(/\//)
            ?
            <>
                {props.isMovieCardOpen
                ?
                    <MovieCard />
                :
                    <Header/>}
        
                    <Movies/>
                    <Footer />
                </>
            : 
                <PageNotFound />
        }
        
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        movieId: state.movieId,
        isMovieCardOpen: state.isMovieCardOpen
    };
  };
  
  export default connect(mapStateToProps)(App);