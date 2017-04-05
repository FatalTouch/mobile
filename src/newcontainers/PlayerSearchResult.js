import React, { Component } from 'react';
import { ScrollView, ListView } from 'react-native';
import { connect } from 'react-redux';

import styles from '../themes/Styles';
import PlayerCard from '../components/PlayerCard';

class PlayerSearchResult extends Component {

  static renderRow(rowData) {
    return (
      <PlayerCard info={rowData} />
    );
  }


  componentWillMount() {
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }


  render() {
    return (

      <ScrollView style={styles.mainContainer}>
        <ListView
          dataSource={this.ds.cloneWithRows(this.props.players)}
          renderRow={PlayerSearchResult.renderRow}
          enableEmptySections
        />
      </ScrollView>
    )
      ;
  }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps)(PlayerSearchResult);
