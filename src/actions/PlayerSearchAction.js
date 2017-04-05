import { Actions } from 'react-native-router-flux';
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

export default (playerName) => {
  const endpoint = `search/?q=${playerName}`;
  return (dispatch) => {
    dispatch(requestPlayers());

    return fetchAPI(endpoint)
    .then((json) => {
      if (json.length === 0) {
        dispatch(receiveEmptyPlayers());
      } else {
        const results = json.slice(0, 40); // Take only first 40 results
        dispatch(receivePlayers(results));
        Actions.searchresults();
      }
    })
    .catch((error) => {
      console.log(`Action - FETCH PLAYERS ERROR - ${error}`);
      dispatch(receiveEmptyPlayers());
    });
  };
};
