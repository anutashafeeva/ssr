import ACTION_TYPES from './actionTypes.js'

const initialState = {
  movies: {},
  movieId: null,
  movieCard: {},
  searchValue: '',
  sortValue: 'release_date',
  filterValue: null,

  isAddOpen: false,
  isMovieCardOpen: false,
  isDeleteOpen: false,
  isEditOpen: false
};

const rootReducer = function(state = initialState, action) {
    switch (action.type) {
      case ACTION_TYPES.GET_MOVIES:
        return {
          ...state,
          searchValue: action.search,
          movies: action.payload
        }
      case ACTION_TYPES.OPEN_ADD_MOVIE_MODAL:
        return{
          ...state,
          isAddOpen: true
        }
      case ACTION_TYPES.CLOSE_ADD_MOVIE_MODAL:
        return{
          ...state,
          isAddOpen: false
        }
      case ACTION_TYPES.FILTER_MOVIES:
        return {
          ...state,
          // movieId: null,
          // isMovieCardOpen: false,
          movies: action.payload,
          filterValue: action.filter
        }
      case ACTION_TYPES.SORT_MOVIES:
        return {
          ...state,
          // movieId: null,
          // isMovieCardOpen: false,
          movies: action.payload,
          sortValue: action.sort
        }
      case ACTION_TYPES.OPEN_MOVIE_CARD:
        return {
          ...state,
          movieCard: action.payload,
          isMovieCardOpen: true
        }
      case ACTION_TYPES.CLOSE_MOVIE_CARD:
        return {
          ...state,
          movieId: null,
          movieCard: {},
          isMovieCardOpen: false
        }
      case ACTION_TYPES.CLOSE_DELETE_MOVIE_MODAL:
        return {
          ...state,
          movieId: null,
          isMovieCardOpen: false,
          isDeleteOpen: false
        }
      case ACTION_TYPES.OPEN_DELETE_MOVIE_MODAL:
        return {
          ...state,
          movieId: action.payload,
          isMovieCardOpen: false,
          isDeleteOpen: true
        }
      case ACTION_TYPES.CLOSE_EDIT_MOVIE_MODAL:
        return {
          ...state,
          movieCard: {},
          isMovieCardOpen: false,
          isEditOpen: false
        }
      case ACTION_TYPES.OPEN_EDIT_MOVIE_MODAL:
        return {
          ...state,
          movieCard: action.payload,
          isMovieCardOpen: false,
          isEditOpen: true
        }
      case ACTION_TYPES.SEARCH_MOVIES:
        return {
          ...state,
          movieId: null,
          // isMovieCardOpen: false,
          movies: action.payload,
          searchValue: action.search
        }
      default:
        return state;
    }
  }

  export default rootReducer;