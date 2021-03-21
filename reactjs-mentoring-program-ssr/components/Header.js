import React from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

import Add from './movie/Add.js';

import { actionOpenAddMovieModal, actionSearchMoviesAsync } from '../redux/actions.js';

const Header = (props) => {

  const {asPath} = useRouter();

  const initialValues = {
    search: ''
  };

  const validationSchema = Yup.object({});

  const formik = useFormik({
    initialValues,
    onSubmit: values => props.searchMovies(values.search),
    validationSchema
  });
  
  if ((asPath.match(new RegExp('\/film\/.+')) || []).length == 0) {
    return(    
      <header className='header'>
        <div className='wrapper'>
          <div className='header-label'>
            <div className='label'><span>netflix</span>roulette</div>
            <button className='grey-button' onClick={() => props.openAddModal()}>+ ADD MOVIE</button> 
            <Add/>     
          </div>
          <div className='search'>
            <h1>FIND YOUR MOVIE</h1>
            <form className='search-input' onSubmit={formik.handleSubmit}>
              <input type='text' id='search-input-value' name='search' placeholder='What do you want to watch?' {...formik.getFieldProps('search')}></input>
              <Link href={`/search/${formik.values.search}`}>
                <button className='red-button' type='submit' onClick={() => props.searchMovies(formik.values.search)}>SEARCH</button>
              </Link>
            </form>
          </div>
        </div>
      </header>
    );
  } else {
    return(
      <Redirect to='/page-not-found' />
    );
  }
}
  
const mapStateToProps = (state) => {
    return {
      searchValue: state.searchValue 
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    openAddModal: () => dispatch(actionOpenAddMovieModal()),
    searchMovies: (search) => dispatch(actionSearchMoviesAsync(search))
  })
    
  export default connect(mapStateToProps, mapDispatchToProps)(Header);