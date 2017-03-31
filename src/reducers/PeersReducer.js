import {
  REQUEST_PEERS,
  RECEIVE_PEERS,
  RECEIVE_EMPTY_PEERS
} from '../actions/types';

var initialState = { isLoadingPeers: false, isEmptyPeers: false, peers: [] };

export default function peersState(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_PEERS:
      return Object.assign({}, state, { isLoadingPeers: true, isEmptyPeers: false, peers: [] });
    case RECEIVE_PEERS:
      return Object.assign({}, state, { isLoadingPeers: false, isEmptyPeers: false, peers: action.peers });
    case RECEIVE_EMPTY_PEERS:
      return Object.assign({}, state, { isLoadingPeers: false, isEmptyPeers: true, peers: [] });
    default:
      return state;
  }
}
