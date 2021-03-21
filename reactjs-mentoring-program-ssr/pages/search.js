import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import SearchOptions from '../components/search/SearchOptions.js';
import MovieList from '../components/movie/MovieList.js';
import NoMovieFound from '../components/movie/NoMovieFound.js';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { actionGetSearchedMoviesAsync } from '../redux/actions.js';

const Movies = (props) => {

  const {asPath, query} = useRouter();

  const { searchValue } = '';
  useEffect(() => {
    props.getMovies(searchValue, props.sortValue, props.filterValue);
  }, [props.dispatch]);

  return(
    <>
    <Header />
    <section className='movies'>
      <div className='wrapper'>
        <SearchOptions/>

          {asPath.match(/search.*/)
          ?
          <>
            <div className='founded-movies'><span>{props.movies.totalAmount}</span> movies found</div>
            <MovieList/>
          </>
          :
            <NoMovieFound />
          }

      </div>
    </section>
    <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
      movies: state.movies,
      filterValue: state.filterValue,
      sortValue: state.sortValue
  };
};

const mapDispatchToProps = (dispatch) => ({
  getMovies: (searchValue, sortValue, filterValue) => dispatch(actionGetSearchedMoviesAsync(searchValue, sortValue, filterValue))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Movies);