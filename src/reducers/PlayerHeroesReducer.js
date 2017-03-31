import {
  REQUEST_HEROES,
  RECEIVE_HEROES,
  RECEIVE_EMPTY_HEROES
} from '../actions/types';

var initialState = { isLoadingHeroes: false, isEmptyHeroes: false, heroes: {} };

export default function playerHeroesState(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_HEROES:
      return Object.assign({}, state, { isLoadingHeroes: true, isEmptyHeroes: false, heroes: {} });
    case RECEIVE_HEROES:
      return Object.assign({}, state, { isLoadingHeroes: false, isEmptyHeroes: false, heroes: action.heroes });
    case RECEIVE_EMPTY_HEROES:
      return Object.assign({}, state, { isLoadingHeroes: false, isEmptyHeroes: true, heroes: {} });
    default:
      return state;
  }
}
