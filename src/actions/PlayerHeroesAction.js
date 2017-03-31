import { fetchAPI } from '../utils/fetch';

import {
  REQUEST_HEROES,
  RECEIVE_HEROES,
  RECEIVE_EMPTY_HEROES
} from './types';

function requestHeroes() {
  return {
    type: REQUEST_HEROES
  };
}

function receiveHeroes(heroes) {
  return {
    type: RECEIVE_HEROES,
    heroes
  };
}

function receiveEmptyHeroes() {
  return {
    type: RECEIVE_EMPTY_HEROES
  };
}

export function fetchHeroes(playerId, limit) {
  var endpoint = "players/" + playerId + "/heroes";
  console.log(endpoint);
  return dispatch => {
    dispatch(requestHeroes());

    var jsonData;
    return fetchAPI(endpoint)
    .then((json) => {
      dispatch(receiveHeroes(json));
    })
    .catch((error) => {
      console.log("Action - FETCH MATCHES ERROR - " + error);
      dispatch(receiveEmptyHeroes());
    });
  }
}
