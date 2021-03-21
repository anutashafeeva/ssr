import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCloseDeleteMovieModal, actionDeleteMovieAsync } from '../../redux/actions.js';

const Delete = (props) => (
  <>
  {props.isOpen &&
  <div className='modal-overlay'>
    <form className='delete-movie' method='GET'>
      <button className='cancel-button' onClick={(event) => {event.preventDefault(); props.onCancel();}}>X</button>
      <h2 className='modal-title'>DELETE MOVIE</h2>
      <div className='delete-description'>Are you sure you want to delete this movie?</div>
      <button className='red-button' onClick={(event) => {event.preventDefault(); props.deleteMovie(props.id)}} type='submit'>CONFIRM</button>
    </form>
  </div>
  }
  </>
)

Delete.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func
}

Delete.defaultProps = {
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {}
};
  
const mapStateToProps = (state) => {
  return {
    id: state.movieId,
    isOpen: state.isDeleteOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (id) => dispatch(actionDeleteMovieAsync(id)),
    onCancel: () => dispatch(actionCloseDeleteMovieModal())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Delete);