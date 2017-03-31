import {
  SET_HOME_PROFILE,
  RESET_HOME_PROFILE
} from '../actions/types';

var initialState = { profile: {} };

export default function homeState(state = initialState, action = {}) {
  switch (action.type) {
    case SET_HOME_PROFILE:
      return Object.assign({}, state, { profile: action.profile });
    case RESET_HOME_PROFILE:
      return Object.assign({}, state, { profile: {} });
    default:
      return state;
  }
}
