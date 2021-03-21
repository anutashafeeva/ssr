import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer'

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

const makeStore = (context) => createStore(rootReducer, initialState, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore);