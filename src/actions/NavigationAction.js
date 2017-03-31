import {
  CHANGE_CONTEXT_ID,
  CHANGE_PARENT,
  CONSUME_HOME_TAB
} from './types';

export function changeContextId(id) {
  return {
    type: CHANGE_CONTEXT_ID,
    contextId: id
  }
}

export function changeParent(parent) {
  return {
    type: CHANGE_PARENT,
    parent: parent
  }
}

export function consumeHomeTab() {
  return {
    type: CONSUME_HOME_TAB
  }
}
