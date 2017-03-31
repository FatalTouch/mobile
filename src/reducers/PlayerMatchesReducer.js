import {
  REQUEST_MATCHES,
  RECEIVE_MATCHES,
  RECEIVE_EMPTY_MATCHES,
  CHANGE_SORTED_BY
} from '../actions/types';

var initialState = { isLoadingMatches: false, isEmptyMatches: false, matches: {}, sortedBy: "match_id" };

export default function playerMatchesState(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_MATCHES:
      return Object.assign({}, state, { isLoadingMatches: true, isEmptyMatches: false, matches: {} });
    case RECEIVE_MATCHES:
      return Object.assign({}, state, { isLoadingMatches: false, isEmptyMatches: false, matches: action.matches });
    case RECEIVE_EMPTY_MATCHES:
      return Object.assign({}, state, { isLoadingMatches: false, isEmptyMatches: true, matches: {} });
    case CHANGE_SORTED_BY:
      return Object.assign({}, state, { sortedBy: action.sortedBy });
    default:
      return state;
  }
}
