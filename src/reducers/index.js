import { combineReducers } from 'redux';

import PlayerSearchReducer from './PlayerSearchReducer';
import NavigationReducer from './NavigationReducer';
import PlayerOverviewReducer from './PlayerOverviewReducer';
import PlayerMatchesReducer from './PlayerMatchesReducer';
import PlayerHeroesReducer from './PlayerHeroesReducer';
import SettingsReducer from './SettingsReducer';
import FavouritesReducer from './FavouritesReducer';
import HomeReducer from './HomeReducer';
import PeersReducer from './PeersReducer';


export default combineReducers({
  playerListState: PlayerSearchReducer,
  navigationState: NavigationReducer,
  playerOverviewState: PlayerOverviewReducer,
  playerMatchesState: PlayerMatchesReducer,
  playerHeroesState: PlayerHeroesReducer,
  settingsState: SettingsReducer,
  favouritesState: FavouritesReducer,
  homeState: HomeReducer,
  peersState: PeersReducer
});
