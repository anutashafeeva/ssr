import React from 'react';
import { connect } from 'react-redux';

import { actionGetSortedMoviesAsync } from '../../redux/actions.js';

import { sorts } from '../../assets/constants.js';

const SortBy = (props) => {
  return(
    <div className='sort-options'>
      <label htmlFor='sort-options-list' className='sort-options-title'>SORT BY</label>
      <select className='sort-options-list' id='sort-options-list' defaultValue='release_date' onChange={() => {const value = document.getElementById('sort-options-list').value; props.sortMovies(props.searchValue, value, props.filterValue)}}>
        {sorts.map((sort) => (
            <option key={sort.id} value={sort.value}>{sort.title}</option>
        ))}
      </select>
    </div>
  );
}
  
const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue,
    filterValue: state.filterValue
  };
};

const mapDispatchToProps = (dispatch) => ({
  sortMovies: (searchValue, sortValue, filterValue) => dispatch(actionGetSortedMoviesAsync(searchValue, sortValue, filterValue))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(SortBy);