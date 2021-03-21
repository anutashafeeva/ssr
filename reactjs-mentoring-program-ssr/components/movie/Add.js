import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { actionCloseAddMovieModal, actionAddMovieAsync } from '../../redux/actions.js';

import { genres } from '../../assets/constants.js';

const Add = (props) => {
  if (props.isOpen)
  {
    const initialValues = {
      title: '',
      release_date: '',
      poster_path: '',
      overview: '',
      runtime: '',
      genres: []
    };

    const validationSchema = Yup.object({
      title: Yup.string().required('Field is required'),
      release_date: Yup.date(),
      poster_path: Yup.string().url('Invalid url format').required('Field is required'),
      overview: Yup.string().required('Field is required'),
      runtime: Yup.number().min(1, 'Invalid value').required('Field is required').integer('Invalid format'),
      genres: Yup.array().min(1, 'Field is required')
    })

    const formik = useFormik({
      initialValues,
      onSubmit: values => props.addMovie(values),
      validationSchema
    })

    return(
      <>
        <div className='modal-overlay'>
          <form className='add-movie' onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <button className='cancel-button' onClick={(event) => {event.preventDefault();props.onCancel();}}>X</button>
            <h2 className='modal-title'>ADD MOVIE</h2>
            <label>TITLE
              <input type='text' name='title' placeholder='Title here' {...formik.getFieldProps('title')}></input>
              {formik.touched.title && formik.errors.title ? <div className='error-message' data-testid='errors-title'>{formik.errors.title}</div> : null}
            </label>
            <label>RELEASE DATE
              <input type='date' name='release-date' placeholder='Select Date' {...formik.getFieldProps('release_date')}></input>
            </label>
            <label>MOVIE URL
              <input type='url' name='poster_path' placeholder='Movie URL here' {...formik.getFieldProps('poster_path')}></input>
              {formik.touched.poster_path && formik.errors.poster_path ? <div className='error-message' data-testid='errors-poster-path'>{formik.errors.poster_path}</div> : null}
            </label>
            <label>GENRE
              <select name='genres' multiple {...formik.getFieldProps('genres')}>
                {genres.map((genre) => (<option key={genre.id} value={genre.value}>{genre.title}</option>))}
              </select>
              {formik.touched.genres && formik.errors.genres ? <div className='error-message' data-testid='errors-genres'>{formik.errors.genres}</div> : null}
            </label>
            <label>OVERVIEW
              <input type='text' name='overview' placeholder='Overview here' {...formik.getFieldProps('overview')}></input>
              {formik.touched.overview && formik.errors.overview ? <div className='error-message' data-testid='errors-overview'>{formik.errors.overview}</div> : null}
            </label>
            <label>RUNTIME
              <input type='number' name='runtime' placeholder='Runtime here' {...formik.getFieldProps('runtime')}></input>
              {formik.touched.runtime && formik.errors.runtime ? <div className='error-message' data-testid='errors-runtime'>{formik.errors.runtime}</div> : null}
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
  
Add.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func
}

Add.defaultProps = {
  isOpen: false,
  onCancel: () => {}
};
  
const mapStateToProps = (state) => {
  return {
    isOpen: state.isAddOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (newMovie) => dispatch(actionAddMovieAsync(newMovie)),
    onCancel: () => dispatch(actionCloseAddMovieModal())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Add);