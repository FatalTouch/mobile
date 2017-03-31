import {
  CHANGE_CONTEXT_ID,
  CHANGE_PARENT,
  CONSUME_HOME_TAB
} from '../actions/types';

var initialState = { contextId: -1, scene: {}, parent: "Home", homeTab: false };

export default function navigationState(state = initialState, action = {}) {
  switch (action.type) {
    case "REACT_NATIVE_ROUTER_FLUX_JUMP":
      if (action.key == "homeTab") {
        return {
          ...state,
          homeTab: true
        };
      }

    case "REACT_NATIVE_ROUTER_FLUX_FOCUS":
      return {
        ...state,
        scene: action.scene
      };

    case CONSUME_HOME_TAB:
      return Object.assign({}, state, { homeTab: false });
    case CHANGE_CONTEXT_ID:
      return Object.assign({}, state, { contextId: action.contextId });
    case CHANGE_PARENT:
      return Object.assign({}, state, { parent: action.parent });
    default:
      return state;
  }
}
