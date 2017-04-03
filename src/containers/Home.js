import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';

// Actions
import * as homeActions from '../actions/HomeAction';
import * as navigationActions from '../actions/NavigationAction';

// Components
import PlayerSearch from './PlayerSearch';
import PlayerProfile from './PlayerProfile';

// Styling
import Colors from '../themes/Colors';
import base from '../themes/BaseStyles';

export const mapStateToProps = state => ({
  alpha: state.settingsState.alpha,
  mod: state.settingsState.mod,
  legend: state.settingsState.legend,
  secondLegend: state.settingsState.secondLegend,
  legendHex: state.settingsState.legendHex,
  profile: state.homeState.profile
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...homeActions, ...navigationActions }, dispatch)
});

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profileExist: false
    };
  }

  render() {
    let content;
    let containerStyle;
    const profile = this.props.profile;
    if (!(Object.keys(profile).length === 0 && profile.constructor === Object)) {
      containerStyle = styles.localContainer;
      content = (
        <PlayerProfile />
      );
    } else {
      containerStyle = styles.container;
      content = (
        <View style={styles.contentContainer}>
          <Text style={styles.noDataText}>
            You have not set any profile as Home yet.
          </Text>
          <Text style={styles.noDataText}>
            You can search your profile below using Steam ID or Username
          </Text>
          <PlayerSearch />
        </View>
      );
    }
    return (
      <View style={containerStyle}>
        {content}
      </View>
    );
  }
}

const baseStyles = _.extend(base.general, {
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  localContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: Colors.mainBackground
  }
});

const styles = StyleSheet.create(baseStyles);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
