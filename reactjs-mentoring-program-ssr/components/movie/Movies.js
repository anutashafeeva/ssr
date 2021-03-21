import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import SearchOptions from '../search/SearchOptions.js';
import MovieList from './MovieList.js';
import NoMovieFound from './NoMovieFound.js';

import { actionGetSearchedMoviesAsync } from '../../redux/actions.js';

const Movies = (props) => {

  const {asPath, query} = useRouter();

  const { searchValue } = '';
  useEffect(() => {
    props.getMovies(searchValue, props.sortValue, props.filterValue);
  }, [props.dispatch]);

  return(
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