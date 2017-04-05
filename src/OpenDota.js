import React, { Component } from 'react';
import SplashScreen from 'react-native-smart-splash-screen';
import { Scene, Router } from 'react-native-router-flux';
import Home from './newcontainers/Home';
import PlayerSearchResult from './newcontainers/PlayerSearchResult';

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
        <Scene key="home" title="Home" component={Home} initial />
        <Scene key="searchresults" title="Search Results" component={PlayerSearchResult} />
      </Router>
    );
  }
}
