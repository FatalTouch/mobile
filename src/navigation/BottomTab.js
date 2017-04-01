import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#222',
  },
  tab: {
    padding: 0,
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  indicator: {
    flex: 1,
    backgroundColor: '#0084ff',
    margin: 4,
    borderRadius: 2,
  },
  badge: {
    marginTop: 4,
    marginRight: 32,
    backgroundColor: '#f44336',
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  count: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -2,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class BottomTab extends Component {

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'First', icon: 'rocket' },
      { key: '2', title: 'Second', icon: 'rocket' },
      { key: '3', title: 'Third', icon: 'rocket' },
      { key: '4', title: 'Fourth', icon: 'rocket' },
    ],
  };

  handleChangeTab = (index) => {
    this.setState({
      index,
    });
  };

  renderIndicator = (props) => {
    const { width, position } = props;

    const translateX = Animated.multiply(position, width);

    return (
      <Animated.View
        style={[styles.container, { width, transform: [{ translateX }] }]}
      >
        <View style={styles.indicator} />
      </Animated.View>
    );
  };

  renderIcon = ({ route }: any) =>
    <Icon
      name={route.icon}
      size={24}
      color="#900"
    />;

  renderBadge = () => null;


  renderFooter = props =>
    <TabBar
      {...props}
      renderIcon={this.renderIcon}
      renderBadge={this.renderBadge}
      renderIndicator={this.renderIndicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
    />;

  renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <View style={[styles.page, { backgroundColor: '#ff4081' }]} />;
      case '2':
        return <View style={[styles.page, { backgroundColor: '#673ab7' }]} />;
      case '3':
        return <View style={[styles.page, { backgroundColor: '#4caf50' }]} />;
      case '4':
        return <View style={[styles.page, { backgroundColor: '#4cad90' }]} />;

      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderFooter={this.renderFooter}
        onRequestChangeTab={this.handleChangeTab}
      />
    );
  }
}

