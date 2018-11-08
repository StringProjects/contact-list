import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

export default class BottomTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name='md-star' style={{fontSize: 24, color: '#5b99d8'}} />
        <Icon name='md-person' style={{fontSize: 24, color: '#5b99d8'}} />
        <Icon name='md-keypad' style={{fontSize: 24, color: '#5b99d8'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
});