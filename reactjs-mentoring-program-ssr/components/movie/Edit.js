import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { genres } from '../../assets/constants.js';

import { actionCloseEditModal, actionEditMovieAsync } from '../../redux/actions.js';

const Edit = (props) => {
  if(props.isOpen)
  {
    const initialValues = {
      id: props.movie.id,
      title: props.movie.title,
      release_date: props.movie.release_date,
      poster_path: props.movie.poster_path,
      overview: props.movie.overview,
      runtime: props.movie.runtime,
      genres: props.movie.genres
    };

    const validationSchema = Yup.object({
      title: Yup.string().required('Field is required'),
      release_date: Yup.date(),
      poster_path: Yup.string().url('Invalid url format').required('Field is required'),
      overview: Yup.string().required('Field is required'),
      runtime: Yup.number().min(0, 'Invalid value').required('Field is required').integer('Invalid format'),
      genres: Yup.array().min(1, 'Field is required')
    })

    const formik = useFormik({
      initialValues,
      onSubmit: values => props.editMovie(values),
      validationSchema
    })

    return(
      <>
        <div className='modal-overlay'>
          <form className='edit-movie' onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <button className='cancel-button' onClick={() => props.onCancel()}>X</button>
            <h2 className='modal-title'>EDIT MOVIE</h2>
            <label>MOVIE ID<input type='text' name='id' value={formik.values.id} disabled></input></label>
            <label>TITLE
              <input type='text' name='title' placeholder='Title here' {...formik.getFieldProps('title')}></input>
              {formik.touched.title && formik.errors.title ? <div className='error-message'>{formik.errors.title}</div> : null}
            </label>
            <label>RELEASE DATE
              <input type='date' name='release-date' placeholder='Select Date' {...formik.getFieldProps('release_date')}></input>
            </label>
            <label>MOVIE URL
              <input type='url' name='poster_path' placeholder='Movie URL here' {...formik.getFieldProps('poster_path')}></input>
              {formik.touched.poster_path && formik.errors.poster_path ? <div className='error-message'>{formik.errors.poster_path}</div> : null}
            </label>
            <label>GENRE
              <select name='genres' multiple {...formik.getFieldProps('genres')}>
                {genres.map((genre) => (<option key={genre.id} value={genre.value}>{genre.title}</option>))}
              </select>
              {formik.touched.genres && formik.errors.genres ? <div className='error-message'>{formik.errors.genres}</div> : null}
            </label>
            <label>OVERVIEW
              <input type='text' name='overview' placeholder='Overview here' {...formik.getFieldProps('overview')}></input>
              {formik.touched.overview && formik.errors.overview ? <div className='error-message'>{formik.errors.overview}</div> : null}
            </label>
            <label>RUNTIME
              <input type='number' name='runtime' placeholder='Runtime here' {...formik.getFieldProps('runtime')}></input>
              {formik.touched.runtime && formik.errors.runtime ? <div className='error-message'>{formik.errors.runtime}</div> : null}
            </label>
            <div className='modal-actions'>
              <button className='black-button' type='reset'>RESET</button>
              <button className='red-button' type='submit'>SUBMIT</button>
            </div>
          </form>
        </div>
      </>
    )
  }
  
  return <></>;
}

Edit.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  movie: PropTypes.object,
  id: PropTypes.number
}

Edit.defaultProps = {
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {}
};
  
const mapStateToProps = (state) => {
  return {
      movie: state.movieCard,
      isOpen: state.isEditOpen,
      isMovieCardOpen: state.isMovieCardOpen
  };
};

const mapDispatchToProps = (dispatch) => ({
  editMovie: (movie) => dispatch(actionEditMovieAsync(movie)),
  onCancel: () => dispatch(actionCloseEditModal())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Edit);