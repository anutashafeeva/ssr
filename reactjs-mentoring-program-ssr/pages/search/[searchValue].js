import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Movie from '../../components/movie/Movie.js';

const MovieList = (props) => (
  <div className='movies-list'>
    {props.movies.map((movie) => (
      <Movie
        movie={movie}
        key={movie.id}
      />
    ))}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
}

MovieList.defaultProps = {
  movies: []
}
  
const mapStateToProps = (state) => {
  return {
      movies: state.movies.data
  };
};
  
export default connect(mapStateToProps)(MovieList);