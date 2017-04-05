import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ListView,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import _ from 'lodash';
import fetchPlayers from '../actions/PlayerSearchAction';

import Colors from '../themes/Colors';
import base from '../themes/BaseStyles';
import Fonts from '../themes/Fonts';

export const mapStateToProps = (state) => {
  const {
    players,
    isLoadingPlayers,
    isEmptyPlayers,
    alpha,
    mod,
    legend,
    secondLegend,
    legendHex,
    legendTranslucent
  } = state.playerListState;

  const { parent } = state.navigationState;

  return ({
    players,
    isLoadingPlayers,
    isEmptyPlayers,
    alpha,
    mod,
    legend,
    secondLegend,
    legendHex,
    legendTranslucent,
    parent
  });
};

class PlayerSearch extends Component {

  componentWillMount() {
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      searchInput: ''
    };
    this.searchPlayer = this.searchPlayer.bind(this);
  }


  searchPlayer() {
    this.props.fetchPlayers(this.state.searchInput);
  }

  render() {
    let contentBottom;
    let containerStyle;
    if (this.props.isLoadingPlayers) {
      contentBottom = (
        <View style={styles.contentContainer}>
          <ActivityIndicator size="large" color={this.props.legend} />
        </View>
      );
    } else if (this.props.isEmptyPlayers) {
      contentBottom = (
        <View style={styles.contentContainer}>
          <Text style={styles.noDataText}>No data found</Text>
        </View>
      );
    }

    if (this.props.parent === 'Home') {
      containerStyle = styles.noMarginContainer;
    } else {
      containerStyle = styles.container;
    }

    return (
      <View style={containerStyle}>
        <View style={styles.searchFieldContainer}>
          <TextInput
            placeholder="Search player"
            value={this.state.searchInput}
            style={[styles.searchInput, { backgroundColor: this.props.alpha, color: this.props.secondLegend }]}
            autoCorrect={false}
            placeholderTextColor={this.props.legendTranslucent}
            autoCapitalize="none"
            returnKeyType="search"
            selectionColor="white"
            onSubmitEditing={this.searchPlayer}
            onChange={(event) => {
              this.setState({
                searchInput: event.nativeEvent.text
              });
            }}
          />
        </View>
        {contentBottom}
      </View>
    );
  }
}

const baseStyles = _.extend(base.general,
  {
    searchFieldContainer: {
      height: 60
    },
    searchInput: {
      height: 40,
      fontSize: 14,
      marginVertical: 10,
      marginHorizontal: 10,
      borderRadius: 3,
      paddingHorizontal: 20,
      paddingVertical: 3,
      fontFamily: Fonts.base
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    noMarginContainer: {
      flexDirection: 'column',
      alignSelf: 'stretch',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      flex: 1,
      backgroundColor: Colors.mainBackground
    }
  }
);
const styles = StyleSheet.create(baseStyles);

export default connect(mapStateToProps, { fetchPlayers })(PlayerSearch);
