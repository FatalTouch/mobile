import {
  REQUEST_RECORDS,
  RECEIVE_RECORDS,
  RECEIVE_EMPTY_RECORDS
} from '../actions/types';

var initialState = { isLoadingRecords: false, isEmptyRecords: false, records: {} };

export default function recordsState(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_RECORDS:
      return Object.assign({}, state, { isLoadingRecords: true, isEmptyRecords: false, records: {} });
    case RECEIVE_RECORDS:
      return Object.assign({}, state, { isLoadingRecords: false, isEmptyRecords: false, records: action.records });
    case RECEIVE_EMPTY_RECORDS:
      return Object.assign({}, state, { isLoadingRecords: false, isEmptyRecords: true, records: {} });
    default:
      return state;
  }
}
