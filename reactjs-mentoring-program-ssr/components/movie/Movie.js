import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';

import Delete from './Delete.js';
import Edit from './Edit.js';

import useMovieYear from '../../hooks/UseMovieYear.js';

import { actionOpenDeleteModal, actionOpenEditModalAsync, actionOpenMovieCardAsync } from '../../redux/actions.js';

import notFound from '../../assets/img/movie/not-found.jpg';

const Movie = (props) => {
  return(
    <div className='movie'>
    <span className='movie-actions'>
      <button className='grey-button' onClick={() => props.openEditModal(props.movie.id)}>EDIT</button>
        <Edit/>
      <button className='grey-button' type='button' onClick={() => props.openDeleteModal(props.movie.id)}>DELETE</button>
        <Delete/>
      </span>
      <Link href={`/film/${props.movie.id}`}>
        <img onClick={() => props.openMovieCard(props.movie.id)} className='movie-image' src={props.movie.poster_path} onError={(e) => {e.target.onerror = null; e.target.src=notFound}} alt='Movie image'></img>
      </Link>
      <span className='movie-content'>
        <span className='movie-data'>
          <h3 className='movie-title'>{props.movie.title}</h3>
          <span className='movie-description'>{props.movie.tagline}</span>
        </span>
        <span className='movie-year'>{useMovieYear(props.movie.release_date)()}</span>   
      </span>
    </div>
  )
}

Movie.propTypes = {
  isDeleteOpen: PropTypes.bool.isRequired,
  isEditOpen: PropTypes.bool.isRequired,
  openDeleteModal: PropTypes.func,
  openEditModal: PropTypes.func,
  openMovieCard: PropTypes.func,
  movie: PropTypes.object.isRequired,
}

Movie.defaultProps = {
  isDeleteOpen: false,
  isEditOpen: false,
  openDeleteModal: () => {},
  openEditModal: () => {},
  openMovieCard: () => {},
  onCancel: () => {},
  onEditSubmit: () => {},
  onDeleteSubmit: () => {}
}
  
const mapStateToProps = (state, ownProps) => {
  return {
    movie: ownProps.movie
  };
};

const mapDispatchToProps = (dispatch) => ({
  openMovieCard: (id) => dispatch(actionOpenMovieCardAsync(id)),
  openDeleteModal: (id) => dispatch(actionOpenDeleteModal(id)),
  openEditModal: (id) => dispatch(actionOpenEditModalAsync(id))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Movie);