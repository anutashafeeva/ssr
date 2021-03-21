import ACTION_TYPES from './actionTypes.js';
import * as API from '../servises/api.js';

export const actionGetMovies = (search, movies) => ({
  type: ACTION_TYPES.GET_MOVIES,
  search: search,
  payload: movies
})

export const actionFilterMovies = (movies, filter) => ({
  type: ACTION_TYPES.FILTER_MOVIES,
  payload: movies,
  filter: filter
})

export const actionSortMovies = (movies, sort) => ({
  type: ACTION_TYPES.SORT_MOVIES,
  payload: movies,
  sort: sort
})

export const actionOpenAddMovieModal = () => ({
  type: ACTION_TYPES.OPEN_ADD_MOVIE_MODAL
})

export const actionCloseAddMovieModal = () => ({
  type: ACTION_TYPES.CLOSE_ADD_MOVIE_MODAL
})

export const actionCloseMovieCard = () => ({
  type: ACTION_TYPES.CLOSE_MOVIE_CARD
})

export const actionOpenMovieCard = (movie) => ({
  type: ACTION_TYPES.OPEN_MOVIE_CARD,
  payload: movie
})

export const actionCloseDeleteMovieModal = () => ({
  type: ACTION_TYPES.CLOSE_DELETE_MOVIE_MODAL
})

export const actionOpenDeleteModal = (id) => ({
  type: ACTION_TYPES.OPEN_DELETE_MOVIE_MODAL,
  payload: id
})

export const actionCloseEditModal = () => ({
  type: ACTION_TYPES.CLOSE_EDIT_MOVIE_MODAL
})

export const actionOpenEditModal = (movie) => ({
  type: ACTION_TYPES.OPEN_EDIT_MOVIE_MODAL,
  payload: movie
})

export const actionSearchMovies = (movies, search) => ({
  type: ACTION_TYPES.SEARCH_MOVIES,
  payload: movies,
  search: search
})

export const actionAddMovieAsync = (movie) => {
  return async function(dispatch) {
    await API.addMovieAsync(movie);
    dispatch(actionCloseAddMovieModal());
  }
}

export const actionDeleteMovieAsync = (id) => {
  return async function(dispatch) {
    await API.deleteMovieAsync(id);
    dispatch(actionCloseDeleteMovieModal());
  }
}

export const actionEditMovieAsync = (movie) => {
  return async function(dispatch) {
    await API.editMovieAsync(movie);
    dispatch(actionCloseEditModal())
  }
}

export const actionOpenEditModalAsync = (id) => {
  return async function(dispatch) {
    const movie = await API.getMovieByIdAsync(id);
    dispatch(actionOpenEditModal(movie));
  }
}

export const actionOpenMovieCardAsync = (id) => {
  return async function(dispatch) {
    const movie = await API.getMovieByIdAsync(id);
    dispatch(actionOpenMovieCard(movie));
  }
}

export const actionGetSearchedMoviesAsync = (searchValue, sortValue, filterValue) => {
  return async function(dispatch) {
    const movies = await API.getMoviesAsync(searchValue, sortValue, filterValue);
    dispatch(actionGetMovies(searchValue, movies));
  }
}

export const actionGetFilteredMoviesAsync = (searchValue, sortValue, filterValue) => {
  return async function(dispatch) {
    const movies = await API.getMoviesAsync(searchValue, sortValue, filterValue);
    dispatch(actionFilterMovies(movies, filterValue));
  }
}

export const actionGetSortedMoviesAsync = (searchValue, sortValue, filterValue) => {
  return async function(dispatch) {
    const movies = await API.getMoviesAsync(searchValue, sortValue, filterValue);
    dispatch(actionSortMovies(movies, sortValue));
  }
}

export const actionSearchMoviesAsync = (searchValue) => {
  return async function(dispatch) {
    const movies = await API.getMoviesAsync(searchValue);
    dispatch(actionSearchMovies(movies, searchValue));
  }
}