import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as _ from 'lodash';
import NavigationBar from 'react-native-navbar';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import base from '../themes/BaseStyles';
import Fonts from '../themes/Fonts';


class DeepNavBar extends Component {

  static backPressed() {
    Actions.pop();
  }

  componentWillMount() {
    this.backPressed = this.backPressed.bind(this);
  }

  render() {
    const title = <Text style={[styles.title, { color: this.props.secondLegend }]}>{this.props.title}</Text>;

    const leftElements = (
      <View style={styles.navItemView}>
        <TouchableOpacity
          onPress={() => {
            this.backPressed();
          }}
        >
          <View style={styles.leftNavButtonView}>
            <FontAwesome name="chevron-left" size={20} allowFontScaling={false} color={this.props.legend} />
          </View>
        </TouchableOpacity>
        {title}
      </View>
    );

    const rightElements = (
      <View />
    );

    let statusBarPadding;
    let navBarMargin;
    if (Platform.OS === 'ios') {
      statusBarPadding = <View style={[styles.statusBarPadding, { backgroundColor: this.props.mod }]} />;
      navBarMargin = -20;
    } else {
      statusBarPadding = <View />;
      navBarMargin = 0;
    }


    return (
      <View style={styles.navBarContainer}>
        <StatusBar
          backgroundColor={this.props.mod}
          barStyle="light-content"
        />
        {statusBarPadding}
        <NavigationBar
          style={[styles.navBar, { backgroundColor: this.props.mod, marginTop: navBarMargin }]}
          leftButton={leftElements}
          rightButton={rightElements}
        />
      </View>
    );
  }

}

const baseStyles = _.extend(base.general, {
  statusBarPadding: {
    height: 16
  },
  navBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    alignSelf: 'stretch',
    flex: 1
  },
  navBar: {
    borderBottomWidth: 1,
    borderBottomColor: '#A5A5A5'
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Fonts.base,
    marginLeft: 10,
    marginRight: 10
  },
  navItemView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftNavButtonView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  }
});

const styles = StyleSheet.create(baseStyles);

const mapStateToProps = (state) => {
  const { alpha, mod, legend, secondLegend } = state.settingsState;

  return { alpha, mod, legend, secondLegend };
};

export default connect(mapStateToProps)(DeepNavBar);
