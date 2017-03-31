import {
  SET_HOME_PROFILE,
  RESET_HOME_PROFILE
} from './types';

export function setHomeProfile(profile) {
  return {
    type: SET_HOME_PROFILE,
    profile
  };
}

export function resetHomeProfile() {
  return {
    type: RESET_HOME_PROFILE
  };
}
