import React, { Component } from 'react';
import { View } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import _ from 'lodash';
import PlayerSearch from '../newcontainers/PlayerSearch';
import globalStyles from '../themes/Styles';


const styles = _.extend(globalStyles,
  {
    container: {
      flex: 1
    },
    tabbar: {
      backgroundColor: '#455A64'
    },
    page: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    indicator: {
      backgroundColor: '#ffeb3b',
    },
    label: {
      color: '#fff',
      fontWeight: '400',
    },
    tab: {
      padding: 5
    }
  });

class Home extends Component {
  state = {
    index: 1,
    routes: [
      { key: 'pinned', title: 'Pinned' },
      { key: 'search', title: 'Search' },
    ],
  };

  handleChangeTab = (index) => {
    this.setState({
      index,
    });
  };

  renderHeader = props =>
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabStyle={styles.tab}
    />;

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'pinned':
        return <View style={[styles.page, { backgroundColor: '#ff4081' }]} />;
      case 'search':
        return <PlayerSearch />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, styles.mainContainer, this.props.style]}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onRequestChangeTab={this.handleChangeTab}
      />
    );
  }
}

export default Home;
