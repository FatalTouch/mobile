import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SplashScreen from 'react-native-smart-splash-screen'
import { Text } from 'react-native';

class OpenDota extends Component {

  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 2000,
      delay: 500,
    });
  }

  render() {
    return (
      <Text>
        Test
      </Text>
    );
  }
}

export default OpenDota;
