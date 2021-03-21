import React from 'react';
import { connect } from 'react-redux';

import { actionGetFilteredMoviesAsync } from '../../redux/actions.js';

import { genres as genresList } from '../../assets/constants.js';

const genres = [{ title: 'ALL', value: '', id: 0 }, ...genresList];

const FilterBy = (props) => {  
  return(
    <div className='genres'>
      {genres.map((genre) => (
          <button className='grey-button' key={genre.id} value={genre.value} onClick={() => {props.filterMovies(props.searchValue, props.sortValue, genre.value)}}>{genre.title}</button>
      ))}
    </div>
  );
}
  
const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue,
    sortValue: state.sortValue
  };
};

const mapDispatchToProps = (dispatch) => ({
  filterMovies: (searchValue, sortValue, filterValue) => dispatch(actionGetFilteredMoviesAsync(searchValue, sortValue, filterValue))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(FilterBy);