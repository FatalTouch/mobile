import {
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  INITIALIZE_FAVOURITES,
  PURGE_FAVOURITES
} from '../actions/types';

var initialState = { favourites: [] };

export default function favouritesState(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZE_FAVOURITES:
      return Object.assign({}, state, { favourites: action.restoredFavourites });
    case ADD_FAVOURITES:
      return Object.assign({}, state, { favourites: [...state.favourites, action.info] });
    case REMOVE_FAVOURITES:
      var index;
      for (i = 0; i < state.favourites.length; i++) {
        if (state.favourites[i].account_id == action.id) {
          index = i;
        }
      }
      return Object.assign({}, state, {
          favourites: [...state.favourites.slice(0, index),
            ...state.favourites.slice(index + 1)]
        }
      );
    case PURGE_FAVOURITES:
      return Object.assign({}, state, { favourites: [] });
    default:
      return state;
  }
}
