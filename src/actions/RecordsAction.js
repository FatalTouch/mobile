import { fetchAPI } from '../utils/fetch';

import {
  REQUEST_RECORDS,
  RECEIVE_RECORDS,
  RECEIVE_EMPTY_RECORDS
} from './types';

function requestRecords() {
  return {
    type: REQUEST_RECORDS
  };
}

function receiveRecords(records) {
  return {
    type: RECEIVE_RECORDS,
    records
  };
}

function receiveEmptyRecords() {
  return {
    type: RECEIVE_EMPTY_RECORDS
  };
}

export function fetchRecords(playerId) {
  var endpoint = "players/" + playerId + "/records";
  console.log(endpoint);
  return dispatch => {
    dispatch(requestRecords());

    var jsonData;
    return fetchAPI(endpoint)
    .then((json) => {
      dispatch(receiveRecords(json));
    })
    .catch((error) => {
      console.log("Action - FETCH RECORDS ERROR - " + error);
      dispatch(receiveEmptyRecords());
    })
  }
}
