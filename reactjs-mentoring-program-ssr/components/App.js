import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import Header from './Header.js';
import SearchOptions from './search/SearchOptions.js';
import NoMovieFound from './movie/NoMovieFound';
import Footer from './Footer.js';
import MovieCard from './movie/MovieCard.js';
import PageNotFound from '../pages/404.js';

const App = (props) => {
    const {asPath} = useRouter();

  return (
    <>
        {
            asPath.match(/\//)
            ?
            <>
                <Header/>        
                <section className='movies'>
                <div className='wrapper'>
                    <SearchOptions/>
                    <NoMovieFound />
                </div>
                </section>
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