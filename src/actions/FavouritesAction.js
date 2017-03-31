import {
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  INITIALIZE_FAVOURITES,
  PURGE_FAVOURITES
} from './types';

export function addFavourites(info) {
  return {
    type: ADD_FAVOURITES,
    info
  };
}

export function removeFavourites(id) {
  return {
    type: REMOVE_FAVOURITES,
    id
  };
}

export function initializeFavourites(favouritesString) {
  var restoredFavourites = JSON.parse(favouritesString);
  return {
    type: INITIALIZE_FAVOURITES,
    restoredFavourites
  };
}

export function purgeFavourites() {
  return {
    type: PURGE_FAVOURITES
  };
}
