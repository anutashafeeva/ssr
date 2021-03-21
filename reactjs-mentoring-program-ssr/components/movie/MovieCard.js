import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';

import useMovieYear from '../../hooks/UseMovieYear.js';

import { actionCloseMovieCard } from '../../redux/actions.js';

import notFound from '../../assets/img/movie/not-found.jpg';

const MovieCard = (props) => {
  return(
    <>
      {props.isMovieCardOpen &&
      <div className='movie-card'>
        <div className='wrapper'>
          <div className='movie-card-header'>
            <div className='label'><span>netflix</span>roulette</div>
            <Link href={`/search/${props.searchValue}`}>
              <button className='grey-button' onClick={() => props.onSearchButton()}>SEARCH</button>   
            </Link>
          </div>
          <div className='movie-card-details'>
            <img className='movie-card-image' src={props.movie.poster_path} alt='Movie Image' onError={(e) => {e.target.onerror = null; e.target.src=notFound}}></img>
            <div className='movie-card-data'>
              <div className='movie-card-title-and-rating'>
                <div className='movie-card-title'>{props.movie.title}</div>
                <div className='movie-card-rating'>{props.movie.vote_average}</div>
              </div>
              <div className='movie-card-genre'>{props.movie.genre}</div>
              <div className='movie-card-date-and-duration'>
                <div className='movie-card-date'>{useMovieYear(props.movie.release_date)()}</div>
                <div className='movie-card-duration'>{props.movie.runtime} min</div>
              </div>
              <div className='movie-card-description'>{props.movie.overview}</div>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}

MovieCard.propTypes = {
  isMovieCardOpen: PropTypes.bool,
  onSearchButton: PropTypes.func
}

MovieCard.defaultProps = {
  isMovieCardOpen: false,
  onSearchButton: () => {}
};
  
const mapStateToProps = (state) => {
  return {
      movie: state.movieCard,
      isMovieCardOpen: state.isMovieCardOpen,
      searchValue: state.searchValue 
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchButton: () => dispatch(actionCloseMovieCard())
  }  
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);