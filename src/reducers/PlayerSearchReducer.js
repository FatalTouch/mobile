import {
  REQUEST_PLAYERS,
  RECEIVE_PLAYERS,
  RECEIVE_EMPTY_PLAYERS
} from '../actions/types';

const initialState = { isLoadingPlayers: false, isEmptyPlayers: false, players: [] };

export default function playerListState(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_PLAYERS:
      return Object.assign({}, state, { isLoadingPlayers: true, isEmptyPlayers: false, players: [] });
    case RECEIVE_PLAYERS:
      return Object.assign({}, state, { isLoadingPlayers: false, isEmptyPlayers: false, players: action.players });
    case RECEIVE_EMPTY_PLAYERS:
      return Object.assign({}, state, { isLoadingPlayers: false, isEmptyPlayers: true, players: [] });
    default:
      return state;
  }
}
