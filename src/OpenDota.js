import React, { Component } from 'react';
import SplashScreen from 'react-native-smart-splash-screen';
import { Scene, Router } from 'react-native-router-flux';
import BottomTab from './navigation/BottomTab';
import Home from './containers/Home';
import PlayerProfile from './containers/PlayerProfile';
import MatchesSearch from './containers/MatchesSearch';

export default class OpenDota extends Component {

  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 2000,
      delay: 500,
    });
  }

  render() {
    return (
      <Router>
        <Scene key="pre">
          <Scene key="home" component={Home} title="Home" />
          <Scene
            key="playerProfileHome" component={PlayerProfile} title="Player Profile"
          />
        </Scene>
      </Router>
    );
  }
}

