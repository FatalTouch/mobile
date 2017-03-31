import {
  REQUEST_OVERVIEW,
  RECEIVE_OVERVIEW,
  RECEIVE_EMPTY_OVERVIEW,
  REQUEST_WL,
  RECEIVE_WL,
  RECEIVE_EMPTY_WL
} from '../actions/types';

var initialState = {
  isLoadingOverview: false,
  isEmptyOverview: false,
  overview: {},
  isLoadingWl: false,
  isEmptyWl: false,
  wl: {}
};

export default function playerOverviewState(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_OVERVIEW:
      return Object.assign({}, state, { isLoadingOverview: true, isEmptyOverview: false, overview: {} });
    case RECEIVE_OVERVIEW:
      return Object.assign({}, state, { isLoadingOverview: false, isEmptyOverview: false, overview: action.overview });
    case RECEIVE_EMPTY_OVERVIEW:
      return Object.assign({}, state, { isLoadingOverview: false, isEmptyOverview: true, overview: {} });
    case REQUEST_WL:
      return Object.assign({}, state, { isLoadingWl: true, isEmptyWl: false, wl: {} });
    case RECEIVE_WL:
      return Object.assign({}, state, { isLoadingWl: false, isEmptyWl: false, wl: action.wl });
    case RECEIVE_EMPTY_WL:
      return Object.assign({}, state, { isLoadingWl: false, isEmptyWl: true, wl: {} });
    default:
      return state;
  }
}
