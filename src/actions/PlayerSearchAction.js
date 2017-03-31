import { fetchAPI } from '../utils/fetch';

import {
  REQUEST_PLAYERS,
  RECEIVE_PLAYERS,
  RECEIVE_EMPTY_PLAYERS
} from './types';

function requestPlayers() {
  return {
    type: REQUEST_PLAYERS
  };
}

function receivePlayers(players) {
  return {
    type: RECEIVE_PLAYERS,
    players
  };
}

function receiveEmptyPlayers() {
  return {
    type: RECEIVE_EMPTY_PLAYERS
  };
}

export function fetchPlayers(playerName) {
  var endpoint = "search/?q=" + playerName;
  return dispatch => {
    dispatch(requestPlayers());

    var jsonData;
    return fetchAPI(endpoint)
    .then((json) => {
      if (json.length == 0) {
        dispatch(receiveEmptyPlayers());
      } else {
        dispatch(receivePlayers(json));
      }
    })
    .catch((error) => {
      console.log("Action - FETCH PLAYERS ERROR - " + error);
      dispatch(receiveEmptyPlayers());
    })
  };
}
