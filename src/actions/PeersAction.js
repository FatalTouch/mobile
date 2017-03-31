import { fetchAPI } from '../utils/fetch';

import {
  REQUEST_PEERS,
  RECEIVE_PEERS,
  RECEIVE_EMPTY_PEERS
} from './types';

function requestPeers() {
  return {
    type: REQUEST_PEERS
  };
}

function receivePeers(peers) {
  return {
    type: RECEIVE_PEERS,
    peers
  };
}

function receiveEmptyPeers() {
  return {
    type: RECEIVE_EMPTY_PEERS
  };
}

export function fetchPeers(playerId) {
  var endpoint = "players/" + playerId + "/peers";
  console.log(endpoint);
  return dispatch => {
    dispatch(requestPeers());

    var jsonData;
    return fetchAPI(endpoint)
    .then((json) => {
      dispatch(receivePeers(json));
    })
    .catch((error) => {
      console.log("Action - FETCH PEERS ERROR - " + error);
      dispatch(receiveEmptyPeers());
    });
  }
}
