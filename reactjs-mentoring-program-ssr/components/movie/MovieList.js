import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Movie from './Movie.js';

class MovieList extends React.Component {
  
  static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }
    render() {
  return(
    <div className='movies-list'>
      {props.movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.id}
        />
      ))}
    </div>
  );}
}

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