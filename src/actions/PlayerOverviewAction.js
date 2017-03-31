import { fetchAPI } from '../utils/fetch';

import {
  REQUEST_OVERVIEW,
  RECEIVE_OVERVIEW,
  RECEIVE_EMPTY_OVERVIEW,
  REQUEST_WL,
  RECEIVE_WL,
  RECEIVE_EMPTY_WL
} from './types';

function requestOverview() {
  return {
    type: REQUEST_OVERVIEW
  };
}

function receiveOverview(overview) {
  return {
    type: RECEIVE_OVERVIEW,
    overview
  };
}

function receiveEmptyOverview() {
  return {
    type: RECEIVE_EMPTY_OVERVIEW
  };
}

function requestWl() {
  return {
    type: REQUEST_WL
  };
}

function receiveWl(wl) {
  return {
    type: RECEIVE_WL,
    wl
  };
}

function receiveEmptyWl() {
  return {
    type: RECEIVE_EMPTY_WL
  };
}

export function fetchWl(playerId) {
  var endpoint = "players/" + playerId + "/wl";
  return dispatch => {
    dispatch(requestWl());

    var jsonData;
    return fetchAPI(endpoint)
    .then((json) => {
      dispatch(receiveWl(json));
    })
    .catch((error) => {
      console.log("Action - FETCH WL ERROR - " + error);
      dispatch(receiveEmptyWl());
    })
  }
}

export function fetchOverview(playerId) {
  var endpoint = "players/" + playerId;
  return dispatch => {
    dispatch(requestOverview());

    var jsonData;
    return fetchAPI(endpoint)
    .then((json) => {
      dispatch(receiveOverview(json));
    })
    .catch((error) => {
      console.log("Action - FETCH OVERVIEW ERROR - " + error);
      dispatch(receiveEmptyOverview());
    })
  }
}
